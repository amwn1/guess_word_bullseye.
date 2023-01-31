const inputs = document.querySelector(".inputs"),
hintTag = document.querySelector(".hint span"),
wrong = document.querySelector(" span"),
resetBtn = document.querySelector(".reset-btn"),
typingInput = document.querySelector(".typing-input"),
chancesRemaining = document.querySelector(".chances-remaining span");

let word, maxGuesses, incorrectLetters = [], correctLetters = [];

function random() {
    let iteminput = wordList[Math.floor(Math.random() * wordList.length)];
    word = iteminput.word;
    maxGuesses = word.length >= 5 ? 8 : 6;
    correctLetters = []; incorrectLetters = [];
    wrong.innerText = incorrectLetters;
    chancesRemaining.innerText = maxGuesses;
    hintTag.innerText = iteminput.hint;
    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`;
        inputs.innerHTML = html;
    }
}
random();

// time is up
