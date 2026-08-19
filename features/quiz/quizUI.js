const CHOICE_LETTERS = ['a', 'b', 'c', 'd'];

function quizUi(quizData, savedAnswer) {
  const book = document.querySelector('.book');
  if (!book) return;

  book.innerHTML = '';

  const firstDiv = document.createElement('div');
  firstDiv.className = 'quiz-header';

  const image = document.createElement('img');
  image.src = quizData.image || '';
  image.alt = 'Quiz Image';

  const questionTitleDiv = document.createElement('div');
  questionTitleDiv.className = 'question-title';
  questionTitleDiv.textContent = quizData.question || '';

  firstDiv.appendChild(image);
  firstDiv.appendChild(questionTitleDiv);

  const secondDiv = document.createElement('div');
  secondDiv.className = 'quiz-content';

  const questionNumP = document.createElement('p');
  questionNumP.className = 'question-number';
  questionNumP.textContent = `Question ${quizData.currentStep || 1} of ${quizData.totalQuestions || 1}`;

  const choicesDiv = document.createElement('div');
  choicesDiv.className = 'choices-container';

  const hasSavedAnswer = savedAnswer !== undefined && savedAnswer !== null;

  if (Array.isArray(quizData.choices)) {
    quizData.choices.forEach((choiceText, index) => {
      const choiceLabel = document.createElement('label');
      choiceLabel.className = 'choice-item';

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'quiz-choice';
      input.id = `choice-${index}`;
      input.value = CHOICE_LETTERS[index];

      if (hasSavedAnswer && savedAnswer === CHOICE_LETTERS[index]) {
        input.checked = true;
      }

      const span = document.createElement('span');
      span.textContent = choiceText;

      choiceLabel.appendChild(input);
      choiceLabel.appendChild(span);
      choicesDiv.appendChild(choiceLabel);
    });
  }

  const actionsDiv = document.createElement('div');
  actionsDiv.className = 'quiz-actions';

  const isLastQuestion = quizData.currentStep === quizData.totalQuestions;

  if (quizData.currentStep > 1) {
    const prevBtn = document.createElement('button');
    prevBtn.type = 'button';
    prevBtn.className = 'prev-quiz prev-btn';
    prevBtn.textContent = 'Previous';
    actionsDiv.appendChild(prevBtn);
  }

  const nextBtn = document.createElement('button');
  nextBtn.type = 'button';
  nextBtn.className = isLastQuestion ? 'next-quiz finish-quiz next-btn' : 'next-quiz next-btn';
  nextBtn.textContent = isLastQuestion ? 'Finish' : 'Next';
  nextBtn.disabled = !hasSavedAnswer;
  actionsDiv.appendChild(nextBtn);
  secondDiv.appendChild(questionNumP);
  secondDiv.appendChild(choicesDiv);
  secondDiv.appendChild(actionsDiv);

  book.appendChild(firstDiv);
  book.appendChild(secondDiv);
}

function quizResultUi(score, total) {
  const book = document.querySelector('.book');
  if (!book) return;

  book.innerHTML = '';

  const firstDiv = document.createElement('div');
  firstDiv.className = 'quiz-header';

  const questionTitleDiv = document.createElement('div');
  questionTitleDiv.className = 'question-title';
  questionTitleDiv.textContent = 'Quiz Complete!';

  firstDiv.appendChild(questionTitleDiv);

  const secondDiv = document.createElement('div');
  secondDiv.className = 'quiz-content';

  const scoreP = document.createElement('p');
  scoreP.className = 'score-display';
  scoreP.textContent = `${score} / ${total}`;

  const messageP = document.createElement('p');
  messageP.className = 'result-message';
  messageP.textContent = score === total
    ? 'Perfect score! You really understood the story.'
    : 'Nice work finishing the quiz! Feel free to read the story again to catch what you missed.';

  const actionsDiv = document.createElement('div');
  actionsDiv.className = 'quiz-actions';

  const finishBtn = document.createElement('button');
  finishBtn.type = 'button';
  finishBtn.className = 'finish-btn next-btn';
  finishBtn.textContent = 'Finish';
  actionsDiv.appendChild(finishBtn);

  secondDiv.appendChild(scoreP);
  secondDiv.appendChild(messageP);
  secondDiv.appendChild(actionsDiv);

  book.appendChild(firstDiv);
  book.appendChild(secondDiv);
}

export default quizUi;
export { quizResultUi };
