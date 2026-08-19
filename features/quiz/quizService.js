import getUserData from "../../data/data.js"

const quizService = {
    setCurrQuiz(quiz) {
        const userData = getUserData();

        userData.lastQuiz = quiz;
        localStorage.setItem("current-user-alamat", JSON.stringify(userData));
    },
    checkLastQuiz() {
        const userData = getUserData();

        return userData.lastQuiz;
    },
    getNextQuiz(allQuiz) {
        const currQuiz = this.checkLastQuiz();

        const index = allQuiz.findIndex(q => q.currentStep === currQuiz.currentStep);

        return allQuiz[index + 1];
    },
    getPreviousQuiz(allQuiz) {
        const currQuiz = this.checkLastQuiz();

        const index = allQuiz.findIndex(q => q.currentStep === currQuiz.currentStep);

        return allQuiz[index - 1];
    },
    setTakingQuiz() {
        const userData = getUserData();

        userData.isTakingQuiz = true;
        localStorage.setItem("current-user-alamat", JSON.stringify(userData));
    },
    removeTakingQuiz() {
        const userData = getUserData();

        userData.isTakingQuiz = false;
        localStorage.setItem("current-user-alamat", JSON.stringify(userData));
    },
    checkIsTaking() {
        const userData = getUserData();

        return userData.isTakingQuiz;
    },
    saveAnswer(currentStep, answerLetter) {
        const userData = getUserData();

        if (!userData.quizAnswers) userData.quizAnswers = {};
        userData.quizAnswers[currentStep] = answerLetter;

        localStorage.setItem("current-user-alamat", JSON.stringify(userData));
    },
    getAnswer(currentStep) {
        const userData = getUserData();

        if (!userData.quizAnswers) return undefined;
        return userData.quizAnswers[currentStep];
    },
    calculateScore(allQuiz) {
        const userData = getUserData();
        const answers = userData.quizAnswers || {};

        let score = 0;
        allQuiz.forEach(q => {
            if (answers[q.currentStep] === q.correctAnswer) score++;
        });

        return score;
    },
    resetQuiz() {
        const userData = getUserData();

        userData.isTakingQuiz = false;
        userData.lastQuiz = null;
        userData.quizAnswers = {};

        localStorage.setItem("current-user-alamat", JSON.stringify(userData));
    },
    setQuizTaken() {
        const userData = getUserData();

        userData.hasTakenQuiz = true;
        localStorage.setItem("current-user-alamat", JSON.stringify(userData));
    },
    checkQuizTaken() {
        const userData = getUserData();

        return !!userData.hasTakenQuiz;
    },
    clearQuizTaken() {
        const userData = getUserData();

        userData.hasTakenQuiz = false;
        userData.isTakingQuiz = false;
        userData.lastQuiz = null;
        userData.quizAnswers = {};

        localStorage.setItem("current-user-alamat", JSON.stringify(userData));
    }
}

export default quizService;