function previousAnimation() {
    if (!document.querySelector(".previous-btn")) return;

    const previousBtn = document.querySelector(".previous-btn");

    requestAnimationFrame(() => {
        previousBtn.classList.add("animate-show-color");
    });
    
    setTimeout(() => {
        previousBtn.classList.remove("animate-show-color");
    }, 510);

    setTimeout(() => {
        previousBtn.classList.add("animate-show-color");
    }, 1000);

    setTimeout(() => {
        previousBtn.classList.remove("animate-show-color");
    }, 1510);

    if (window.innerWidth > 768) return;

    showDetailMessage();
}

function showDetailMessage() {
    const book = document.querySelector(".book");

    const detailDiv = document.createElement("div");
    const text = document.createElement("p");

    const imageDiv = document.createElement("div");
    const img = document.createElement("img");

    detailDiv.classList.add("detail-message");
    imageDiv.classList.add("cat-img-div");

    img.src = "https://i.ibb.co/Xr8H9LKg/cat-thumbs-up-happy.png";

    text.textContent = "Tap the left to go back in a previous scene.";

    imageDiv.appendChild(img);
    detailDiv.append(imageDiv, text);

    book.appendChild(detailDiv);

    requestAnimationFrame(() => {
        detailDiv.classList.add("animate-show"); 
    });

    setTimeout(() => {
        requestAnimationFrame(() => {
            detailDiv.classList.remove("animate-show"); 
        });
    }, 7000);

    setTimeout(() => {
        detailDiv.remove();
    }, 7510);
}

export default previousAnimation;