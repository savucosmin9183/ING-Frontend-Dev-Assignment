import { LitElement, html, css } from 'lit';

class MainFooter extends LitElement {
  static styles = css`
    footer {
      background-color: #333;
      color: white;
      padding: 10px;
      text-align: center;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  `;

  render() {
    return html`
      <footer>
        <p>test footer</p>
      </footer>
    `;
  }
}

customElements.define('main-footer', MainFooter);