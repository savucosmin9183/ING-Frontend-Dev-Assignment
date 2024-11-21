import { LitElement, html, css } from 'lit';

class UserDetails extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 20px;
      color: #333;
    }
  `;

  constructor() {
    super();
    this.username = '';
  }

  connectedCallback() {
    super.connectedCallback();
    this.username = localStorage.getItem('username');
  }

  render() {
    return html`
      <h1>User Details</h1>
      <p>Welcome, ${this.username}!</p>
    `;
  }
}

customElements.define('user-details', UserDetails);