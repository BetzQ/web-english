const DB_QUIZ = [
  {
    question: "1. 'Nama saya adalah Williams'\nMy name is .....",
    answers: ["Williams", "table", "chair", "door"],
  },
  {
    question: "2. Isi kata berikut sesuai soal sebelumnya!\n'..... ..... is Williams.'",
    answers: ["the car", "this thief", "my name", "my son"],
  },
  {
    question: "3. Susunanlah kata acak berikut!\n'is-Williams-name-my'",
    answers: ["Williams is name my", "my is name Williams", "name is my Williams", "my name is Williams"],
  },
  {
    question: "4. Terjemahkan kata ini! 'brother'",
    answers: ["saudara laki-laki", "saudara perempuan", "anak", "ibu"],
  },
  {
    question: "5. 'Saya punya satu saudara laki-laki'\nI have ..... brother.",
    answers: ["one", "can't", "kick", "doing"],
  },
  {
    question: "6. Susunanlah kata acak berikut!\n'have-I-one-brother'",
    answers: ["one I brother have", "I have one brother", "I brother have one", "brother have one I"],
  },
  {
    question: "7. Terjemahkan kata ini! 'baseball'",
    answers: ["sepak bola", "baseball", "musik", "penulis"],
  },
  {
    question: "8. 'Smith suka baseball'\nSmith likes ..... .",
    answers: ["baseball", "can't", "can", "doing"],
  },
  {
    question: "9. Terjemahkan kata ini! 'likes'",
    answers: ["suka", "satu", "pensil", "buku"],
  },
  {
    question: "10. Susunanlah kata acak berikut!\n'likes-Smith-baseball'",
    answers: ["Smith likes baseball", "baseball likes Smith", "Smith baseball likes", "baseball Smith likes"],
  },
  {
    question: "11. Terjemahkan kata ini! 'student'",
    answers: ["siswa", "penjahit", "dokter", "ilmuwan"],
  },
  {
    question: "12. Terjemahkan kata ini! 'my school'",
    answers: ["pensil saya", "buku saya", "sekolah saya", "mobil saya"],
  },
  {
    question: "13. 'Saya seorang pelajar ,sekolah saya di Havard'\nI am a ..... ,..... ..... in Havard.",
    answers: ["student ,my school", "son ,my mom", "brother ,my sister", "husband ,my wife"],
  },
  {
    question: "14. Terjemahkan kata ini! 'sister'",
    answers: ["saudara perempuan", "istri", "anak", "pensil"],
  },
  {
    question: "15. Terjemahkan kata ini! 'have'",
    answers: ["suami", "punya", "pensil", "buku"],
  },
  {
    question: "16. 'Saya punya satu saudara perempuan'\nI ..... one ..... .",
    answers: ["have,sister", "son", "sister,mother", "car,father"],
  },
  {
    question: "17. Terjemahkan kata ini! 'flower'",
    answers: ["saudara perempuan", "bunga", "anak", "pensil"],
  },
  {
    question: "18. Terjemahkan kata ini! 'likes'",
    answers: ["suami", "suka", "pensil", "buku"],
  },
  {
    question: "19. Susunanlah kata acak berikut!\n'Susan-flower-likes'",
    answers: ["likes Susan flower", "flower Susan likes", "likes flower Susan", "Susan likes flower"],
  },
  {
    question: "20. Isi kata berikut sesuai soal sebelumnya!\n'Susan ..... ..... .'",
    answers: ["have toy", "likes flower", "sister dress", "car"],
  },
];

const CORRECT_ANSWER = [0, 2, 3, 0, 0, 1, 1, 0, 0, 0, 0, 2, 0, 0, 1, 0, 1, 1, 3, 1];
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
