# 🧩 Lab 9 – The Final Warm-Up  

**Deployed App:** [ View Live on Cloudflare Pages](https://lab9-the-final-warmup-5u1.pages.dev/)

---

##  Overview

This lab was a **brownfield engineering challenge**:  
I was given AI-generated “slop code” for a **Task Management (Todo) Application** built with **Lit** and **Vite**, and my goal was to transform it into production-grade code with:

-  **Unit and E2E testing**
-  **Automated linting**
-  **Continuous integration (CI)**
-  **Deployment to Cloudflare Pages**
-  **Documentation and refactoring**

This project demonstrates my ability to **inherit poorly structured code**, refactor it for maintainability, introduce **quality automation**, and deploy it using a **modern DevOps pipeline**.

---

##  Objectives & Requirements

The lab required the following:

1. Refactor and clean AI-generated Vite/Lit code.  
2. Add **unit tests (Vitest)** and **E2E tests (Playwright)**.  
3. Set up **GitHub Actions** for continuous integration and linting.  
4. Deploy the app through **Cloudflare Pages** (or Netlify).  
5. Use **JSDoc** to generate documentation and type hints.  
6. Demonstrate creativity and ownership by improving code and UI.  
7. Track all progress via **GitHub Issues** and **commits**.

---

##  Tech Stack

| Category | Tool | Purpose |
|-----------|------|----------|
| **Frontend** | [Vite](https://vitejs.dev/) | Lightning-fast dev server & build system |
| **Web Components** | [Lit](https://lit.dev/) | Reactive, modular UI components |
| **Testing (Unit)** | [Vitest](https://vitest.dev/) | Fast, Vite-native test runner |
| **Testing (E2E)** | [Playwright](https://playwright.dev/) | Full browser automation testing |
| **Linting** | [ESLint](https://eslint.org/) & [Super-Linter](https://github.com/github/super-linter) | Enforce code quality in CI |
| **Documentation** | [JSDoc](https://jsdoc.app/) | Generate developer documentation |
| **Deployment** | [Cloudflare Pages](https://pages.cloudflare.com/) | Automated build & deployment |
| **CI/CD** | [GitHub Actions](https://github.com/features/actions) | Continuous integration workflows |

---

##  Architecture Overview

This app follows a **Model–View–Controller (MVC)** pattern built using **Lit components**.


**Flow summary:**
1. `todo-form` emits `add-todo` events → caught by `todo-app`.
2. `todo-app` updates `todo-model`.
3. `todo-model` persists changes via `storage-service`.
4. `todo-list` re-renders automatically via reactive properties.

---

##  Testing

### Unit Testing with Vitest

- Added `vitest.config.js` and scripts in `package.json`.
- Tested logic and persistence layers (`TodoModel`, `StorageService`).
- Used mock localStorage for non-browser testing.
- Command:  
  ```bash
  npm run test:unit


