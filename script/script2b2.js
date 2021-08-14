const DB_QUIZ = [
  {
    question: "1. Terjemahkan kata ini! 'water'",
    answers: ["air", "sepatu", "kertas", "pensil"],
  },
  {
    question: "2. Terjemahkan kata ini! 'get'",
    answers: ["mendapatkan", "buku", "saudara", "mobil"],
  },
  {
    question: "3. 'Bolehkah saya mendapatkan sebuah air !'\nMay I get some .....  !",
    answers: ["book", "water", "car", "youtube"],
  },
  {
    question: "4. Isi kata berikut sesuai soal sebelumnya!\n'May I ..... some .....  !'",
    answers: ["get ,water", "kick ,water", "get ,book", "push ,please"],
  },
  {
    question: "5. Susunanlah kata acak berikut!\n'may-get-some-I-water'",
    answers: ["May I get some water !", "I get may some water !", "May I get water some !", "water some I get !"],
  },
  {
    question: "6. Terjemahkan kata ini! 'get'",
    answers: ["mendapatkan", "buku", "saudara", "mobil"],
  },
  {
    question: "7. Terjemahkan kata ini! 'fruit'",
    answers: ["buah", "sepatu", "kertas", "pensil"],
  },
  {
    question: "8. 'Bolehkah saya mendapatkan sebuah buah !'\nMay I get some .....  !",
    answers: ["book", "fruit", "car", "fruit"],
  },
  {
    question: "9. Isi kata berikut sesuai soal sebelumnya!\n'may I ..... some .....  !'",
    answers: ["get ,fruit", "kick ,water", "get ,book", "push ,please"],
  },
  {
    question: "10. Susunanlah kata acak berikut!\n'may-get-I-fruit-some'",
    answers: ["May I get some fruit !", "I get may some fruit !", "May I get fruit some !", "fruit some I get !"],
  },
  {
    question: "11. Terjemahkan kata ini! 'may'",
    answers: ["bolehkah", "sepatu", "kertas", "pensil"],
  },
  {
    question: "12. Terjemahkan kata ini! 'coffee'",
    answers: ["buka", "kopi", "kertas", "pensil"],
  },
  {
    question: "13. 'Bolehkah saya mendapatkan sebuah coffee !'\n'May I get some .....  !'",
    answers: ["coffee", "pencil", "car", "youtube"],
  },
  {
    question: "14. Isi kata berikut sesuai soal sebelumnya!\n'..... I get some .....  !'",
    answers: ["may ,coffee", "may ,kick", "jump ,please", "push ,please"],
  },
  {
    question: "15. 'Susunanlah kata acak berikut!\n'I-get-may-some-coffee !'",
    answers: ["May I get some coffee !", "I get may some coffee !", "May I get coffee some !", "coffee some I get !"],
  },
  {
    question: "16. Terjemahkan kata ini! 'juice'",
    answers: ["jus", "botol", "marah", "pensil"],
  },
  {
    question: "17. Terjemahkan kata ini! 'may'",
    answers: ["pensil", "sepatu", "kertas", "bolehkah"],
  },
  {
    question: "18. 'Bolehkah saya mendapatkan sebuah jus !'\nmay i get some .....  !",
    answers: ["juice", "pen", "bottle", "pencil"],
  },
  {
    question: "19. Isi kata berikut sesuai soal sebelumnya!\n'..... I get some .....  !'",
    answers: ["may ,juice", "may ,kick", "jump ,please", "push ,please"],
  },
  {
    question: "20. 'Susunanlah kata acak berikut!\n'may-get-I-some-juice'",
    answers: ["May I get some juice !", "I get may some juice !", "May I get juice some !", "juice some I get !"],
  },
];

const CORRECT_ANSWER = [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 3, 0, 0, 0];
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
