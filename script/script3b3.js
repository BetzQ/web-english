const DB_QUIZ = [
  {
    question: "1. 'Jam berapa sekarang?'\nWhat time is it?",
    answers: ["it is seven", "I have one shoes", "no , i don't have sister", "this is my skate"],
  },
  {
    question: "2. 'Hari apa sekarang?'\nWhat day is it now?",
    answers: ["today is monday", "I have 2 brothers", "I can't go", "this is my car"],
  },
  {
    question: "3. 'Bulan apa sekarang?'\nWhat month is it now?",
    answers: ["my first brother's name is Smith", "it is january", "I can't go", "this is my car"],
  },
  {
    question: "4. 'Tahun berapa sekarang?'\nWhat year is it now?",
    answers: ["now in 2021", "my second brother's name is Abraham", "I am 12 years old", "I am teacher"],
  },
  {
    question: "5. 'Kapan hari ulang tahun mu?'\nWhen is your birthday?",
    answers: ["they are musicians", "my birthday is 21 agust", "I am 12 years old", "I am teacher"],
  },
  {
    question: "6. What year is it now?",
    answers: ["now in 2021", "my second brother's name is Abraham", "I am 12 years old", "I am teacher"],
  },
  {
    question: "7. What time is it?",
    answers: ["it is seven", "I have one shoes", "no , I don't have sister", "this is my skate"],
  },
  {
    question: "8. What day is it now?",
    answers: ["today is monday", "I have 2 brothers", "I can't go", "this is my car"],
  },
  {
    question: "9. What month is it now?",
    answers: ["my first brother's name is Smith", "it is january", "I can't go", "this is my car"],
  },
  {
    question: "10. When is your birthday?",
    answers: ["they are musicians", "my birthday is 21 agust", "I am 12 years old", "I am teacher"],
  },
  {
    question: "11. 'Hari apa kamu pergi ke sekolah?'\nWhat day do you go to school?",
    answers: ["her name is Susan", "I went to school on Monday", "my shoes is expensive", "this is my skate"],
  },
  {
    question: "12. 'Hari apa besok?'\nWhat day is tomorrow?",
    answers: ["tomorrow is tuesday", "she is a doctor", "I can't go", "this is my car"],
  },
  {
    question: "13. 'Hari apa kemarin?'\nWhat day was yesterday?",
    answers: ["yesterday is sunday", "I am teacher", "I can't go", "this is my car"],
  },
  {
    question: "14. 'kapan hari liburan?'\nWhen is the holiday?",
    answers: ["she lives in Bandung", "the holiday is a saturday", "I am 12 years old", "I am teacher"],
  },
  {
    question: "15. 'pelajaran apa yang kamu suka?'\nWhat subjects do you like?",
    answers: ["they are dancers", "I like math", "I am 12 years old", "I am teacher"],
  },
  {
    question: "16. When is the holiday?",
    answers: ["she lives in Bandung", "the holiday is a saturday", "I am 12 years old", "I am teacher"],
  },
  {
    question: "17. What day do you go to school?",
    answers: ["her name is Susan", "I went to school on Monday", "my shoes is expensive", "this is my skate"],
  },
  {
    question: "18. What day is tomorrow?",
    answers: ["tomorrow is tuesday", "she is a doctor", "I can't go", "this is my car"],
  },
  {
    question: "19. What day was yesterday?",
    answers: ["yesterday is sunday", "I am teacher", "I can't go", "this is my car"],
  },
  {
    question: "20. What subjects do you like?",
    answers: ["they are dancers", "I like math", "I am 12 years old", "I am teacher"],
  },
];

const CORRECT_ANSWER = [0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1];
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
