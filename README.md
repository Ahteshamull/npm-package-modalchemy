# modalchemy

**Smart, promise-based JS modals styled with Tailwind CSS**

`modalchemy` provides lightweight, fully customizable modals using Tailwind CSS classes.  
Works in **any modern JS framework** or plain JS.

---

## Features

- Promise-based modal API
- Multiple buttons support
- Tailwind CSS styling
- Lightweight and dependency-free
- Mobile-ready
- Works with React, Vue, Svelte, or vanilla JS

---

## Installation

```bash
npm install modalchemy
npm install tailwindcss
```

---

## Usage

```javascript
import { showModal } from "modalchemy";

// Basic modal
showModal({
  title: "Hello World",
  content: "This is a simple modal dialog.",
  buttons: ["Cancel", "OK"],
}).then((result) => {
  console.log(`User clicked: ${result}`);
});

// With default button
showModal({
  title: "Success",
  content: "Operation completed successfully!",
}).then((result) => {
  console.log(`User clicked: ${result}`);
});
```

---

## API Reference

### `showModal(options)`

Returns a `Promise` that resolves with the text of the clicked button.

**Options:**

- `title` (string, optional): Modal title
- `content` (string, optional): Modal content text
- `buttons` (array, optional): Array of button text strings. Defaults to `["OK"]`

---

## License

MIT | Ahteshamul Hasan
