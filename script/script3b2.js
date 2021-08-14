const DB_QUIZ = [
  {
    question: "1. Terjemahkan kata ini! 'keep'",
    answers: ["tetap", "sepatu", "kertas", "pensil"],
  },
  {
    question: "2. Terjemahkan kata ini! 'silent'",
    answers: ["diam", "buku", "saudara", "mobil"],
  },
  {
    question: "3. 'Tetap diam ,kumohon!'\nKeep ..... ,please !",
    answers: ["kick", "silent", "punch", "watching"],
  },
  {
    question: "4. Isi kata berikut sesuai soal sebelumnya!\n'..... ..... ,please !'",
    answers: ["Keep silent", "still cool", "get book", "push please"],
  },
  {
    question: "5. Susunanlah kata acak berikut!\n',please-silent-keep'",
    answers: ["silent ,please keep !", ",please silent keep !", "keep silent ,please !", "keep ,please silent !"],
  },
  {
    question: "6. Terjemahkan kata ini! 'don't'",
    answers: ["mendapatkan", "jangan", "saudara", "mobil"],
  },
  {
    question: "7. Terjemahkan kata ini! 'lazy'",
    answers: ["malas", "sepatu", "kertas", "pensil"],
  },
  {
    question: "8. 'jangan malas!'\nDon't be .....  !",
    answers: ["lazy", "fruit", "car", "fruit"],
  },
  {
    question: "9. Isi kata berikut sesuai soal sebelumnya!\n'..... be ..... !'",
    answers: ["Dont ,punch", "Don't ,lazy", "Don't ,book", "Don't ,please"],
  },
  {
    question: "10. Susunanlah kata acak berikut!\n'lazy-don't-be'",
    answers: ["Don't lazy be !", "Don't be lazy !", "lazy don't be !", "be lazy don't !"],
  },
  {
    question: "11. Terjemahkan kata ini! 'don't'",
    answers: ["mendapatkan", "jangan", "saudara", "mobil"],
  },
  {
    question: "12. Terjemahkan kata ini! 'naughty'",
    answers: ["nakal", "kopi", "kertas", "pensil"],
  },
  {
    question: "13. 'Jangan nakal !'\n'Don't be ..... !'",
    answers: ["naughty", "pencil", "car", "lazy"],
  },
  {
    question: "14. Isi kata berikut sesuai soal sebelumnya!\n'..... be ..... !'",
    answers: ["Dont ,naughty", "Don't ,lazy", "Don't ,book", "Don't ,please"],
  },
  {
    question: "15. 'Susunanlah kata acak berikut!\n'naughty-don't-be'",
    answers: ["naughty be don't", "Don't naughty be", "Don't be naughty", "be naughty don't"],
  },
  {
    question: "16. Terjemahkan kata ini! 'kick'",
    answers: ["tendang", "jangan", "marah", "pensil"],
  },
  {
    question: "17. Terjemahkan kata ini! 'ball'",
    answers: ["pensil", "bola", "kertas", "bolehkah"],
  },
  {
    question: "18. 'Jangan tendang bolanya !'\nDon't kick the ..... !",
    answers: ["ball", "pen", "bottle", "pencil"],
  },
  {
    question: "19. Isi kata berikut sesuai soal sebelumnya!\n'Don't ..... the ..... !'",
    answers: ["may ,juice", "kick ,ball", "Dont ,naughty", "Don't ,lazy"],
  },
  {
    question: "20. 'Susunanlah kata acak berikut!\n'the-ball-don't-kick'",
    answers: ["Don't kick the ball", "the ball don't kick", "kick the ball don't", "the ball kick don't"],
  },
];

const CORRECT_ANSWER = [0, 0, 1, 0, 2, 1, 0, 0, 1, 1, 1, 0, 0, 0, 2, 0, 1, 0, 1, 0];
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
