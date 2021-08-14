const DB_QUIZ = [
  {
    question: "1. 'Siapa nama mu?'\nWhat is your name?",
    answers: ["my name is Williams", "I have one shoes", "my shoes is expensive", "this is my skate"],
  },
  {
    question: "2. 'Apa pekerjaan mu?'\nWhat do you do?",
    answers: ["I want to sleep", "I am a teacher", "I can't go", "this is my car"],
  },
  {
    question: "3. 'Berapa umur mu?'\nHow old are you?",
    answers: ["I am 19 years old", "I am teacher", "I can't go", "this is my car"],
  },
  {
    question: "4. 'Dimana kamu tinggal?'\nWhere do you live?",
    answers: ["I live in Jakarta", "my name is Williams", "I am 12 years old", "I am teacher"],
  },
  {
    question: "5. 'Apakah kamu orang amerika?'\nAre you American?",
    answers: ["I sleep in Jakarta", "no ,I am Indonesian", "I am 12 years old", "I am teacher"],
  },
  {
    question: "6. Where do you live?",
    answers: ["I live in Jakarta", "my name is Williams", "I am 12 years old", "I am teacher"],
  },
  {
    question: "7. What is your name?",
    answers: ["my name is Williams", "I have one shoes", "my shoes is expensive", "this is my skate"],
  },
  {
    question: "8. What do you do?",
    answers: ["I want to sleep", "I am a teacher", "I can't go", "this is my car"],
  },
  {
    question: "9. How old are you?",
    answers: ["I am 19 years old", "I am teacher", "I can't go", "this is my car"],
  },
  {
    question: "10. Are you American?",
    answers: ["I sleep in Jakarta", "no ,I am Indonesian", "I am 12 years old", "I am teacher"],
  },
  {
    question: "11. 'Siapa nama dia(perempuan)?'\nWhat is her name?",
    answers: ["her name is Susan", "I have one shoes", "my shoes is expensive", "this is my skate"],
  },
  {
    question: "12. 'Apa pekerjaan dia(perempuan)?'\nWhat does she do?",
    answers: ["I want to sleep", "she is a doctor", "I can't go", "this is my car"],
  },
  {
    question: "13. 'Berapa umur dia(perempuan)?'\nHow old is she?",
    answers: ["she is 22 years old", "I am teacher", "I can't go", "this is my car"],
  },
  {
    question: "14. 'Dimana dia(perempuan) tinggal?'\nWhere does she live?",
    answers: ["she lives in Bandung", "my name is Williams", "I am 12 years old", "I am teacher"],
  },
  {
    question: "15. 'Apakah dia(perempuan) orang amerika?'\nIs she American?",
    answers: ["I sleep in Jakarta", "yes ,she is American", "I am 12 years old", "I am teacher"],
  },
  {
    question: "16. Where does she live?",
    answers: ["she lives in Bandung", "my name is Williams", "I am 12 years old", "I am teacher"],
  },
  {
    question: "17. What is her name?",
    answers: ["her name is Susan", "I have one shoes", "my shoes is expensive", "this is my skate"],
  },
  {
    question: "18. What does she do?",
    answers: ["I want to sleep", "she is a doctor", "I can't go", "this is my car"],
  },
  {
    question: "19. How old is she?",
    answers: ["she is 22 years old", "I am teacher", "I can't go", "this is my car"],
  },
  {
    question: "20. Is she American?",
    answers: ["I sleep in Jakarta", "yes ,she is American", "I am 12 years old", "I am teacher"],
  },
];

const CORRECT_ANSWER = [0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1];
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
