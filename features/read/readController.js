import readServices from "./readService.js";
import readUI from "./readUi.js";

const readBtn = document.getElementById("buttonStart");

function readStory() {
    readBtn.addEventListener("click", () => {
        console.log("helo");
        location.href = "./pages/book.html";
    });
}

export default readStory;