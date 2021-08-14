const DB_QUIZ = [
  {
    question: "1. Terjemahkan kata ini! 'years'",
    answers: ["tahun", "sepatu", "kertas", "pensil"],
  },
  {
    question: "2. Terjemahkan kata ini! 'nine'",
    answers: ["anak", "sembilan", "saudara", "mobil"],
  },
  {
    question: "3. Susunanlah kata acak berikut!\n'old-years-am-I-nine'",
    answers: ["am nine I years old", "I nine am years old", "I am nine years old", "old years nine am I"],
  },
  {
    question: "4. Terjemahkan kata ini! 'his name'",
    answers: ["nama dia", "terjatuh", "menulis", "membantu"],
  },
  {
    question: "5. Terjemahkan kata ini! 'is'",
    answers: ["anak", "adalah", "saudara", "mobil"],
  },
  {
    question: "6. Susunanlah kata acak berikut!\n'name-his-is-Smith'",
    answers: ["his name is Smith", "name is Smith his", "name his is Smith", "Smith name his is"],
  },
  {
    question: "7. Terjemahkan kata ini! 'Brazilian'",
    answers: ["orang Brazil", "terjatuh", "menulis", "membantu"],
  },
  {
    question: "8. Terjemahkan kata ini! 'He'",
    answers: ["anak", "dia laki-laki", "saudara", "mobil"],
  },
  {
    question: "9. Susunanlah kata acak berikut!\n'Brazilian-is-He'",
    answers: ["He Brazilian is", "Brazilian is he", "is he Brazilian", "He is Brazilian"],
  },
  {
    question: "10. Isi kata berikut sesuai soal sebelumnya!\n'..... is Brazilian.'",
    answers: ["He", "son", "shoes", "pencil"],
  },
  {
    question: "11. 'Saya tinggal di Jakarta'\n..... live in Jakarta.",
    answers: ["I", "table", "chair", "pencil"],
  },
  {
    question: "12. Terjemahkan kata ini! 'live'",
    answers: ["anak", "tinggal", "sepatu", "saudara"],
  },
  {
    question: "13. 'Saya tinggal di Jakarta'\n'I ..... ..... ..... .'",
    answers: ["my son", "want paper", "go to wife", "live in Jakarta"],
  },
  {
    question: "14. Terjemahkan kata ini! 'her name'",
    answers: ["terjatuh", "nama dia", "menulis", "membantu"],
  },
  {
    question: "15. 'nama dia adalah Susan'\nher ..... is Susan",
    answers: ["name", "shoes", "pencil", "paper"],
  },
  {
    question: "16. Isi kata berikut sesuai soal sebelumnya!\n'her ..... ... ..... .'",
    answers: ["name is Susan", "live is", "my car", "that paper"],
  },
  {
    question: "17. Terjemahkan kata ini! 'American'",
    answers: ["terjatuh", "orang Amerika", "menulis", "membantu"],
  },
  {
    question: "18. Terjemahkan kata ini! 'She'",
    answers: ["dia perempuan", "my car", "her name", "that paper"],
  },
  {
    question: "19. Susunanlah kata acak berikut!\n'is-American-She'",
    answers: ["American she is", "is American she", "She is American", "She American is"],
  },
  {
    question: "20. Isi kata berikut sesuai soal sebelumnya!\n'..... ... American.'",
    answers: ["She is", "live is", "my car", "that paper"],
  },
];

const CORRECT_ANSWER = [0, 1, 2, 0, 1, 0, 0, 1, 3, 0, 0, 1, 3, 1, 0, 0, 1, 0, 2, 0];
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
