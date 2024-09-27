"use strict";
const addClickEventListener = (listener) => {
    document.addEventListener("click", listener);
};
addClickEventListener(() => {
    console.log("Clicked!");
});
