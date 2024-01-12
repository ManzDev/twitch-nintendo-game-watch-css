import game from "../../public/game.svg?raw";

class GameWatchScreen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        display: grid;
        place-items: center;
        min-height: 100%;
      }

      .container {
        width: 93%;
        height: 89%;
        border: 7px solid #efd1ab;
        border-left-width: 12px;
        border-right-width: 12px;
        border-top-color: #f0d0aa;
        border-left-color: #fbeacc;
        border-right-color: #a27b40;
        border-bottom-color: #704522;
        border-radius: 8px;
        box-shadow: 3px 3px 2px inset #fff;
        filter: drop-shadow(-2px -2px 0 #fbefd9);
        background: var(--aluminum-bg);
        display: grid;
        place-items: center;
      }

      .title {
        font-family: Walkway;
        letter-spacing: 0.5px;
        padding-top: 4px;
      }

      .svg-container {
        width: 315px;
        height: 240px;
        background: #940315;
        margin: auto;
        border-radius: 10px;
        display: grid;
        border: 2px solid #0006;
        place-items: center;
        box-shadow:
          1px 1px 0 #fff5 inset,
          -3px -3px 4px #0005 inset,
          0 2px 0 #fff7;
      }

      svg {
        width: auto;
        height: 225px;
        border-radius: 9px;
      }

      .brand {
        font-family: var(--brand-font);
        font-size: 0.75rem;
        border: 3px solid #000;
        padding: 1px 6px;
        border-radius: 35px;
        letter-spacing: 0.5px;
        transform: translateY(-1px) scale(0.95);

        & sup {
          font-family: sans-serif;
          font-size: 0.3rem;
        }
      }

      .html5 { animation: blink 5s steps(2) backwards infinite 0s; }
      .css3 { animation: blink 4s steps(2) backwards infinite 1s; }
      .js { animation: blink 3s steps(2) backwards infinite 2s; }

      .manzdev {
        animation: move 2s steps(1) backwards infinite;
      }

      @keyframes move {
        0%, 50%, 100% { translate: 0 2px; }
        25%, 75% { translate: 0 10px; }
      }

      @keyframes blink {
        0%, 49%, 100% { opacity: 0.3; }
        50%, 99% { opacity: 1 }
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${GameWatchScreen.styles}</style>
    <div class="container">
      <div class="title">SUPER MANZ BROS.</div>
      <div class="svg-container">${game}</div>
      <div class="brand">NaNtendo<sup>®</sup></div>
    </div>`;
  }
}

customElements.define("game-watch-screen", GameWatchScreen);
