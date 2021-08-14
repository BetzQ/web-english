const DB_QUIZ = [
  {
    question: "1. Terjemahkan kata ini! 'open'",
    answers: ["buka", "sepatu", "kertas", "pensil"],
  },
  {
    question: "2. Terjemahkan kata ini! 'door'",
    answers: ["buka", "pintu", "kertas", "pensil"],
  },
  {
    question: "3. 'Tolong ,buka pintunya !'\n'please ,..... the .....  !'",
    answers: ["open,door", "pencil", "may,car", "don't,youtube"],
  },
  {
    question: "4. Terjemahkan kata ini! 'may'",
    answers: ["bolehkah", "sepatu", "kertas", "pensil"],
  },
  {
    question: "5. Terjemahkan kata ini! 'coffee'",
    answers: ["buka", "kopi", "kertas", "pensil"],
  },
  {
    question: "6. 'Bolehkah saya mendapatkan sebuah coffee !'\n'..... I get some .....  !'",
    answers: ["may,coffee", "don't,pencil", "please,car", "give youtube"],
  },
  {
    question: "7. Terjemahkan kata ini! 'don't'",
    answers: ["mendapatkan", "jangan", "saudara", "mobil"],
  },
  {
    question: "8. Terjemahkan kata ini! 'naughty'",
    answers: ["nakal", "kopi", "kertas", "pensil"],
  },
  {
    question: "9. 'Jangan nakal !'\n'..... be ..... !'",
    answers: ["Don't,naughty", "pencil", " may,car", "don't,lazy"],
  },
  {
    question: "10. 'Susunanlah kata acak berikut!\n'naughty-don't-be'",
    answers: ["naughty be don't", "Don't naughty be", "Don't be naughty", "be naughty don't"],
  },
  {
    question: "11. Terjemahkan kata ini! 'ball'",
    answers: ["buka", "pintu", "bola", "pensil"],
  },
  {
    question: "12. 'Tolong ,berikan bolanya!'\nPlease give me the ..... !",
    answers: ["ball", "pen", "bottle", "pencil"],
  },
  {
    question: "13. 'Susunanlah kata acak berikut!\n'please ,-the-ball-give-me'",
    answers: ["please ,me the pencil give !", "please ,give me the ball !", "the pencil give me ,please !", "me give pencil the ,please !"],
  },
  {
    question: "14. Terjemahkan kata ini! 'juice'",
    answers: ["jus", "botol", "marah", "pensil"],
  },
  {
    question: "15. 'Bolehkah saya mendapatkan sebuah jus !'\nmay i get some .....  !",
    answers: ["juice", "pen", "bottle", "pencil"],
  },
  {
    question: "16. 'Susunanlah kata acak berikut!\n'may-get-I-some-juice'",
    answers: ["May I get some juice !", "I get may some juice !", "May I get juice some !", "juice some I get !"],
  },
  {
    question: "17. Terjemahkan kata ini! 'kick'",
    answers: ["tendang", "jangan", "marah", "pensil"],
  },
  {
    question: "18. Terjemahkan kata ini! 'ball'",
    answers: ["pensil", "bola", "kertas", "bolehkah"],
  },
  {
    question: "19. 'Jangan tendang bolanya !'\nDon't kick the ..... !",
    answers: ["ball", "pen", "bottle", "pencil"],
  },
  {
    question: "20. 'Susunanlah kata acak berikut!\n'the-ball-don't-kick'",
    answers: ["Don't kick the ball", "the ball don't kick", "kick the ball don't", "the ball kick don't"],
  },
];

const CORRECT_ANSWER = [0, 1, 0, 0, 1, 0, 1, 0, 0, 2, 2, 1, 1, 0, 0, 0, 0, 1, 0, 0];
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
