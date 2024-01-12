import "@/components/GameWatchScreen.js";
// import "@/components/DireccionalPad.js";
import "@/components/GameWatchPad.js";
import "@/components/OptionButton.js";
import "@/components/CircleButton.js";

class NintendoGameWatch extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        display: inline-block;
        border-radius: 5px;
        overflow: hidden;
      }

      .container {
        --width: 700px;
        --height: calc(var(--width) * 0.6);
        --model-color: #a6071d;
        --logo-font: "Glacial Indifference", sans-serif;
        --brand-font: Pretendo, sans-serif;
        --normal-font: "Louis George Cafe", sans-serif;
        --shadow-model-color: color-mix(in srgb, var(--model-color), black 20%) linear-gradient(to right, transparent, #0003);
        --aluminum-color: #d8c7a9;
        --aluminum-bg:
          repeating-linear-gradient(
            90deg,
            #0000 0 1px,
            #00000005 3px 4px,
            #0000 5px 6px
          ),
          linear-gradient(-25deg, #0004, #fff4),
          var(--aluminum-color);

        width: var(--width);
        height: var(--height);
        background: var(--model-color);
        display: grid;
        grid-template-rows: 30px 1fr 30px;

        & .top {
          background: var(--shadow-model-color);
          box-shadow:
            0 -2px 2px #fff5 inset,
            0 1px 2px #0007 inset;
        }

        & .center {
          --end-width: 160px;

          display: grid;
          grid-template-columns: var(--end-width) 1fr var(--end-width);
          margin: 8px;
          background:
            linear-gradient(-25deg, #82681b56, transparent),
            var(--aluminum-bg);
          background-size: 100% 100%, 15px 25px, 100% 100%;
          border-radius: 5px;
          box-shadow:
            0 2px 0 #59030f,
            0 3px 0 #fffb;

          & .left {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            & .logo {
              font-family: var(--logo-font);
              font-size: 1.35rem;
              letter-spacing: -0.25px;
              border: 1px solid black;
              width: 80px;
              color: #2d2321;
              background: #d7d8dc;
              border-radius: 6px;
              text-align: center;
              padding: 2px 0;
              line-height: 90%;
              transform: translateY(40px);

              & span {
                font-style: italic;
              }

              & span.a {
                display: inline-block;
                transform: translateX(-1px);
              }
            }

            & game-watch-pad {
              transform: translateY(-30px);
            }
          }

          & .screen {
          }

          & .right {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            & .options {
              display: grid;
              padding-top: 1.5rem;
              padding-right: 2.5rem;
            }

            & .buttons {
              display: flex;
              justify-content: center;
              gap: 10px;
              transform: translateY(-35px);
            }

          }
        }

        & .bottom {
          background: var(--shadow-model-color);
          box-shadow:
          0 -2px 2px #0007 inset;
        }
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${NintendoGameWatch.styles}</style>
    <div class="container">
      <div class="top"></div>
      <div class="center">
        <div class="left">
          <div class="logo">
            <div>G<span><span class="a">A</span>M</span>E</div>
            <div>&</div>
            <div><span>W<span class="a">A</span></span>TCH</div>
          </div>
          <game-watch-pad></game-watch-pad>
        </div>
        <div class="screen">
          <game-watch-screen></game-watch-screen>
        </div>
        <div class="right">
          <div class="options">
            <option-button text="GAME"></option-button>
            <option-button text="TIME"></option-button>
            <option-button text="PAUSE/SET"></option-button>
          </div>
          <div class="buttons">
            <circle-button text="B"></circle-button>
            <circle-button text="A"></circle-button>
          </div>
        </div>
      </div>
      <div class="bottom"></div>
    </div>`;
  }
}

customElements.define("nintendo-game-watch", NintendoGameWatch);
