# React Form Validation Example

This project demonstrates how to build a simple yet functional form in React using:

## 🔧 Features & Concepts

- **React State (`useState`)** – For managing input validity.
- **Refs (`useRef`)** – To access input values directly without two-way binding.
- **Forward Refs (`forwardRef`)** – So parent components can reference child inputs.
- **Imperative Handle (`useImperativeHandle`)** – To expose custom methods from inputs (if extended).
- **Portals (`createPortal`)** – For rendering the dialog outside the main DOM tree.
- **HTML5 `<dialog>` Element** – For showing a modal confirmation message after successful validation.
- **Tailwind CSS** – For styling the UI.

## ✅ Validation Logic

- Name: required
- Email: must include `@`
- Password: minimum 6 characters

## 🧠 Behavior

- Inputs show red borders when invalid.
- On successful validation, a modal dialog confirms submission.
- The form resets when the dialog closes.

---

Clone, run, and explore how React handles DOM interaction patterns outside of controlled components.
