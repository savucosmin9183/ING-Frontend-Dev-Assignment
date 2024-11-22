/* eslint-disable lit/attribute-value-entities */
import { LitElement, html, css } from 'lit';

class MainFooter extends LitElement {
  static styles = css`
    footer {
      background-color: #f2f2f2;
      color: #333333;
      padding: 20px;
      text-align: center;
      position: relative;
      margin-top: 50px;
    }

    footer a {
      color: #333333;
      text-decoration: none;
    }

    .mobile-badges {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .mobile-badges .ios .badge {
      background-image: url(https://www.homebank.ro/hb/hb/assets/images/c0cda0b72a6facf6c999.svg);
      background-size: contain;
      background-repeat: no-repeat;
      width: 120px;
      height: 40px;
      margin-bottom: 20px;
    }

    .mobile-badges .android .badge {
      background-image: url(https://www.homebank.ro/hb/hb/assets/images/6fd448b800ea5db22e3b.svg);
      background-size: contain;
      background-repeat: no-repeat;
      width: 120px;
      height: 40px;
    }

    .desktop-badges {
      display: none;
      width: 100%;
      justify-content: center;
    }

    .desktop-badges .ios .badge {
      background-image: url(https://www.homebank.ro/hb/hb/assets/images/1bc9e6e4a1e2a2b635c9.svg);
      width: 116px;
      height: 168px;
      background-size: 100%;
    }

    .desktop-badges .android .badge {
      background-image: url(https://www.homebank.ro/hb/hb/assets/images/ad8d99aca7ffd7008b58.svg);
      width: 116px;
      height: 168px;
      background-size: 100%;
    }

    .help-items {
      margin-top: 30px;
      margin-bottom: 80px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .help-items .item {
      margin-bottom: 15px;
    }

    .copyright {
      font-size: 12px;
      margin-bottom: 40px;
    }

    @media (min-width: 576px) {
      .mobile-badges {
        display: none;
      }

      .desktop-badges {
        display: flex;
      }

      .ios {
        margin-right: 150px;
      }

      .help-items {
        flex-direction: row;
        justify-content: center;
        column-gap: 20px;
      }

      .help-items > * {
        position: relative;
      }

      .help-items > *::after {
        content: '';
        position: absolute;
        top: 0;
        right: -10px;
        height: 100%;
        width: 1px;
        background-color: #ccc;
      }

      .help-items > *:last-child::after {
        display: none;
      }

      .help-items .item {
        margin-bottom: 0px;
      }

      footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
      }
    }
  `;

  render() {
    return html`
      <footer>
        <div class="mobile-badges">
          <div class="ios">
            <a
              target="_blank"
              href="https://itunes.apple.com/ro/app/ing-homebank/id458609168?mt=8&ls=1"
            >
              <div class="badge"></div>
            </a>
          </div>
          <div class="android">
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=ro.ing.mobile.banking.android.activity&pli=1"
            >
              <div class="badge"></div>
            </a>
          </div>
        </div>
        <div class="desktop-badges">
          <div class="ios">
            <a
              target="_blank"
              href="https://itunes.apple.com/ro/app/ing-homebank/id458609168?mt=8&ls=1"
            >
              <div class="badge"></div>
            </a>
          </div>
          <div class="android">
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=ro.ing.mobile.banking.android.activity&pli=1"
            >
              <div class="badge"></div>
            </a>
          </div>
        </div>
        <div class="help-items">
          <a
            class="item"
            target="_blank"
            href="https://www.ing.ro/ing-in-romania/contact"
          >
            Suna-ne
          </a>
          <a
            class="item"
            target="_blank"
            href="http://www.youtube.com/user/ingbankromania"
          >
            Tutoriale
          </a>
          <a
            class="item"
            target="_blank"
            href="https://ing.ro/persoane-fizice/internet-banking/homebank#faq"
          >
            Intrebari frecvente
          </a>
        </div>
        <p class="copyright">
          ©2024, ING Bank N.V. Amsterdam, Sucursala București
        </p>
        <a target="_blank" href="http://www.anpc.gov.ro/">
          <img
            loading="lazy"
            width="250"
            height="50"
            src="https://www.homebank.ro/hb/hb/assets/images/9978f887a71d4bd370fc.svg"
            alt="ANPC insolvența persoanelor fizice"
          />
        </a>
      </footer>
    `;
  }
}

customElements.define('main-footer', MainFooter);
