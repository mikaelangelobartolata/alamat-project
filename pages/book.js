import readServices from "../features/read/readService.js";
import readUI from "../features/read/readUi.js";

import historyController from "../features/history/historyController.js";
import nextController from "../features/nextRead/nextController.js";
import previousController from "../features/previous/previousController.js";

import quizController from "../features/quiz/quizController.js";


const renderingLastViewPage = () => {
    const coverDiv = document.querySelector(".cover-div");

    const lastView = readServices.getLastViewData();
    const img = lastView.img;
    const scene = lastView.scene;

    const returnObj = readUI(img, scene);

    coverDiv.appendChild(returnObj.imgDiv);
}
renderingLastViewPage();
historyController.saveOnExit();
nextController();

previousController.handleAnimation();
previousController.handleClick();
