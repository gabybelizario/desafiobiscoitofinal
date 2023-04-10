const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const fortuneCookie = document.querySelector("#fortuneCookie")
const btnReset = document.querySelector("#btnReset")

const fortune = [
  "Trasformo ogni sfida in una vittoria.",
  "Sono grato per la vita che ho mentre inseguo quella che vorrei.",
  "Il mio corpo merita di essere amato.",
  "C`e altro oltre al mio corpo.",
  "Posso sopravvivere a qualunque avversità della vita, e ci riuscirò.",
  "Apprezzo e amo il mio corpo.",
  "Sto gettando le basi per un futuro scintillante per me stessa.",
  "Anche dalle rovine può nascere qualcosa.",
  "Sono intelligente.",
  "Sono in costante crescita e maturazione.",
  "Rendo Meritto a me stessa ogni volta che faccio qualcosa che mi rende felice.",
  "Sono grata di essere circondata da persone che mi spingono a migliorarmi"

]

fortuneCookie.addEventListener("click", handleTryClick) 
btnReset.addEventListener("click", handleResetClick )
document.addEventListener("keydown", handleEnterClick)

function handleEnterClick() {
  if(e.key == "Enter" && screen2.classList.contains("hide")) {
    handleTryClick()
  } else if(e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick()
  }
}
function handleTryClick(event) {
  toogleScreen()
  clickFortune()
}
function handleResetClick() {
  toogleScreen()

}
function clickFortune() {
  let allFortunes = fortune.length
  let randomNumber = Math.floor(Math.random() * allFortunes)
  screen2.querySelector("h3").innerText = `${fortune[randomNumber]}`
}

function toogleScreen() {
  screen2.classList.toggle("hide")
  screen1.classList.toggle("hide")
}