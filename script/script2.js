const DB_QUIZ = [
  {
    question: "1. Terjemahkan kata ini! 'brother'",
    answers: ["saudara laki-laki", "saudara perempuan", "anak", "ibu"],
  },
  {
    question: "2. 'Saya punya satu saudara laki-laki'\nI have ..... brother.",
    answers: ["one", "can't", "kick", "doing"],
  },
  {
    question: "3. Terjemahkan kata ini! 'one'",
    answers: ["sepatu", "satu", "pensil", "buku"],
  },
  {
    question: "4. Isi kata berikut sesuai soal sebelumnya!\n'I have ..... ..... .'",
    answers: ["one brother", "sleep", "wife", "car"],
  },
  {
    question: "5. Susunanlah kata acak berikut!\n'have-I-one-brother'",
    answers: ["one I brother have", "I have one brother", "I brother have one", "brother have one I"],
  },
  {
    question: "6. Terjemahkan kata ini! 'sister'",
    answers: ["saudara perempuan", "istri", "anak", "pensil"],
  },
  {
    question: "7. 'Saya punya satu saudara perempuan'\nI have one ..... .",
    answers: ["sister", "can't", "kick", "doing"],
  },
  {
    question: "8. Terjemahkan kata ini! 'have'",
    answers: ["suami", "punya", "pensil", "buku"],
  },
  {
    question: "9. Isi kata berikut sesuai soal sebelumnya!\n'I ..... one sister.'",
    answers: ["have", "son", "sister", "car"],
  },
  {
    question: "10. Susunanlah kata acak berikut!\n'I-one-sister-have'",
    answers: ["I have one sister", "sister have I one", "one sister have I", "I one sister have"],
  },
  {
    question: "11. Terjemahkan kata ini! 'his name'",
    answers: ["nama dia", "terjatuh", "menulis", "membantu"],
  },
  {
    question: "12. 'Nama dia adalah Smith'\nhis ..... is Smith.",
    answers: ["name", "shoes", "pencil", "paper"],
  },
  {
    question: "13. Terjemahkan kata ini! 'is'",
    answers: ["anak", "adalah", "saudara", "mobil"],
  },
  {
    question: "14. Isi kata berikut sesuai soal sebelumnya!\n'his name ..... ..... .'",
    answers: ["is Smith", "son", "shoes", "pencil"],
  },
  {
    question: "15. Susunanlah kata acak berikut!\n'name-his-is-Smith'",
    answers: ["his name is Smith", "name is Smith his", "name his is Smith", "Smith name his is"],
  },
  {
    question: "16. Terjemahkan kata ini! 'her name'",
    answers: ["terjatuh", "nama dia", "menulis", "membantu"],
  },
  {
    question: "17. 'nama dia adalah Susan'\nher ..... is Susan",
    answers: ["name", "shoes", "pencil", "paper"],
  },
  {
    question: "18. Isi kata berikut sesuai soal sebelumnya!\n'..... ..... is Susan.' ",
    answers: ["live is", "my car", "her name", "that paper"],
  },
  {
    question: "19. Isi kata berikut sesuai soal sebelumnya!\n'her ..... ... ..... .'",
    answers: ["name is Susan", "live is", "my car", "that paper"],
  },
  {
    question: "20. Susunanlah kata acak berikut!\n'name-her-is-Susan'",
    answers: ["name her Susan is", "name her is Susan", "Susan her name is", "her name is Susan"],
  },
];

const CORRECT_ANSWER = [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 2, 0, 3];
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
