# Pacifique

Marketing and landing site for **Pacifique AV** (Pacifique Humans Club), a smart luxury eco-retreat concept paired with an NFT membership. The site presents the brand vision, membership benefits, team, and roadmap, and includes a MetaMask wallet connection flow for the NFT mint.

It is a single page React application with a few additional routed pages, styled with styled-components and animated on scroll.

## Tech stack

- **React 18** with React Router v6 for routing and lazy-loaded routes
- **styled-components** for all component styling
- **web3.js** with MetaMask for wallet connection (Ethereum mainnet)
- **Create React App** built through **react-app-rewired** (see `config-overrides.js`, which adds the Node polyfills web3 needs in the browser)
- **Swiper** for the carousel, **AOS** for scroll animations, **react-scroll** for in-page navigation, **react-toastify** for notifications, **react-icons** for icons

## Requirements

Node.js 16.15.1, pinned in `.nvmrc`. With nvm:

```bash
nvm use
```

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server at [http://localhost:3000](http://localhost:3000):

```bash
npm start
```

## Available scripts

- `npm start`: runs the app in development mode with hot reload.
- `npm run build`: builds the production bundle into the `build` folder (source maps are disabled).
- `npm test`: runs the test runner in watch mode.

All scripts run through `react-app-rewired` so the custom webpack configuration in `config-overrides.js` is applied.

## Routes

| Path | Page |
| --- | --- |
| `/` | Landing page (all marketing sections) |
| `/eco`, `/restaurant`, `/farm`, `/healing`, `/adventures`, `/music`, `/boutique` | "Essential" experience pages |
| `/values`, `/benefits`, `/nfts`, `/buy`, `/faq` | Membership and NFT description pages |
| `/mint` | NFT mint page (wallet connection) |

## Project structure

```
src/
  App.js                 Routing and web3 / MetaMask setup
  index.js               App entry point
  polyfill.js            Browser polyfills for web3 (Buffer, process)
  contexts/              EthereumContext (provider, accounts, web3, current account)
  layouts/
    common/header/       Shared header (chrome and menu logic)
    landing-layout/      Landing header, footer, and intro overlay
    app-layout/          Header used by sub pages
    mint-layout/         Layout for the mint page
  components/
    common/              Reusable pieces (section, modal, room, team, action)
    intro-section/       Shared layout for the essential pages
    description-section/ Shared layout for the description pages
  pages/
    landing/             Homepage sections (hero, vision, nature, roadmap, ...)
    essential/           Eco, restaurant, farm, healing, adventures, music, boutique
    description/         Values, benefits, nfts, buy, faq
    mint/                Mint form
  utils/                 Helpers (isScreenWidth)
  assets/                Fonts and images
```

### Conventions

- Each component lives in its own folder as `index.js` (logic and markup) plus a `*.styled.js` file for its styled-components.
- Static content (lists, copy collections) is kept in a sibling `data.js`.
- The two header variants share a single `Header` in `layouts/common/header`; the landing variant passes in-page scroll links and the app variant passes route links.

## Web3 notes

- The app expects the **MetaMask** browser extension and the **Ethereum mainnet**. It shows a toast if MetaMask is missing or the wrong network is selected.
- The mint page currently handles wallet connection and the mint UI. Wiring it to a deployed contract is left as a follow up.
