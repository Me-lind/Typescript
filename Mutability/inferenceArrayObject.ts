type ButtonAttributes = {
    type: "button" | "submit" | "reset";
};

const modifyButtons = (attributes: ButtonAttributes[]) => { };

const buttonsToChange: ButtonAttributes[] = [
    {
        type: "button",
    },
    {
        type: "submit",
    },
];

modifyButtons(buttonsToChange);