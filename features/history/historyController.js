import historyService from "./historyService.js";
import historyUi from "./historyUi.js";

import readServices from "../read/readService.js";
import quizService from "../quiz/quizService.js";

const historyController = {
    saveOnExit() {
        window.addEventListener("beforeunload", () => {
            historyService.addLastViewPage();
        });
    },
    renderHistory() {
        const historyContainer = document.querySelector(".history-container");
        const historyData = historyService.getHistoryData();

        if (!historyData) return;

        historyContainer.appendChild(historyUi(historyData));

        if (readServices.checkCurrentBookStatus()) {
            readServices.restartViewPage();
            readServices.setBookFinish("remove");

            quizService.clearQuizTaken();
        }
    }
}

export default historyController;