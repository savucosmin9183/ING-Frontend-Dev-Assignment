import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';
import './MainHeader/main-header.js';
import './MainFooter/main-footer.js';
import './LoginForm/login-form.js';
import './UserDetails/user-details.js';

class MainApp extends LitElement {
  static styles = css`
    :host {
      min-height: 100vh;
      font-size: 15px;
      color: #1a2b42;
      margin: 0 auto;
    }
  `;

  firstUpdated() {
    const outlet = this.shadowRoot.getElementById('outlet');
    const router = new Router(outlet);

    router.setRoutes([
      { path: '/', component: 'login-form' },
      { path: '/user-details', component: 'user-details' },
    ]);
  }

  render() {
    return html`
      <main-header></main-header>
      <div id="outlet"></div>
      <main-footer></main-footer>
    `;
  }
}

customElements.define('main-app', MainApp);