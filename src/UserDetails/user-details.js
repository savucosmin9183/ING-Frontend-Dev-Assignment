import { LitElement, html, css } from 'lit';

class UserDetails extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
      color: #333;
    }
  `;

  constructor() {
    super();
    this.username = '';
  }

  connectedCallback() {
    super.connectedCallback();
    const queryParams = new URLSearchParams(window.location.search);
    this.username = queryParams.get('username') || 'Guest';
  }

  render() {
    return html`
      <h1>User Details</h1>
      <p>Welcome, ${this.username}!</p>
    `;
  }
}

customElements.define('user-details', UserDetails);