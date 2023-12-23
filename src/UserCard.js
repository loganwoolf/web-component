// @ts-nocheck
import { html } from './utility.js';

const template = document.createElement('template');
template.innerHTML = html`
    <style>
        .user-card {
            display: grid;
            grid-template-columns: 180px 240px;

            img {
                margin-right: 0.5em;
                width: 100%;
            }

            .card-body {
                background: papayawhip;
            }

            h3 {
                color: orange;
                margin: 0 0 0.5em;
            }
        }
    </style>

    <div class="user-card">
        <img />
        <div class="card-body">
            <h3></h3>
            <div class="user-info">
                <p><slot name="email"></slot></p>
                <p><slot name="phone"></slot></p>
            </div>
            <button data-toggle-info>Hide Info</button>
        </div>
    </div>
`;

export class UserCard extends HTMLElement {
    constructor() {
        super();

        this.showInfo = true;

        this.attachShadow({ mode: 'open' });
        this.shadowRoot?.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText =
            this.getAttribute('name');
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
    }

    toggleInfo() {
        this.showInfo = !this.showInfo;

        const info = this.shadowRoot.querySelector('.user-info');
        const button = this.shadowRoot.querySelector('[data-toggle-info]');

        if (this.showInfo) {
            info.style.display = 'block';
            button.innerText = 'Hide Info';
        } else {
            info.style.display = 'none';
            button.innerText = 'Show Info';
        }
    }

    connectedCallback() {
        this.shadowRoot
            .querySelector('[data-toggle-info]')
            .addEventListener('click', () => this.toggleInfo());
    }

    disconnectedCallback() {
        this.shadowRoot
            .querySelector('[data-toggle-info]')
            .removeEventListener();
    }
}

customElements.define('user-card', UserCard);
