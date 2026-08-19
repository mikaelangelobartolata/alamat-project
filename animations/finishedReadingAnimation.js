import createCard from "../components/card.js";
import quizController from "../features/quiz/quizController.js";
import quizService from "../features/quiz/quizService.js";

function finishedReadingAnimation() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        animateMobile();
    } else {
        animeLaptop();
    }
}
function animateMobile() {
    const book = document.querySelector(".book");
    const quizAlreadyTaken = quizService.checkQuizTaken();

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

    let quizBtn = null;
    if (!quizAlreadyTaken) {
        quizBtn = document.createElement("button");
        quizBtn.textContent = "Take Quiz";
        footer.appendChild(quizBtn);
    }

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
            if (quizBtn) quizBtn.classList.add("animate");
        }, 5000);
    });

    doneBtn.addEventListener("click", () => {
        bookMoveToLeft(book);
    });

    if (quizBtn) {
        quizBtn.addEventListener("click", () => {
            card.classList.remove("animate");

            appreciation.classList.remove("animate");
            message.classList.remove("animate");
            doneBtn.classList.remove("animate");
            quizBtn.classList.remove("animate");

            setTimeout(() => {
                card.remove();
            }, 1510);
            quizController();
        });
    }
}
function animeLaptop() {
    const coverDiv = document.querySelector(".cover-div");
    const scene = document.querySelector(".scene");
    const quizHeader = document.querySelector(".quiz-header");
    const quizContent = document.querySelector(".quiz-content");
    const book = document.querySelector(".book");

    const hasCoverElements = coverDiv && scene;
    const hasQuizElements = quizHeader && quizContent;

    if (hasCoverElements) {
        coverDiv.classList.add("animate-descend");
        scene.classList.add("animate-descend");

        requestAnimationFrame(() => {
            scene.classList.add("animate-toLeft-move");
            coverDiv.classList.add("animate-toRight-move");
        });
    } else if (hasQuizElements) {
        requestAnimationFrame(() => {
            quizContent.classList.add("animate-toLeft-move");
            quizHeader.classList.add("animate-toRight-move");
        });
    }

    const targetContainer = scene || quizContent || book;

    const showCard = () => {
        const quizAlreadyTaken = quizService.checkQuizTaken();

        const { card, header, main, footer } = createCard();
        card.classList.add("cover-animation");

        const appreciation = document.createElement("p");
        const message = document.createElement("p");
        const doneBtn = document.createElement("button");

        appreciation.textContent = "Thank You so much for reading!";
        message.textContent = "The story now ends here, I hope that you enjoyed it!";
        doneBtn.textContent = "Done";

        targetContainer.appendChild(card);

        header.appendChild(appreciation);
        main.appendChild(message);
        footer.appendChild(doneBtn);

        let quizBtn = null;
        if (!quizAlreadyTaken) {
            quizBtn = document.createElement("button");
            quizBtn.textContent = "Take Quiz";
            quizBtn.classList.add("quiz-nav-btn");
            footer.appendChild(quizBtn);
        }

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
                if (quizBtn) quizBtn.classList.add("animate");
            }, 5000);
        });

        doneBtn.addEventListener("click", () => {
            bookMoveToLeft(book);
        });

        if (quizBtn) {
            quizBtn.addEventListener("click", () => {
                card.classList.remove("animate");

                appreciation.classList.remove("animate");
                message.classList.remove("animate");
                doneBtn.classList.remove("animate");
                quizBtn.classList.remove("animate");

                setTimeout(() => {
                    card.remove();
                }, 1510);
                quizController();
            });
        }
    };

    if (hasCoverElements || hasQuizElements) {
        setTimeout(showCard, 1000);
    } else {
        showCard();
    }
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