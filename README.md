# ⚡ Default NewTab

> Transform your browser's blank new tab into a sleek, functional, and distraction-free personal command center.

Built with **React**, **TypeScript**, and **Vite**, **Default NewTab** provides a fast, customizable, and lightweight dashboard for modern browsers supporting **Manifest V3** across both Chrome and Firefox.

---

## ✨ Features

- **Live Clock & Dynamic Calendar:** Real-time clock with full date display at a glance.
- **Live Weather Widget:** Instant local forecasts powered by Open-Meteo (no API keys required).
- **Minimalist Theme Switcher:** Instant theme switching with clean background palettes saved to local storage.
- **Custom Quick Links:** Add, organize, and access your most important links in one click.
- **Bookmarks & Top Sites Integration:** Quick access to your recent bookmarks and frequently visited pages via native browser APIs.
- **Cross-Browser Manifest V3 Ready:** Modular build configurations ready for Chrome, Brave, Edge, and Firefox.

---

## 🛠️ Tech Stack

- **Framework:** [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler:** [Vite](https://vitejs.dev/)
- **Linter & Formatting:** [Oxlint](https://oxc.rs/)
- **Extension Standard:** WebExtensions Manifest V3 (Chrome & Firefox configurations)

---

## 📁 Project Structure

```text
DEFAULT_NEWTAB
├── dist/                 # Production build artifacts
├── manifests/            # Target-specific manifests (chrome.json, firefox.json)
├── public/               # Static assets & icons
├── src/
│   ├── assets/           # Media & static UI files
│   ├── components/       # UI widgets (Clock, Weather, QuickLinks, etc.)
│   ├── hooks/            # Custom hooks (localStorage, theme, weather)
│   ├── services/         # Extension & Browser APIs
│   ├── styles/           # Global design & themes
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Helper functions
│   ├── App.tsx           # Dashboard main layout
│   └── main.tsx          # Root entry point
├── vite.config.ts        # Vite configuration & extension build pipeline
└── package.json

```

---
## 🚀 Getting Started

1. Clone & Install
Bash

        git clone [https://github.com/sachin-bi/default_newtab.git](https://github.com/sachin-bi/default_newtab.git)
        
        cd default_newtab
        
        npm install

2. Run Development Server
Bash

        npm run dev

3. Build for Production
Bash

        npm run build

---

## 🧩 Loading into Your Browser
Chrome / Brave / Edge



    Open chrome://extensions/ in your browser.

    Enable Developer mode (top-right toggle).

    Click Load unpacked.

    Select the dist folder generated after running npm run build.

Firefox

    Open about:debugging#/runtime/this-firefox.

    Click Load Temporary Add-on....

    Select the manifest.json (or index.html) inside the dist directory.

---

## 🤝 Contributing

- Contributions, issues, and feature requests are welcome!

- Feel free to check the issues page.


- made with love by sachinandan.me :)

