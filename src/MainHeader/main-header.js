/* eslint-disable wc/require-listener-teardown */
/* eslint-disable class-methods-use-this */
import { LitElement, html, css } from 'lit';
import '../Components/my-button.js';
import { Router } from '@vaadin/router';


class MainHeader extends LitElement {
  static styles = css`
    header {
      background-color: white;
      padding: 20px;
      display: flex;
      justify-content: space-between;
    }

    .header-logo{
      width: 130px;
      height: 40px;
    }
  `;

  static properties = {
    currentPath: { type: String },
  };

  constructor() {
    super();
    this.currentPath = window.location.pathname;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('vaadin-router-location-changed', this._updateRoute.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('vaadin-router-location-changed', this._updateRoute.bind(this));
  }

  _updateRoute(event) {
    this.currentPath = event.detail.location.pathname;
  }

  _handleLogout() {
    localStorage.removeItem('username');
    Router.go('/');
  }

  render() {
    return html`
      <header>
        <img class='header-logo' src='../../assets/ing-logo.svg' alt='ing logo'/>
        ${this.currentPath === '/user-details'
          ? html`<my-button @click="${this._handleLogout}" class="logout-button">Logout</my-button>`
          : ''}
      </header>
    `;
  }
}

customElements.define('main-header', MainHeader);