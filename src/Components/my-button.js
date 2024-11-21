import { css, html } from 'lit';
import { LionButton } from '@lion/ui/button.js';

class MyButton extends LionButton {
  static get properties() {
    return {
      buttonColor: { type: String },
      textColor: { type: String },
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: inline-block;
          cursor: pointer;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          padding: 0;
        }

        button {
          background-color: var(--button-color);
          color: var(--text-color);
          width: 100%;
          border: none;
          border-radius: inherit;
          padding: 10px 20px;
          cursor: pointer;
          font-size: inherit;
          font-weight: inherit;
        }
      `,
    ];
  }

  constructor() {
    super();
    this.buttonColor = '#ff6200';
    this.textColor = '#ffffff';
  }

  render() {
    return html`
      <button
        style="--button-color: ${this.buttonColor}; --text-color: ${this.textColor}"
      >
        <slot></slot>
      </button>
    `;
  }

}

customElements.define('my-button', MyButton);