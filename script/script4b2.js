const DB_QUIZ = [
  {
    question: "1. Terjemahkan kata ini! 'open'",
    answers: ["buka", "sepatu", "kertas", "pensil"],
  },
  {
    question: "2. Terjemahkan kata ini! 'book'",
    answers: ["anak", "buku", "saudara", "mobil"],
  },
  {
    question: "3. 'Tolong ,buka bukunya !'\n..... ,open the .....  !",
    answers: ["Please ,book", "Please ,pencil", "car", "youtube ,please"],
  },
  {
    question: "4. Terjemahkan kata ini! 'water'",
    answers: ["air", "sepatu", "kertas", "pensil"],
  },
  {
    question: "5. Terjemahkan kata ini! 'get'",
    answers: ["mendapatkan", "buku", "saudara", "mobil"],
  },
  {
    question: "6. 'Bolehkah saya mendapatkan sebuah air !'\nMay I ..... some .....  !",
    answers: ["book", "get ,water", "car", "get ,youtube"],
  },
  {
    question: "7. Terjemahkan kata ini! 'keep'",
    answers: ["tetap", "sepatu", "kertas", "pensil"],
  },
  {
    question: "8. Terjemahkan kata ini! 'silent'",
    answers: ["diam", "buku", "saudara", "mobil"],
  },
  {
    question: "9. 'Tetap diam ,kumohon!'\n..... ..... ,please !",
    answers: ["kick", "keep ,silent", "punch", "watching"],
  },
  {
    question: "10. Susunanlah kata acak berikut!\n',please-silent-keep'",
    answers: ["silent ,please keep !", ",please silent keep !", "keep silent ,please !", "keep ,please silent !"],
  },
  {
    question: "11. Terjemahkan kata ini! 'give'",
    answers: ["berikan", "tendang", "marah", "pensil"],
  },
  {
    question: "12. Terjemahkan kata ini! 'pencil'",
    answers: ["buku", "pensil", "botol", "bola"],
  },
  {
    question: "13. 'Tolong ,berikan saya pensilnya !'\nplease ,..... me the .....  !",
    answers: ["give ,pencil", "pen", "give ,bottle", "may ,ball"],
  },
  {
    question: "14. Terjemahkan kata ini! 'fruit'",
    answers: ["buah", "sepatu", "kertas", "pensil"],
  },
  {
    question: "15. 'Bolehkah saya mendapatkan sebuah buah !'\nMay I ..... some .....  !",
    answers: ["get ,fruit", "get ,water", "car", "get ,youtube"],
  },
  {
    question: "16. Susunanlah kata acak berikut!\n'may-get-I-fruit-some'",
    answers: ["May I get some fruit !", "I get may some fruit !", "May I get fruit some !", "fruit some I get !"],
  },
  {
    question: "17. Terjemahkan kata ini! 'don't'",
    answers: ["mendapatkan", "jangan", "saudara", "mobil"],
  },
  {
    question: "18. Terjemahkan kata ini! 'lazy'",
    answers: ["malas", "sepatu", "kertas", "pensil"],
  },
  {
    question: "19. 'jangan malas!'\n..... be .....  !",
    answers: ["dont ,lazy", "keep ,fruit", "dont ,car", "may ,fruit"],
  },
  {
    question: "20. Susunanlah kata acak berikut!\n'lazy-don't-be'",
    answers: ["Don't lazy be !", "Don't be lazy !", "lazy don't be !", "be lazy don't !"],
  },
];

const CORRECT_ANSWER = [0, 1, 0, 0, 0, 1, 0, 0, 1, 2, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1];
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
