import { html } from 'lit';
import { fixture, expect, oneEvent } from '@open-wc/testing';
import { Router } from '@vaadin/router';
import '../src/main-app.js';

describe('MainApp', () => {
  let element;

  beforeEach(async () => {
    // Create the fixture of <main-app> element
    element = await fixture(html`<main-app></main-app>`);
  });

  it('renders the main-header, login-form, and main-footer components', async () => {
    await new Promise(resolve => {setTimeout(resolve, 100)}); // Wait for router to load the login form

    const mainHeader = element.shadowRoot.querySelector('main-header');
    const loginForm = element.shadowRoot.querySelector('#outlet login-form');
    const mainFooter = element.shadowRoot.querySelector('main-footer');

    expect(mainHeader).to.exist;
    expect(loginForm).to.exist;
    expect(mainFooter).to.exist;
  });

  it('renders a login form with a heading', async () => {
    await new Promise(resolve => {setTimeout(resolve, 100)});

    const loginForm = element.shadowRoot.querySelector('#outlet login-form');
    const heading = loginForm.shadowRoot.querySelector('h2');

    expect(heading).to.exist;
    expect(heading.textContent).to.equal('Bine ai venit!');
  });

  it('renders the main-header with logo', async () => {
    const mainHeader = element.shadowRoot.querySelector('main-header');
    const logo = mainHeader.shadowRoot.querySelector('.header-logo');

    expect(logo).to.exist;
  });

  it('shows required validation messages when fields are empty and form is submitted', async () => {
    await new Promise(resolve => {setTimeout(resolve, 100)});

    const loginForm = element.shadowRoot.querySelector('#outlet login-form');
    await loginForm.updateComplete;

    const usernameInput = loginForm.shadowRoot.querySelector('input[name="username"]');
    const passwordInput = loginForm.shadowRoot.querySelector('input[name="password"]');

    usernameInput.value = '';
    passwordInput.value = 'password123';

    usernameInput.dispatchEvent(new Event('input', { bubbles: true }));
    passwordInput.dispatchEvent(new Event('input', { bubbles: true }));

    const submitButton = loginForm.shadowRoot.querySelector('button[type="submit"]');
    submitButton.click();

    await loginForm.updateComplete;

    const feedbackElements = loginForm.shadowRoot.querySelectorAll('lion-validation-feedback');
    const usernameFeedback = Array.from(feedbackElements).find(feedback => feedback.textContent.includes('Te rugam sa introduci username.'));

    expect(usernameFeedback).to.not.be.null;
  });

  it('submits the login form and stores the username in localStorage', async () => {
    await new Promise(resolve => {setTimeout(resolve, 100)});

    const loginForm = element.shadowRoot.querySelector('#outlet login-form');
    await loginForm.updateComplete;

    const usernameInput = loginForm.shadowRoot.querySelector('input[name="username"]');
    const passwordInput = loginForm.shadowRoot.querySelector('input[name="password"]');

    usernameInput.value = 'testuser';
    passwordInput.value = 'password123';

    usernameInput.dispatchEvent(new Event('input', { bubbles: true }));
    passwordInput.dispatchEvent(new Event('input', { bubbles: true }));

    const submitButton = loginForm.shadowRoot.querySelector('button[type="submit"]');
    submitButton.click();

    const navigationEvent = await oneEvent(window, 'vaadin-router-location-changed');
    expect(navigationEvent.detail.location.pathname).to.equal('/user-details');

    const storedUsername = localStorage.getItem('username');
    expect(storedUsername).to.equal('testuser');
  });

  it('displays the welcome message on the user-details page', async () => {
    await new Promise(resolve => {setTimeout(resolve, 100)});

    const userDetails = element.shadowRoot.querySelector('#outlet user-details');
    await userDetails.updateComplete;

    const welcomeMessage = userDetails.shadowRoot.querySelector('p');
    expect(welcomeMessage).to.exist;
    expect(welcomeMessage.textContent).to.equal('Welcome, testuser!');
  });

  it('logs out and redirects to the homepage', async () => {
    localStorage.setItem('username', 'testuser');
    Router.go('/user-details');

    await element.updateComplete;

    const header = element.shadowRoot.querySelector('main-header');
    await header.updateComplete;

    const logoutButton = header.shadowRoot.querySelector('.logout-button');
    expect(logoutButton).to.not.be.null;

    logoutButton.click();

    const logoutNavigationEvent = await oneEvent(window, 'vaadin-router-location-changed');
    expect(logoutNavigationEvent.detail.location.pathname).to.equal('/');

    const loggedOutUsername = localStorage.getItem('username');
    expect(loggedOutUsername).to.be.null;
  });

});
