const readBtn = document.getElementById("buttonStart");

function readStory() {
    readBtn.addEventListener("click", () => {
        location.href = "./pages/book.html";
    });
}

export default readStory;