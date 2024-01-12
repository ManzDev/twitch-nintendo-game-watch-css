class OptionButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        display: grid;
        place-items: center;
      }

      .button-container {
        --width: 40px;
        --height: calc(var(--width) * 0.6);

        background: #940315;
        width: var(--width);
        margin: auto;
        height: var(--height);
        border-radius: 25px;
        display: grid;
        border: 2px solid #0006;
        place-items: center;
        box-shadow:
          1px 1px 0 #fff5 inset,
          -3px -3px 4px #0005 inset,
          0 2px 0 #fff7;

        & .button {
          --width: 75%;
          --height: 65%;

          width: var(--width);
          height: var(--height);
          border: 1px solid #222;
          border-radius: 25px;
          background: #aca8a7;
          box-shadow:
            2px 2px 3px #fff5 inset,
            -2px -2px 2px #0004 inset;

          &:active {
            box-shadow: none;
            scale: 0.97;
          }
        }
      }

      .text {
        font-family: var(--logo-font);
        font-size: 0.8rem;
        font-weight: bold;
        color: #222;
        padding-top: 0.2rem;
        width: var(--end-width);
        text-align: center;
      }
    `;
  }

  connectedCallback() {
    this.text = this.getAttribute("text") ?? "?";
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${OptionButton.styles}</style>
    <div class="container">
      <div class="button-container">
        <div class="button"></div>
      </div>

      <div class="text">${this.text}</div>
    </div>`;
  }
}

customElements.define("option-button", OptionButton);
