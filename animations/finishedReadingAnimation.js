import createCard from "../components/card.js";

function finishedReadingAnimation() {
    if (screen.width < 768) {
        animateMobile();
    } else {
        animeLaptop();
    }
}
function animateMobile() {
    const book = document.querySelector(".book");

    const { card, header, main, footer } = createCard();
    card.classList.add("cover-animation");

    const appreciation = document.createElement("p");
    const message = document.createElement("p");
    const doneBtn = document.createElement("button");

    appreciation.textContent = "Thank You so much for reading!";
    message.textContent = "The story now ends here, I hope that you enjoyed it!";
    doneBtn.textContent = "Done";
    book.appendChild(card);

    header.appendChild(appreciation);
    main.appendChild(message);
    footer.appendChild(doneBtn);

    requestAnimationFrame(() => {
        card.classList.add("animate");

        setTimeout(() => {
            appreciation.classList.add("animate");
        }, 1600);

        setTimeout(() => {
            message.classList.add("animate");
        }, 3000);

        setTimeout(() => {
            doneBtn.classList.add("animate");
        }, 5000);
    });

    doneBtn.addEventListener("click", () => {
        bookMoveToLeft(book);
    });
}
function animeLaptop() {
    const coverDiv = document.querySelector(".cover-div");
    const scene = document.querySelector(".scene");
    const book = document.querySelector(".book");

    coverDiv.classList.add("animate-descend");
    scene.classList.add("animate-descend");

    requestAnimationFrame(() => {
        scene.classList.add("animate-toLeft-move");
        coverDiv.classList.add("animate-toRight-move");
    });

    setTimeout(() =>{
        const { card, header, main, footer } = createCard();
        card.classList.add("cover-animation");

        const appreciation = document.createElement("p");
        const message = document.createElement("p");
        const doneBtn = document.createElement("button");

        appreciation.textContent = "Thank You so much for reading!";
        message.textContent = "The story now ends here, I hope that you enjoyed it!";
        doneBtn.textContent = "Done";
        scene.appendChild(card);

        header.appendChild(appreciation);
        main.appendChild(message);
        footer.appendChild(doneBtn);

        requestAnimationFrame(() => {
            card.classList.add("animate");

            setTimeout(() => {
                appreciation.classList.add("animate");
            }, 1600);

            setTimeout(() => {
                message.classList.add("animate");
            }, 3000);

            setTimeout(() => {
                doneBtn.classList.add("animate");
            }, 5000);
        });

        doneBtn.addEventListener("click", () => {
            bookMoveToLeft(book);
        });
    }, 1000)
}
function bookMoveToLeft(book) {

    requestAnimationFrame(() => {
        book.classList.add("animate-size");
    });
    
    setTimeout(() => {
        requestAnimationFrame(() => {
            book.classList.add("animate-move");
        })
    }, 1000);

    setTimeout(() => {
        returnDashboard();
    }, 3000)
}

function returnDashboard() {
    location.href = "../index.html"
}

export default finishedReadingAnimation;