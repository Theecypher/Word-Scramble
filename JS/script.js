
(function() {
    const computerText = document.querySelector('.word'),
     hintWord = document.querySelector('.hint span'),
     time = document.querySelector('.time b'),
     inputField = document.querySelector('input'),
     refreshBtn = document.querySelector('.refresh-word'),
     checkBtn = document.querySelector('.check-word');

     const startTimer = maxTimer => {
         clearInterval(timer);
         timer = setInterval(() => {
             if (maxTimer > 0) {
                maxTimer--;
                return time.textContent = maxTimer;
             }
            clearInterval(timer);
            alert(`Timeup!! ${correctAnswer.toLocaleUpperCase()} was the correct word`);
            startGame();
        }, 1000)
     }

     let correctAnswer, timer;

     const startGame = () => {
         startTimer(60);
        let randomWord = words[Math.floor(Math.random() * words.length) + 1];

        let wordArray = randomWord.word.split("");
        for (let i = wordArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (1 + 1));
            [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
        }

        computerText.innerText = wordArray.join("");
        hintWord.innerText = randomWord.hint;
        correctAnswer = randomWord.word.toLocaleLowerCase();
        inputField.focus();
        inputField.value = "";
        inputField.setAttribute("maxlength", "correctword.length");

     }

     startGame();

     const checkWord = () => {
        let userWord = inputField.value.toLocaleLowerCase(); 
        if (!userWord) return alert("Enter a valid answer");
        if (userWord === correctAnswer) return alert(`Yipee! ${userWord} was the correct answer`);
        alert(`wrong! ${correctAnswer} is the correct answer`);
        startGame();
     }
     
     refreshBtn.addEventListener('click', startGame);
     checkBtn.addEventListener('click', checkWord);
})();