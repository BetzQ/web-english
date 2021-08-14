const DB_QUIZ = [
  {
    question: "1. 'Nama saya adalah Williams'\nMy name is .....",
    answers: ["Williams", "table", "chair", "door"],
  },
  {
    question: "2. Terjemahkan kata ini! 'my name'",
    answers: ["mobil saya", "nama saya", "bunga saya", "buku saya"],
  },
  {
    question: "3. Isi kata berikut sesuai soal sebelumnya!\n'..... ..... is Williams.'",
    answers: ["the car", "this thief", "my name", "my son"],
  },
  {
    question: "4. Susunanlah kata acak berikut!\n'is-Williams-name-my'",
    answers: ["Williams is name my", "my is name Williams", "name is my Williams", "my name is Williams"],
  },
  {
    question: "5. Terjemahkan kata ini! 'student'",
    answers: ["siswa", "penjahit", "dokter", "ilmuwan"],
  },
  {
    question: "6. 'Saya seorang pelajar ,sekolah saya di Havard'\nI am a ..... ,my school in Havard",
    answers: ["thief", "student", "tailor", "door"],
  },
  {
    question: "7. Terjemahkan kata ini! 'my school'",
    answers: ["pensil saya", "buku saya", "sekolah saya", "mobil saya"],
  },
  {
    question: "8. Isi kata berikut sesuai soal sebelumnya!\n'I am a student ,..... ..... in Havard.'",
    answers: ["my car", "my son", "my mom", "my school"],
  },
  {
    question: "9. Isi kata berikut sesuai soal sebelumnya!\n'I am a ..... ,..... ..... in Havard.'",
    answers: ["student ,my school", "son ,my mom", "brother ,my sister", "husband ,my wife"],
  },
  {
    question: "10. Susunanlah kata acak berikut!\n'am-student-I-a'",
    answers: ["student I a am", "am student I a", "I student am a", "I am a student"],
  },
  {
    question: "11. Terjemahkan kata ini! 'years'",
    answers: ["tahun", "sepatu", "kertas", "pensil"],
  },
  {
    question: "12. 'Saya berumur sembilan tahun'\nI am nine ..... old.",
    answers: ["years", "shoes", "pencil", "paper"],
  },
  {
    question: "13. Terjemahkan kata ini! 'nine'",
    answers: ["anak", "sembilan", "saudara", "mobil"],
  },
  {
    question: "14. Isi kata berikut sesuai soal sebelumnya!\n'I am ..... years old.'",
    answers: ["nine", "son", "shoes", "pencil"],
  },
  {
    question: "15. Susunanlah kata acak berikut!\n'old-years-am-I-nine'",
    answers: ["am nine I years old", "I nine am years old", "I am nine years old", "old years nine am I"],
  },
  {
    question: "16. 'Saya tinggal di Jakarta'\n..... live in Jakarta.",
    answers: ["I", "table", "chair", "pencil"],
  },
  {
    question: "17. Terjemahkan kata ini! 'live'",
    answers: ["anak", "tinggal", "sepatu", "saudara"],
  },
  {
    question: "18. Isi kata berikut sesuai soal sebelumnya!\n'I ..... in Jakarta.'",
    answers: ["live", "car", "son", "paper"],
  },
  {
    question: "19. Isi kata berikut sesuai soal sebelumnya!\n'I live ..... ..... .'",
    answers: ["my son", "paper", "wife", "in Jakarta"],
  },
  {
    question: "20. Susunanlah kata acak berikut!\n'live-in-I-Jakarta'",
    answers: ["I live in Jakarta", "Jakarta in I live", "live in I Jakarta", "in I live Jakarta"],
  },
];

const CORRECT_ANSWER = [0, 1, 2, 3, 0, 1, 2, 3, 0, 3, 0, 0, 1, 0, 2, 0, 1, 0, 3, 0];
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
