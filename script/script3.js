const DB_QUIZ = [
  {
    question: "1. Terjemahkan kata ini! 'baseball'",
    answers: ["sepak bola", "baseball", "musik", "penulis"],
  },
  {
    question: "2. 'Smith suka baseball'\nSmith likes ..... .",
    answers: ["baseball", "can't", "can", "doing"],
  },
  {
    question: "3. Terjemahkan kata ini! 'likes'",
    answers: ["suka", "satu", "pensil", "buku"],
  },
  {
    question: "4. Isi kata berikut sesuai soal sebelumnya!\n'Smith ..... baseball .'",
    answers: ["one brother", "likes", "wife", "car"],
  },
  {
    question: "5. Susunanlah kata acak berikut!\n'likes-Smith-baseball'",
    answers: ["Smith likes baseball", "baseball likes Smith", "Smith baseball likes", "baseball Smith likes"],
  },
  {
    question: "6. Terjemahkan kata ini! 'flower'",
    answers: ["saudara perempuan", "bunga", "anak", "pensil"],
  },
  {
    question: "7. 'Susan suka bunga'\nSusan likes ..... .",
    answers: ["flower", "can't", "kick", "doing"],
  },
  {
    question: "8. Terjemahkan kata ini! 'likes'",
    answers: ["suami", "suka", "pensil", "buku"],
  },
  {
    question: "9. Isi kata berikut sesuai soal sebelumnya!\n'Susan ..... flower.'",
    answers: ["have", "likes", "sister", "car"],
  },
  {
    question: "10. Susunanlah kata acak berikut!\n'Susan-flower-likes'",
    answers: ["likes Susan flower", "flower Susan likes", "likes flower Susan", "Susan likes flower"],
  },
  {
    question: "11. Terjemahkan kata ini! 'Brazilian'",
    answers: ["orang Brazil", "terjatuh", "menulis", "membantu"],
  },
  {
    question: "12. 'Dia adalah orang brazil'\nHe is ..... .",
    answers: ["Brazilian", "shoes", "pencil", "paper"],
  },
  {
    question: "13. Terjemahkan kata ini! 'He'",
    answers: ["anak", "dia laki-laki", "saudara", "mobil"],
  },
  {
    question: "14. Isi kata berikut sesuai soal sebelumnya!\n'..... is Brazilian.'",
    answers: ["He", "son", "shoes", "pencil"],
  },
  {
    question: "15. Susunanlah kata acak berikut!\n'Brazilian-is-He'",
    answers: ["He Brazilian is", "Brazilian is he", "is he Brazilian", "He is Brazilian"],
  },
  {
    question: "16. Terjemahkan kata ini! 'American'",
    answers: ["terjatuh", "orang Amerika", "menulis", "membantu"],
  },
  {
    question: "17. 'Dia adalah orang America'\nShe is .....",
    answers: ["American", "shoes", "pencil", "paper"],
  },
  {
    question: "18. Terjemahkan kata ini! 'She'",
    answers: ["dia perempuan", "my car", "her name", "that paper"],
  },
  {
    question: "19. Isi kata berikut sesuai soal sebelumnya!\n'..... ... American.'",
    answers: ["She is", "live is", "my car", "that paper"],
  },
  {
    question: "20. Susunanlah kata acak berikut!\n'is-American-She'",
    answers: ["American she is", "is American she", "She is American", "She American is"],
  },
];

const CORRECT_ANSWER = [1, 0, 0, 1, 0, 1, 0, 1, 1, 3, 0, 0, 1, 0, 3, 1, 0, 0, 0, 2];
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
