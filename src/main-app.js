import { LitElement, html, css } from 'lit';
import './MainHeader/main-header.js';
import './MainFooter/main-footer.js';
import './LoginForm/login-form.js';

class MainApp extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      min-height: 100vh;
      font-size: calc(10px + 1vmin);
      color: #1a2b42;
      margin: 0 auto;
      text-align: center;
    }

  `;

  render() {
    return html`
      <main-header></main-header>
      <login-form></login-form>
      <main-footer></main-footer>
    `;
  }
}

customElements.define('main-app', MainApp);