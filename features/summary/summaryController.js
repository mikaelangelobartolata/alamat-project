import createUi from "./summaryUi.js";

const spoilerBtn = document.querySelector(".summary-spoiler-button");

function clickSpoiler() {
    const summaryContainer = document.querySelector(".summary-container");

    spoilerBtn.addEventListener("click", () => {
        if (!summaryContainer.querySelector("#text")) {
            summaryContainer.appendChild(createUi());
            return;
        }
        summaryContainer.querySelector("#text").remove();
    });
}

export default clickSpoiler;