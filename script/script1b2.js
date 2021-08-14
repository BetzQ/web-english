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
    question: "3. 'Tolong ,buka bukunya !'\nPlease ,open the .....  !",
    answers: ["book", "pencil", "car", "youtube"],
  },
  {
    question: "4. Isi kata berikut sesuai soal sebelumnya!\n'..... ,..... the book !'",
    answers: ["Please ,open", "Please ,kick", "jump ,please", "push ,please"],
  },
  {
    question: "5. Susunanlah kata acak berikut!\n'please ,-book-open-the'",
    answers: ["Please ,the book open !", "Please ,open the book !", "the book open ,please !", "please ,book open the !"],
  },
  {
    question: "6. Terjemahkan kata ini! 'give'",
    answers: ["berikan", "tendang", "marah", "pensil"],
  },
  {
    question: "7. Terjemahkan kata ini! 'pencil'",
    answers: ["buku", "pensil", "botol", "bola"],
  },
  {
    question: "8. 'Tolong ,berikan saya pensilnya !'\nplease ,give me the .....  !",
    answers: ["pencil", "pen", "bottle", "ball"],
  },
  {
    question: "9. Isi kata berikut sesuai soal sebelumnya!\n'..... ,..... me the pencil !'",
    answers: ["please ,give", "Please ,kick", "jump ,please", "push ,please"],
  },
  {
    question: "10. Susunanlah kata acak berikut!\n'please ,-me-pencil-the-give'",
    answers: ["please ,me the pencil give !", "please ,give me the pencil !", "the pencil give me ,please !", "me give pencil the ,please !"],
  },
  {
    question: "11. Terjemahkan kata ini! 'open'",
    answers: ["buka", "sepatu", "kertas", "pensil"],
  },
  {
    question: "12. Terjemahkan kata ini! 'door'",
    answers: ["buka", "pintu", "kertas", "pensil"],
  },
  {
    question: "13. 'Tolong ,buka pintunya !'\n'please ,open the .....  !'",
    answers: ["door", "pencil", "car", "youtube"],
  },
  {
    question: "14. Isi kata berikut sesuai soal sebelumnya!\n'..... ,..... the door !'",
    answers: ["please ,open", "Please ,kick", "jump ,please", "push ,please"],
  },
  {
    question: "15. 'Susunanlah kata acak berikut!\n'please ,-the-door-open'",
    answers: ["please ,open door the !", "please ,open the door !", "the door open ,please !", "door the open ,please !"],
  },
  {
    question: "16. Terjemahkan kata ini! 'give'",
    answers: ["berikan", "tendang", "marah", "pensil"],
  },
  {
    question: "17. Terjemahkan kata ini! 'ball'",
    answers: ["buka", "pintu", "bola", "pensil"],
  },
  {
    question: "18. 'Tolong ,berikan saya bolanya!'\nPlease give me the ..... !",
    answers: ["ball", "pen", "bottle", "pencil"],
  },
  {
    question: "19. Isi kata berikut sesuai soal sebelumnya!\n'..... ,..... me the ball!'",
    answers: ["please ,give", "Please ,kick", "jump ,please", "push ,please"],
  },
  {
    question: "20. 'Susunanlah kata acak berikut!\n'please ,-the-ball-give-me'",
    answers: ["please ,me the pencil give !", "please ,give me the ball !", "the pencil give me ,please !", "me give pencil the ,please !"],
  },
];

const CORRECT_ANSWER = [0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 2, 0, 0, 1];
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
