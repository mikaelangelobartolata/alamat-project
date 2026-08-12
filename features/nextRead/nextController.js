import readUI from "../read/readUi.js";
import nextService from "./nextService.js";
import readServices from "../read/readService.js";

import finishedReadingAnimation from "../../animations/finishedReadingAnimation.js";

const nextBtn = document.querySelector(".next-btn");

function nextController() {
    nextBtn.addEventListener("click", () => {
        const coverDiv = document.querySelector(".cover-div");

        const nextScene = nextService.getNextScene();
        const sceneData = readServices.getNextSceneData(nextScene);

        if (!sceneData) {
            finishedReadingAnimation();
            readServices.setBookFinish("set");
            readServices.setFinished();
            return;
        }

        const returnObj = readUI(sceneData.img, sceneData.scene);
        coverDiv.appendChild(returnObj.imgDiv);
        readServices.setCurrView(nextScene);
    });
}

export default nextController;