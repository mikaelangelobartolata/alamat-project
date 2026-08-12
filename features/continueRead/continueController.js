import continueService from "./continueService.js";
import continueUi from "./continueReadUi.js";

function continueReadController() {
    const service = continueService();

    if (!service) return;
    continueUi(service);

    if (document.querySelector(".continue-reading-container")) {
        const continueBtn = document.querySelector(".continue-reading-btn");

        continueBtn.addEventListener("click", () => {
            location.href = "./pages/book.html"
        });
    }
}

export default continueReadController;