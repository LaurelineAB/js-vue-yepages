import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';  
import {App} from "./apps/app.js";

import { Library } from "./classes/library.js";
import { books } from "./data/data-books.js";

window.addEventListener("DOMContentLoaded", function () {
  createApp(App).mount("#app");
});

let bookTitle = sessionStorage.getItem("bookTitle");
console.log(bookTitle);

export { bookTitle };
