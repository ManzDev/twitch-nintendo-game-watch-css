class GameWatchPad extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        transform: translateY(-30px);
      }

      .container {
        --size: calc(var(--width) * 0.16);
        --border-color: #5b0a0a;
        --round: 5px;

        width: var(--size);
        height: var(--size);
        filter:
          /* drop-shadow(0 0 1px var(--model-color)) */
          drop-shadow(6px 0 0 var(--model-color))
          drop-shadow(0 -6px 0 var(--model-color))
          drop-shadow(-6px 0 0 var(--model-color))
          drop-shadow(0 6px 0 var(--model-color))
          drop-shadow(0 -2px 0 #fff9)
          drop-shadow(2px 0 0 var(--border-color))
          drop-shadow(0 -2px 0 var(--border-color))
          drop-shadow(0 1px 0 #0008)
          drop-shadow(-2px 0 0 var(--border-color))
          drop-shadow(0 2px 0 var(--border-color));

        display: grid;
        grid-template-areas:
          ". up ."
          "left center right"
          ". down .";
      }

      .pad {
        background: #26272b;
        color: #111;
        position: relative;

        & span {
          font-size: 2.5rem;
          transform: translate(0, -10px);
          display: inline-block;
          position: absolute;
          filter: drop-shadow(1px 1px 0 #fff7);
        }
      }

      .up {
        grid-area: up;
        border-radius: var(--round) var(--round) 0 0;
        filter:
          drop-shadow(0 -2px 0 #fff7)
          drop-shadow(-2px 0 0 #fff7)
          drop-shadow(0 -3px 0 #111)
          drop-shadow(3px 0 0 #111)
          drop-shadow(-3px 0 0 #111);
      }
      .left {
        grid-area: left;
        border-radius: var(--round) 0 0 var(--round);
        filter:
          drop-shadow(0 -2px 0 #fff7)
          drop-shadow(-2px 0 0 #fff7)
          drop-shadow(0 3px 0 #111)
          drop-shadow(0 -3px 0 #111)
          drop-shadow(-3px 0 0 #111);
      }
      .center {
        grid-area: center;
        display: grid;
        place-items: center;

        & .gap {
          --size: 30px;

          width: var(--size);
          height: var(--size);
          border-radius: 50%;
          background:
            radial-gradient(70% 70% at 50% 50%, #0e0e0e 35%, #0000 60%),
            radial-gradient(50% 50% at 50% 45%, #9e9e9e 25%, #0e0e0e, #0000),
            radial-gradient(circle at 50% 0, #0e0e0e 65%, #0000),
            radial-gradient(80% 80% at 48% 48%, #bdbdbd 25% 50%, #0000 60%),
            linear-gradient(#0000, #0e0e0e 0%);
          border-top: calc(var(--size) * 0.04) solid #515151;
          transform: rotate(-45deg);
          position: absolute;
        }

      }
      .right {
        grid-area: right;
        border-radius: 0 var(--round) var(--round) 0;
        filter:
          drop-shadow(0 -2px 0 #fff7)
          drop-shadow(0 3px 0 #111)
          drop-shadow(0 -3px 0 #111)
          drop-shadow(3px 0 0 #111);
      }
      .down {
        grid-area: down;
        border-radius: 0 0 var(--round) var(--round);
        filter:
          drop-shadow(-2px 0 0 #fff7)
          drop-shadow(0 3px 0 #111)
          drop-shadow(3px 0 0 #111)
          drop-shadow(-3px 0 0 #111);
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${GameWatchPad.styles}</style>
    <div class="container">
      <div class="pad up">
        <span>🡅</span>
      </div>
      <div class="pad left">
        <span>🡄</span>
      </div>
      <div class="pad center">
        <div class="gap"></div>
      </div>
      <div class="pad right">
        <span>🡆</span>
      </div>
      <div class="pad down">
        <span>🡇</span>
      </div>
    </div>`;
  }
}

customElements.define("game-watch-pad", GameWatchPad);
