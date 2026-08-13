function previousUI() {
    const previousDiv = document.createElement("div");
    const previousBtn = document.createElement("button");

    previousDiv.classList.add("previous-div");
    previousBtn.classList.add("previous-btn");

    previousBtn.textContent = ">";

    previousDiv.appendChild(previousBtn);

    return previousDiv;
}

export default previousUI;