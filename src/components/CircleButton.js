class CircleButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        display: grid;
        place-items: center;
        place-content: center;
      }

      .button-container {
        --size: 50px;

        background : #940315;
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        display: grid;
        border: 2px solid #0006;
        place-items: center;
        box-shadow:
          1px 1px 0 #fff5 inset,
          -3px -3px 4px #0005 inset,
          0 2px 0 #fff7;

        & .button {
          --size: 80%;

          width: var(--size);
          height: var(--size);
          border: 2px solid #0009;
          border-radius: 50%;
          background: linear-gradient(-30deg, #a31228, #e64451);
          box-shadow:
            2px 2px 3px #fff2 inset,
            -3px -3px 3px #0002 inset;

          &:active {
            box-shadow: none;
            scale: 0.97;
          }
        }
      }

      .text {
        font-family: sans-serif;
        font-weight: bold;
        text-align: center;
        color: #222;
        padding-top: 0.5rem;
      }
    `;
  }

  connectedCallback() {
    this.text = this.getAttribute("text") ?? "?";
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CircleButton.styles}</style>
    <div class="container">

      <div class="button-container">
        <div class="button"></div>
      </div>

      <div class="text">${this.text}</div>

    </div>`;
  }
}

customElements.define("circle-button", CircleButton);
