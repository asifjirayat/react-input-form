# React Form Validation Demo

This project showcases a simple yet functional React form with modern patterns and clean UI.

## ✅ What It Demonstrates

- **React `useState`** – Tracks validity of form fields.
- **React `useRef`** – Accesses DOM elements directly for input values.
- **`forwardRef`** – Lets parent components pass refs into child components like custom `<Input />`.
- **`createPortal`** – Renders the dialog/modal outside the normal DOM hierarchy.
- **`<dialog>` element** – Displays a native modal for success messages.
- **Tailwind CSS** – Handles layout and styling.
- Optional: **`useImperativeHandle`** – Can be added to expose methods from child components if needed.

## 🧪 Validation Rules

- Name is required
- Email must include `@`
- Password must be at least 6 characters

Invalid fields are highlighted with a red border. On successful submission, a modal appears and the form resets.

---

## 🛠️ Setup Instructions

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd <project-folder>

   ```

2. **Install dependencies**

   ```bash
   npm install

   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

Then visit http://localhost:5173 in your browser.
