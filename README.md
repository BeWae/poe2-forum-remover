# Path of Exile 2 Forum Remover

This is a lightweight [Tampermonkey](https://www.tampermonkey.net/) userscript that removes any forum sections related to **Path of Exile 2** on the official [Path of Exile forums](https://www.pathofexile.com/forum). Useful for users who want to focus on other discussions or clean up the interface.

---

## 🚀 Features

- Automatically removes forum boxes that reference "Path of Exile 2"
- Runs on initial page load and watches for dynamically loaded content
- Minimal and efficient — no external dependencies

---

## 📦 Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) in your browser (Chrome, Firefox, Edge, etc.)
2. Click [here to install the script](https://github.com/BeWae/poe2-forum-remover/)
3. Visit [https://www.pathofexile.com/forum](https://www.pathofexile.com/forum) and enjoy the "cleaner" interface

---

## 🛠️ How It Works

The script looks for forum boxes with a `data-id` containing the text "Path of Exile 2". If found, the box is removed from the DOM. A mutation observer ensures dynamic changes (e.g., via infinite scroll or SPA-like loading) are also handled.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🙋‍♂️ Contribution

If you find a bug or want to suggest improvements, feel free to open an issue or pull request.
