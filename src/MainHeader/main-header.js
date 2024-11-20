import { LitElement, html, css } from 'lit';

class MainHeader extends LitElement {
  static styles = css`
    header {
      background-color: white;
      padding: 20px;
      display: flex;
    }

    .header-logo{
      width: 130px;
      height: 40px;
    }
  `;

  render() {
    return html`
      <header>
        <img class='header-logo' src='../../assets/ing-logo.svg' alt='ing logo'/>
      </header>
    `;
  }
}

customElements.define('main-header', MainHeader);