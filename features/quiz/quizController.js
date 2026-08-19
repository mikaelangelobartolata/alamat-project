import quizService from "./quizService.js";
import quizUi, { quizResultUi } from "./quizUI.js";

import quizData from "../../data/quizData/quiz.js";
import readServices from "../read/readService.js";
import finishedReadingAnimation from "../../animations/finishedReadingAnimation.js";

let eventsBound = false;

function quizController() {
    const isTaking = quizService.checkIsTaking();
    const isStoryFinished = readServices.checkCurrentBookStatus();

    if (!isStoryFinished) return;

    if (!isTaking) {
        quizService.setCurrQuiz(quizData[0]);
        quizService.setTakingQuiz();
    }

    const currQuiz = quizService.checkLastQuiz();
    renderQuiz(currQuiz);
    bindQuizEvents();
}

function renderQuiz(quizItem) {
    const savedAnswer = quizService.getAnswer(quizItem.currentStep);
    quizUi(quizItem, savedAnswer);
}

function bindQuizEvents() {
    if (eventsBound) return;

    const book = document.querySelector(".book");
    if (!book) return;

    eventsBound = true;

    book.addEventListener("change", (e) => {
        if (e.target.name !== "quiz-choice") return;

        const currQuiz = quizService.checkLastQuiz();
        quizService.saveAnswer(currQuiz.currentStep, e.target.value);

        const nextBtn = document.querySelector(".next-quiz");
        if (nextBtn) nextBtn.disabled = false;
    });

    book.addEventListener("click", (e) => {
        if (e.target.classList.contains("prev-quiz")) {
            handlePrevious();
        } else if (e.target.classList.contains("finish-quiz")) {
            handleFinish();
        } else if (e.target.classList.contains("next-quiz")) {
            handleNext();
        } else if (e.target.classList.contains("finish-btn")) {
            handleDone();
        }
    });
}

function handleNext() {
    const currQuiz = quizService.checkLastQuiz();
    const savedAnswer = quizService.getAnswer(currQuiz.currentStep);

    if (savedAnswer === undefined) return;

    const nextQuiz = quizService.getNextQuiz(quizData);
    if (!nextQuiz) return;

    quizService.setCurrQuiz(nextQuiz);
    renderQuiz(nextQuiz);
}

function handlePrevious() {
    const previousQuiz = quizService.getPreviousQuiz(quizData);
    if (!previousQuiz) return;

    quizService.setCurrQuiz(previousQuiz);
    renderQuiz(previousQuiz);
}

function handleFinish() {
    const currQuiz = quizService.checkLastQuiz();
    const savedAnswer = quizService.getAnswer(currQuiz.currentStep);

    if (savedAnswer === undefined) return;

    const score = quizService.calculateScore(quizData);
    quizService.setQuizTaken();
    quizResultUi(score, quizData.length);
}

function handleDone() {
    quizService.resetQuiz();
    finishedReadingAnimation();
}

export default quizController;