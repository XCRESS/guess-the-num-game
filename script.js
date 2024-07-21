const form = document.querySelector("form");
const guessNo = document.querySelector(".guessNo");
const margin = document.querySelector(".margin");
const result = document.querySelector(".result");
const submit = document.querySelector("#submit");
let rand = parseInt(Math.random() * 100 + 1);
let counter = 10;
let play = true;

guessNo.innerHTML = counter;

const checkguess = (ans) => {
    return ans == rand;
};

function checkmargin(ans) {
    if (ans > rand) {
        return "high";
    } else {
        return "low";
    }
}

function guessleft(count) {
    guessNo.innerHTML = count - 1; // Display the updated count
    return count - 1;
}

function checkplay(playgame) {
    return playgame > 0;
}

function resetGame() {
    rand = parseInt(Math.random() * 100 + 1);
    counter = 10;
    play = true;
    guessNo.innerHTML = counter;
    margin.innerHTML = '';
    result.innerHTML = '';
    document.querySelector("#guess").value = '';
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const guessInput = document.querySelector("#guess");
    const guess = guessInput.value;
    guessInput.value = ''; // Clear input after every guess

    if (checkplay(counter)) {
        if (checkguess(guess)) {
            result.innerHTML = "Hurrah! You won 🥳";
            play = false;
            setTimeout(resetGame, 3000); // Reset the game after 3 seconds
        } else {
            margin.innerHTML = `Your guess is too ${checkmargin(guess)}.`;
            counter = guessleft(counter);
            if (counter <= 0) {
                result.innerHTML = "Game Over. You've used all your guesses.";
                play = false;
                setTimeout(resetGame, 3000); // Reset the game after 3 seconds
            }
        }
    } else {
        result.innerHTML = "Game Over. No more guesses left.";
        setTimeout(resetGame, 3000); // Reset the game after 3 seconds
    }
});
