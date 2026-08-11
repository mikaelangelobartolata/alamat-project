function readUI(img, scene) {
    document.querySelector(".cover-div").innerHTML = "";
    document.querySelector(".scene-container").innerHTML = "";

    const imgDiv = document.createElement("div");
    const image = document.createElement("img");

    const sceneContainer = document.querySelector(".scene-container");
    const sceneText = document.createElement("p");

    sceneText.textContent = scene;
    image.src = img;

    imgDiv.classList.add("cover");

    imgDiv.appendChild(image);
    sceneContainer.appendChild(sceneText);

    return { imgDiv, sceneContainer };
}

export default readUI;