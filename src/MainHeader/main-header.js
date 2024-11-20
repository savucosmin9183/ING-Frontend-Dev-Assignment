import { LitElement, html, css } from 'lit';

class MainHeader extends LitElement {
  static styles = css`
    header {
      background-color: #333;
      color: white;
      padding: 10px;
      text-align: center;
    }
  `;

  render() {
    return html`
      <header>
        <h1>Test Header</h1>
      </header>
    `;
  }
}

customElements.define('main-header', MainHeader);