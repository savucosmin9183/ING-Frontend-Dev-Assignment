import { html, css, LitElement } from 'lit';
import '../Components/my-input.js';
import '../Components/my-button.js';
import '@lion/ui/define/lion-form.js';
import { Required } from '@lion/ui/form-core.js';

class CustomRequired extends Required {
  static async getMessage({ fieldName }) {
    return `Te rugam sa introduci ${fieldName}.`;
  }
}

class LoginForm extends LitElement {
  static get properties() {
    return {
      username: { type: String },
      password: { type: String },
    };
  }

  static styles = css`
    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 250px;
      margin: auto;
    }

    .primary-button {
      display: inline-block;
      cursor: pointer;
      border-radius: 8px;
      font-size: 19px;
      font-weight: 600;
      background-color: #ff6200;
      color: #ffffff;
      width: 100%;
      border: none;
      padding: 10px 20px;
    }

    input.form-control{
        display: block;
        width: 100%;
        padding: 12px;
        font-size: 14px;
        font-weight: normal;
        color: rgb(51, 51, 51);
        background-color: transparent;
        background-image: none;
        border: none;
        appearance: none;
    }

    .form-heading{
        font-size: 20px;
        margin-bottom: 10px;
    }

  `;

  constructor() {
    super();
    this.username = '';
    this.password = '';
  }

  _handleSubmit(event) {
    event.preventDefault();

    const formElement = event.target;
    const { formElements } = formElement;

    const hasErrors = formElements.some(field => field.hasFeedbackFor.includes('error'));

    if (hasErrors) {
      formElement.submitted = true;
      console.log('Form validation failed.');
    } else {
      console.log('Form submitted successfully!');
      console.log('Username:', this.username);
      console.log('Password:', this.password);
    }
  }

  render() {
    return html`
      <lion-form @submit="${this._handleSubmit}">
        <form>
          <p class="form-heading">Bine ai venit!</p>
          <my-input
            name="username"
            label="Username"
            .value="${this.username}"
            @input="${e => { this.username = e.target.value; }}"
            type="text"
            .validators="${[new CustomRequired()]}"
          ></my-input>

          <my-input
            name="password"
            label="Password"
            .value="${this.password}"
            @input="${e => { this.password = e.target.value; }}"
            type="password"
            .validators="${[new CustomRequired()]}"
          ></my-input>

          <button class="primary-button" type="submit">Login</button>
        </form>
      </lion-form>
    `;
  }
}

customElements.define('login-form', LoginForm);
