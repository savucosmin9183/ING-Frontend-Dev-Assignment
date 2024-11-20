import { css } from 'lit';
import { LionInput } from '@lion/ui/input.js';

class MyInput extends LionInput {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
            text-align: left;
        }

        .form-field__label{
            font-size: 16px;
            margin-bottom: 5px;
        }
        
        .input-group {
            background-color: rgb(255, 255, 255);
            background-image: none;
            border: 1px solid #D9D9D9;
            border-radius: 4px;
            padding: 0px;
        }
        
        .form-field__feedback{
            color: red;
            font-size: 13px;
            margin-top: 4px;
        }
      `,
    ];
  }
}
customElements.define('my-input', MyInput);