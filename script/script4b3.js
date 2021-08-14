const DB_QUIZ = [
  {
    question: "1. What is your name?",
    answers: ["my name is Williams", "I have one shoes", "my shoes is expensive", "this is my skate"],
  },
  {
    question: "2. What do you do?",
    answers: ["I want to sleep", "I am a teacher", "I can't go", "this is my car"],
  },
  {
    question: "3. How old are you?",
    answers: ["I am 19 years old", "I am teacher", "I can't go", "this is my car"],
  },
  {
    question: "4. Where do you live?",
    answers: ["I live in Jakarta", "my name is Williams", "I am 12 years old", "I am teacher"],
  },
  {
    question: "5. Are you American?",
    answers: ["I sleep in Jakarta", "no ,I am Indonesian", "I am 12 years old", "I am teacher"],
  },
  {
    question: "6. Do you have a brother?",
    answers: ["yes ,I have a brother", "I have one shoes", "no , I don't have sister", "this is my skate"],
  },
  {
    question: "7. How many brothers do you have?",
    answers: ["I want to sleep", "I have 2 brothers", "I can't go", "this is my car"],
  },
  {
    question: "8. What is the name of your first brother?",
    answers: ["my first brother's name is Smith", "I want to sleep", "I can't go", "this is my car"],
  },
  {
    question: "9. What is the name of your second brother?",
    answers: ["I live in Jakarta", "my second brother's name is Abraham", "I am 12 years old", "I am teacher"],
  },
  {
    question: "10. What do they do?",
    answers: ["they are musicians", "no ,I am Indonesian", "I am 12 years old", "I am teacher"],
  },
  {
    question: "11. What time is it?",
    answers: ["it is seven", "I have one shoes", "no , i don't have sister", "this is my skate"],
  },
  {
    question: "12. What day is it now?",
    answers: ["today is monday", "I have 2 brothers", "I can't go", "this is my car"],
  },
  {
    question: "13. What month is it now?",
    answers: ["my first brother's name is Smith", "it is january", "I can't go", "this is my car"],
  },
  {
    question: "14. What year is it now?",
    answers: ["now in 2021", "my second brother's name is Abraham", "I am 12 years old", "I am teacher"],
  },
  {
    question: "15. When is your birthday?",
    answers: ["they are musicians", "my birthday is 21 agust", "I am 12 years old", "I am teacher"],
  },
  {
    question: "16. Are you American?",
    answers: ["I sleep in Jakarta", "no ,I am Indonesian", "I am 12 years old", "I am teacher"],
  },
  {
    question: "17. What do they do?",
    answers: ["they are musicians", "no ,I am Indonesian", "I am 12 years old", "I am teacher"],
  },
  {
    question: "18. What time is it?",
    answers: ["it is seven", "I have one shoes", "no , i don't have sister", "this is my skate"],
  },
  {
    question: "19. How many brothers do you have?",
    answers: ["I want to sleep", "I have 2 brothers", "I can't go", "this is my car"],
  },
  {
    question: "20. What day is it now?",
    answers: ["today is monday", "I have 2 brothers", "I can't go", "this is my car"],
  },
];

const CORRECT_ANSWER = [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0];
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
