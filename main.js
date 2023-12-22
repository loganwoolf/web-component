import "./style.css";
// @ts-ignore
import javascriptLogo from "./javascript.svg";
// @ts-ignore
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import { html } from "./utility.js";
import { UserCard } from "./UserCard.js";

const app = document.querySelector("#app");

const content = html`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      target="_blank"
    >
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">Click on the Vite logo to learn more</p>
  </div>

  <main>
    <div class="users">
      <user-card name="Logan Woolf" avatar="https://picsum.photos/100?random=1">
        <div slot="email">loganwoolf@gmail.com</div>
        <div slot="phone">4033939088</div>
      </user-card>

      <user-card name="Ozzy Woolf" avatar="https://picsum.photos/100?random=2">
        <div slot="email">ozzywoolf@gmail.com</div>
        <div slot="phone">4033939099</div>
      </user-card>
    </div>
  </main>
`;

if (app) {
  app.innerHTML = content;
}

setupCounter(document.querySelector("#counter"));
