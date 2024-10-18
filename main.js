//  Bu playerslarni achkosi  uchun
const count1 = document.getElementById("count1");
const count2 = document.getElementById("count2");

// Bu achkoni ozi
count1.innerHTML = 0;
count2.innerHTML = 0;
let countP = 0;
let countK = 0;
const player__id = document.querySelectorAll(".player__id");
const restart = document.getElementById("btn1");

// Tosh qaycho oyini ketti

player__id.forEach((element) => {
  element.addEventListener("click", () => {
    let random__number = Math.floor(Math.random() * 9) + 1;
    let user = element.getAttribute("data-choise");
    let computer = tanlov(random__number);

    play__now(user, computer);
  });
});

function tanlov(kompueter) {
  if (kompueter <= 4) {
    return "tosh";
  } else if (kompueter > 4 && kompueter <= 7) {
    return "qaychi";
  } else {
    return "qogoz";
  }
}

function play__now(user, computer) {
  if (
    (user === "tosh" && computer === "qaychi") ||
    (user === "qogoz" && computer === "tosh") ||
    (user === "qaychi" && computer === "qogoz")
  ) {
    alert("Player yutdi");
    count1.innerHTML = countP += 1;
    if (countP === 3) {
      alert("Player yutdi >>> Ishtirokingiz uchun raxmat . . . ");
      restgame();
    }
  } else if (
    (computer === "tosh" && user === "qaychi") ||
    (computer === "qogoz" && user === "tosh") ||
    (computer === "qaychi" && user === "qogoz")
  ) {
    count2.innerHTML = countK += 1;
    alert("Komputer yutdi");
    if (countK === 3) {
      alert("Komputer yutdi >>> Ishtirokingiz uchun raxmat . . . ");
      restgame();
    }
  } else if (user === computer) {
    alert("durrang");
  }
}

// Reastart bu

function restgame() {
  countK = 0;
  countP = 0;
  count1.innerHTML = 0;
  count2.innerHTML = 0;
}

restart.addEventListener("click", restgame);
