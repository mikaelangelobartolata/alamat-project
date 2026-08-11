function continueUi(scene) {
    const summaryContainer = document.querySelector(".summary-container");
    const buttonStart = document.getElementById("buttonStart");

    buttonStart.disabled = true;
    buttonStart.classList.add("disabled")

    summaryContainer.innerHTML = "";
    summaryContainer.classList.remove("summary-container")
    summaryContainer.classList.add("continue-reading-container");

    const detail = document.createElement("p");
    detail.classList.add("recently-visit-detail");

    detail.textContent = `Recently Visit: ${scene}`;

    const continueBtn = document.createElement("button");
    continueBtn.classList.add("continue-reading-btn");

    continueBtn.textContent = "Continue Reading";

    summaryContainer.append(detail, continueBtn);
}

export default continueUi;