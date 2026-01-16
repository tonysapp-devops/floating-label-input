# Advanced Floating Label Input

## TL;DR

A modern floating-label input component built with **pure HTML, CSS, and minimal JavaScript**.

* No frameworks or libraries
* Clear separation of structure, visuals, and logic
* Focus on UI/UX, animations, and clean architecture

Perfect as a **portfolio project**, UI showcase, or reusable component.

---

# Advanced Floating Label Input

An interactive UI input component with a floating label and modern visual effects. This project demonstrates a **clean separation of concerns** between HTML, CSS, and JavaScript.

---

## Features

* Floating label without JavaScript
* Entrance animation (fade + blur)
* Glow effect on focus
* Gradient text while typing
* Liquid background reacting to cursor movement
* Email validation
* Error animation (shake / snake)
* Success and error status messages

---

## 📁 Project Structure

```text
project/
│
├── index.html   # HTML markup
├── style.css    # Styles and animations
└── script.js    # Logic and interactivity
```

---

## Quick Start

1. Clone the repository or copy the files
2. Open `index.html` in your browser
3. Start typing an email address

No build tools, libraries, or dependencies are required.

---

## Architecture Overview

### 1. HTML — Structure

`index.html` contains **only semantic markup**:

* `.form` — form container
* `.field` — root component wrapper
* `<input>` — input field
* `<label>` — floating label
* `.status` — success and error messages
* `.liquid` — decorative visual layer

HTML does not include logic or visual effects.

---

### 2. CSS — Visuals & Animations

`style.css` is responsible for:

* Reset and base styles
* Form entrance animation
* Floating label via `:placeholder-shown`
* Glow effect on focus
* Gradient text
* Liquid background using CSS variables
* Shake animation on error
* Showing and hiding status messages

CSS **reacts only to classes** and contains no business logic.

---

### 3. JavaScript — Logic

`script.js` handles a minimal set of responsibilities:

* Tracking user input
* Email validation using RegExp
* Toggling `.success` and `.error` classes
* Passing cursor coordinates into CSS variables

JavaScript **never manipulates styles directly**.

---

## Key Technical Decisions

### Floating Label without JS

Implemented using:

```css
input:focus + label,
input:not(:placeholder-shown) + label
```

This allows the label to react to:

* focus
* input value presence

---

### Liquid Effect

JavaScript passes cursor coordinates:

```js
field.style.setProperty('--x', '...');
field.style.setProperty('--y', '...');
```

CSS consumes them inside a `radial-gradient`.

---

### Validation Logic

```js
/^[^\s@]+@[^\s@]+\.[^\s@]+$/
```

Behavior:

* empty input → no state
* valid email → `.success`
* invalid email → `.error`

---

## What This Project Demonstrates

* Strong separation of concerns (HTML / CSS / JS)
* Ability to build complex UI interactions with minimal JavaScript
* Deep understanding of modern CSS (animations, gradients, variables)
* UX-focused thinking (visual feedback, validation states)
* Production-ready component structure
* Attention to micro-interactions and polish

This project is intentionally **small in scope but deep in quality**, which makes it ideal for portfolio reviews.

---

## Use Cases

* Frontend developer portfolio
* UI/UX interaction showcase
* Base component for a design system
* Input field for landing pages or SaaS products

---

## Possible Improvements

* Support for multiple input types
* Theme support (light / dark)
* Accessibility improvements (ARIA attributes)
* Mobile optimizations
* Backend-integrated validation

---

## License

Free to use for both educational and commercial projects.

---

## Author

Anton Sayapin

Frontend / UI Developer

---

If you are reading this README — the code is already doing its job 🙂
