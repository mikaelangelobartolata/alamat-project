import previousService from "./previousService.js";
import previousUI from "./previousUI.js";

import previousAnimation from "../../animations/previousAnimation.js";
import readServices from "../read/readService.js";
import readUI from "../read/readUi.js";

import getPreviousScene from "./previousService.js";

const book = document.querySelector(".book");


const previousController = {
    handleAnimation() {
        book.appendChild(previousUI());
        
        const finishedOnce = readServices.checkReadStatus();
        const checkCurrScene = readServices.getCurrScene();

        if (finishedOnce && checkCurrScene !== "scene1") return;
        previousAnimation();
    },
    handleClick() {
        const previousBtn = document.querySelector(".previous-btn");
        
        previousBtn.addEventListener("click", () => {
            if (readServices.getCurrScene() === "scene1") return;

            const coverDiv = document.querySelector(".cover-div");
            const previousScene = getPreviousScene();
            const sceneData = readServices.getNextSceneData(previousScene);

            const returnObj = readUI(sceneData.img, sceneData.scene);
            coverDiv.appendChild(returnObj.imgDiv);
            readServices.setCurrView(previousScene);
        });
    }
}

export default previousController;