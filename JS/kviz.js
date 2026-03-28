const questions = [
  {
    question: "Šta predstavlja RGB model boja?",
    answers: [
      { text: "Suptraktivnu sintezu boja", correct: false },
      { text: "Aditivnu sintezu boja (mešanje svetlosti)", correct: true },
      { text: "Model namenjen isključivo štampi", correct: false },
    ],
  },
  {
    question: "Koja je osnovna razlika između rasterske i vektorske grafike?",
    answers: [
      { text: "Rasterska grafika se sastoji od piksela", correct: true },
      { text: "Vektorska grafika gubi kvalitet pri uvećanju", correct: false },
      {
        text: "Rasterska grafika se opisuje matematičkim funkcijama",
        correct: false,
      },
    ],
  },
  {
    question: "Koji fontovi su, prema istraživanjima, čitljiviji na ekranima?",
    answers: [
      { text: "Serifni fontovi (sa ukrasima)", correct: false },
      { text: "Bezserifni fontovi (Sans Serif)", correct: true },
      { text: "Krasnopisni (Script) fontovi", correct: false },
    ],
  },
  {
    question: "Šta definiše Šenon-Nikvistova teorema u digitalnom zvuku?",
    answers: [
      {
        text: "Brzina uzorkovanja mora biti bar duplo veća od najviše frekvencije",
        correct: true,
      },
      { text: "Zvuk se ne može digitalizovati bez gubitaka", correct: false },
      { text: "Jačina zvuka se meri isključivo u Hercima", correct: false },
    ],
  },
  {
    question: "Koji od navedenih standarda je evropski TV standard?",
    answers: [
      { text: "NTSC", correct: false },
      { text: "SECAM", correct: false },
      { text: "PAL", correct: true },
    ],
  },
  {
    question: "Koliko frejmova u sekundi (fps) ima PAL standard?",
    answers: [
      { text: "29.97 fps", correct: false },
      { text: "25 fps", correct: true },
      { text: "60 fps", correct: false },
    ],
  },
  {
    question: "Šta je 'Edutainment'?",
    answers: [
      { text: "Vrsta softvera za editovanje videa", correct: false },
      { text: "Spoj edukacije i zabave kroz multimediju", correct: true },
      { text: "Hardverski uređaj za snimanje zvuka", correct: false },
    ],
  },
  {
    question: "Koja boja u Google logou krši pravilo osnovnih boja?",
    answers: [
      { text: "Crvena", correct: false },
      { text: "Zelena", correct: true },
      { text: "Plava", correct: false },
    ],
  },
  {
    question: "Koji format slike podržava transparenciju (prozirnost)?",
    answers: [
      { text: "JPEG", correct: false },
      { text: "BMP", correct: false },
      { text: "PNG", correct: true },
    ],
  },
  {
    question: "Koja je gornja granica ljudskog sluha kod mlade i zdrave osobe?",
    answers: [
      { text: "20.000 Hz", correct: true },
      { text: "150 dB", correct: false },
      { text: "2.000 Hz", correct: false },
    ],
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const qNum = document.getElementById("q-num");
const quizBox = document.getElementById("question-container");
const resultBox = document.getElementById("result-container");
const scoreVal = document.getElementById("score-val");
const feedbackText = document.getElementById("feedback-text");

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  qNum.innerText = currentQuestionIndex + 1;
  questionText.innerText = currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn", "btn-answer");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1200);
}

function showResults() {
  quizBox.classList.add("d-none");
  resultBox.classList.remove("d-none");
  scoreVal.innerText = score;

  if (score >= 8) {
    feedbackText.innerText =
      "Sjajno! Ti si pravi stručnjak za multimediju! ✨💄";
  } else if (score >= 5) {
    feedbackText.innerText =
      "Vrlo dobro! Imaš solidno znanje, ali može i bolje. 🌸";
  } else {
    feedbackText.innerText =
      "Moglo bi biti bolje. Pročitaj još jednom materijale sa predavanja. 📚";
  }
}

startQuiz();
