const DB_QUIZ = [
  {
    question: "1. 'Apakah kamu punya saudara laki-laki?'\nDo you have a brother?",
    answers: ["yes ,I have a brother", "I have one shoes", "no , i don't have sister", "this is my skate"],
  },
  {
    question: "2. 'Berapa banyak saudara laki-laki yang kamu miliki?'\nHow many brothers do you have?",
    answers: ["I want to sleep", "I have 2 brothers", "I can't go", "this is my car"],
  },
  {
    question: "3. 'Siapa nama saudara laki laki pertama mu?'\nWhat is the name of your first brother?",
    answers: ["my first brother's name is Smith", "I want to sleep", "I can't go", "this is my car"],
  },
  {
    question: "4. 'siap nama saudara laki laki kedua mu?'\nWhat is the name of your second brother?",
    answers: ["I live in Jakarta", "my second brother's name is Abraham", "I am 12 years old", "I am teacher"],
  },
  {
    question: "5. 'Apa pekerjaan mereka?'\nWhat do they do?",
    answers: ["they are musicians", "no ,I am Indonesian", "I am 12 years old", "I am teacher"],
  },
  {
    question: "6. What is the name of your second brother?",
    answers: ["I live in Jakarta", "my second brother's name is Abraham", "I am 12 years old", "I am teacher"],
  },
  {
    question: "7. Do you have a brother?",
    answers: ["yes ,I have a brother", "I have one shoes", "no , i don't have sister", "this is my skate"],
  },
  {
    question: "8. How many brothers do you have?",
    answers: ["I want to sleep", "I have 2 brothers", "I can't go", "this is my car"],
  },
  {
    question: "9. What is the name of your first brother?",
    answers: ["my first brother's name is Smith", "I want to sleep", "I can't go", "this is my car"],
  },
  {
    question: "10. What do they do?",
    answers: ["they are musicians", "no ,I am Indonesian", "I am 12 years old", "I am teacher"],
  },
  {
    question: "11. 'Apakah kamu punya saudara perempuan?'\nDo you have a sister?",
    answers: ["her name is Susan", "yes ,I have a sister", "my shoes is expensive", "this is my skate"],
  },
  {
    question: "12. 'Berapa banyak saudara perempuan yang kamu miliki?'\nHow many sisters do you have?",
    answers: ["I have 2 sisters", "she is a doctor", "I can't go", "this is my car"],
  },
  {
    question: "13. 'Siapa nama saudara perempuan pertama mu?'\nWhat is the name of your first sister?",
    answers: ["my first sister's name is Sofia", "I am teacher", "I can't go", "this is my car"],
  },
  {
    question: "14. 'Siapa nama saudara perempuan kedua mu?'\nWhat is the name of your second sister?",
    answers: ["she lives in Bandung", "my second sister's name is Amber", "I am 12 years old", "I am teacher"],
  },
  {
    question: "15. 'apa pekerjaan mereka?'\nWhat do they do?",
    answers: ["they are dancers", "no ,I am Indonesian", "I am 12 years old", "I am teacher"],
  },
  {
    question: "16. What is the name of your second sister?",
    answers: ["she lives in Bandung", "my second sister's name is Amber", "I am 12 years old", "I am teacher"],
  },
  {
    question: "17. Do you have a sister?",
    answers: ["her name is Susan", "yes ,I have a sister", "my shoes is expensive", "this is my skate"],
  },
  {
    question: "18. How many sisters do you have?",
    answers: ["I have 2 sisters", "she is a doctor", "I can't go", "this is my car"],
  },
  {
    question: "19. What is the name of your first sister?",
    answers: ["my first sister's name is Sofia", "I am teacher", "I can't go", "this is my car"],
  },
  {
    question: "20. What do they do?",
    answers: ["they are dancers", "no ,I am Indonesian", "I am 12 years old", "I am teacher"],
  },
];

const CORRECT_ANSWER = [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0];
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
