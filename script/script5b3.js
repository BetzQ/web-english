const DB_QUIZ = [
  {
    question: "1. What is her name?",
    answers: ["her name is Susan", "I have one shoes", "my shoes is expensive", "this is my skate"],
  },
  {
    question: "2. What does she do?",
    answers: ["I want to sleep", "she is a doctor", "I can't go", "this is my car"],
  },
  {
    question: "3. How old is she?",
    answers: ["she is 22 years old", "I am teacher", "I can't go", "this is my car"],
  },
  {
    question: "4. Where does she live?",
    answers: ["she live in Bandung", "my name is Williams", "I am 12 years old", "I am teacher"],
  },
  {
    question: "5. Is she American?",
    answers: ["I sleep in Jakarta", "yes ,she is American", "I am 12 years old", "I am teacher"],
  },
  {
    question: "6. Do you have a sister?",
    answers: ["her name is Susan", "yes ,I have a sister", "my shoes is expensive", "this is my skate"],
  },
  {
    question: "7. How many sisters do you have?",
    answers: ["I have 2 sisters", "she is a doctor", "I can't go", "this is my car"],
  },
  {
    question: "8. What is the name of your first sister?",
    answers: ["my first sister's name is Sofia", "I am teacher", "I can't go", "this is my car"],
  },
  {
    question: "9. What is the name of your second sister?",
    answers: ["she lives in Bandung", "my second sister's name is Amber", "I am 12 years old", "I am teacher"],
  },
  {
    question: "10. What do they do?",
    answers: ["they are dancers", "no ,I am Indonesian", "I am 12 years old", "I am teacher"],
  },
  {
    question: "11. What day do you go to school?",
    answers: ["her name is Susan", "I went to school on Monday", "my shoes is expensive", "this is my skate"],
  },
  {
    question: "12. What day is tomorrow?",
    answers: ["tomorrow is tuesday", "she is a doctor", "I can't go", "this is my car"],
  },
  {
    question: "13. What day was yesterday?",
    answers: ["yesterday is sunday", "I am teacher", "I can't go", "this is my car"],
  },
  {
    question: "14. When is the holiday?",
    answers: ["she lives in Bandung", "the holiday is a saturday", "I am 12 years old", "I am teacher"],
  },
  {
    question: "15. What subjects do you like?",
    answers: ["they are dancers", "I like math", "I am 12 years old", "I am teacher"],
  },
  {
    question: "16. Is she American?",
    answers: ["I sleep in Jakarta", "yes ,she is American", "I am 12 years old", "I am teacher"],
  },
  {
    question: "17. What do they do?",
    answers: ["they are dancers", "no ,I am Indonesian", "I am 12 years old", "I am teacher"],
  },
  {
    question: "18. What day is tomorrow?",
    answers: ["tomorrow is tuesday", "she is a doctor", "I can't go", "this is my car"],
  },
  {
    question: "19. What is her name?",
    answers: ["her name is Susan", "I have one shoes", "my shoes is expensive", "this is my skate"],
  },
  {
    question: "20. What subjects do you like?",
    answers: ["they are dancers", "I like math", "I am 12 years old", "I am teacher"],
  },
];

const CORRECT_ANSWER = [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1];

function startQuiz() {
  document.getElementById("opening_window").style.display = "none";
  document.getElementById("quiz_window").style.display = "block";
}

let current_q = 0;
let total_score = 0;
let saved_answer = [];

document.addEventListener("DOMContentLoaded", function (event) {
  setupQuestion();
});

function setupQuestion() {
  document.getElementById("question").innerText = DB_QUIZ[current_q]["question"];
  document.getElementById("choiceText0").innerText = DB_QUIZ[current_q]["answers"][0];
  document.getElementById("choiceText1").innerText = DB_QUIZ[current_q]["answers"][1];
  document.getElementById("choiceText2").innerText = DB_QUIZ[current_q]["answers"][2];
  document.getElementById("choiceText3").innerText = DB_QUIZ[current_q]["answers"][3];
}

function nextQUestion() {
  current_q++;

  saveAnswer();

  if (current_q > DB_QUIZ.length - 1) stopQuiz();

  resetState();
  setupQuestion();
}

function resetState() {
  const choosedAnswer = document.querySelector('input[name="choices"]:checked');
  if (choosedAnswer != null) choosedAnswer.checked = false;
}

function stopQuiz() {
  checkScore();

  document.getElementById("quiz_window").style.display = "none";
  document.getElementById("closing_window").style.display = "block";
  document.getElementById("scoreText").innerHTML = "Nilai kamu ... " + total_score;
  return;
}

function saveAnswer() {
  const answer = document.querySelector('input[name="choices"]:checked');
  if (answer != null) {
    saved_answer.push(parseInt(answer.getAttribute("data-id")));
    console.log(saved_answer);
  } else {
    saved_answer.push(4);
    alert("kamu tidak menjawab soal,\nkita akan lanjut ke nomor berikutnya.");
  }
}

function checkScore() {
  for (i = 0; i < saved_answer.length; i++) if (saved_answer[i] == CORRECT_ANSWER[i]) total_score += 5;
}
