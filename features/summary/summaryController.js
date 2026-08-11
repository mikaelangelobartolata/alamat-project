import createUi from "./summaryUi.js";

const spoilerBtn = document.querySelector(".summary-spoiler-button");

function clickSpoiler() {
    const summaryContainer = document.querySelector(".main-content");

    spoilerBtn.addEventListener("click", () => {
        if (!summaryContainer.querySelector("#text")) {
            const summary = createUi()
            summaryContainer.appendChild(summary);

            setTimeout(() => {
                requestAnimationFrame(() => {
                    summary.classList.add("animate");
                });
            }, 10);
            return;
        }
        const summary = summaryContainer.querySelector("#text");
        
        summary.classList.remove("animate");

        setTimeout(() => {
            summary.remove();
        }, 600);
    });
}

export default clickSpoiler;