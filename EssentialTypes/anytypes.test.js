"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
(0, vitest_1.it)("Should handle a form submit", () => {
    const form = document.createElement("form");
    form.innerHTML = `
  <input name="name" value="John Doe"></Exercise>
  `;
    form.onsubmit = (e) => {
        const value = handleFormData(e);
        (0, vitest_1.expect)(value).toEqual({ name: "John Doe" });
    };
    form.requestSubmit();
    vitest_1.expect.assertions(1);
});
