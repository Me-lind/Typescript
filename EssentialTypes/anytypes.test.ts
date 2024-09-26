import { expect,it } from 'vitest'

it("Should handle a form submit", () => {
    const form = document.createElement("form");

    form.innerHTML = `
  <input name="name" value="John Doe"></Exercise>
  `;

    form.onsubmit = (e) => {
        const value = handleFormData(e);

        expect(value).toEqual({ name: "John Doe" });
    };

    form.requestSubmit();

    expect.assertions(1);
});