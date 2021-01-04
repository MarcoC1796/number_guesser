let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);
const getAbsoluteDistance = (guess, target) => Math.abs(guess - target);
const compareGuesses = (u_guess, c_guess, target) => {
        if (0 > u_guess || u_guess > 9) {
            alert("Invalid Number");
            return;
        }
        return getAbsoluteDistance(u_guess, target) <= getAbsoluteDistance(c_guess, target)
    };
const updateScore = winner => (winner === 'human') ? humanScore++ : computerScore++;
const advanceRound = () => currentRoundNumber++;
