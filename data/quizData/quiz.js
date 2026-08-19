import getAllScenes from "../storyData/aggregator.js";

const scenes = getAllScenes();

const quizData = [
  {
    image: scenes.scene1.img,
    question: 'Sino ang pangunahing tauhan sa kwento?',
    correctAnswer: "b",
    currentStep: 1,
    totalQuestions: 5,
    choices: ['Maria', 'Ana', 'Juan', 'Liza'],
    onNext: () => console.log('Next clicked!')
  },
  {
    image: scenes.scene2.img,
    question: 'Ano ang madalas gawin ni Ana pagkatapos ng klase?',
    correctAnswer: "c",
    currentStep: 2,
    totalQuestions: 5,
    choices: [
      'Gumawa agad ng takdang-aralin',
      'Matulog nang maaga',
      'Manood ng palabas at makipag-usap sa kaibigan',
      'Mag-aral sa library'
    ],
    onNext: () => console.log('Next clicked!')
  },
  {
    image: scenes.scene3.img,
    question: 'Bakit bumaba ang marka ni Ana?',
    correctAnswer: "b",
    currentStep: 3,
    totalQuestions: 5,
    choices: [
      'Dahil hindi siya matalino',
      'Dahil hindi niya ginamit nang tama ang oras',
      'Dahil hindi siya nakakaintindi ng proyekto',
      'Dahil hindi siya tinulungan ng guro'
    ],
    onNext: () => console.log('Next clicked!')
  },
  {
    image: scenes.scene7.img,
    question: 'Ano ang sinabi ng ina ni Ana tungkol sa oras?',
    correctAnswer: "b",
    currentStep: 4,
    totalQuestions: 5,
    choices: [
      'Ang oras ay parang ginto na dapat ipunin',
      'Ang oras ay parang tubig na dumadaloy sa ilog',
      'Ang oras ay parang hangin na hindi nakikita',
      'Ang oras ay parang apoy na mabilis mawala'
    ],
    onNext: () => console.log('Next clicked!')
  },
  {
    image: scenes.scene11.img,
    question: 'Ano ang aral ng kwento?',
    correctAnswer: "b",
    currentStep: 5,
    totalQuestions: 5,
    choices: [
      'Ang talino ang susi sa tagumpay',
      'Ang oras ay kayamanang hindi na maibabalik',
      'Ang kasiyahan ay mas mahalaga kaysa pag-aaral',
      'Ang proyekto ay dapat gawin sa huling araw'
    ],
    onNext: () => console.log('Next clicked!')
  }
];

export default quizData;