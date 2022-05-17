import { status, guess, submit } from './api.mjs';

const occuranaceArray = [
    'E', 'S', 'I', 'A', 'R', 'N', 'T', 'O', 'L', 'C', 'D', 'U', 'G', 'P', 'M', 'H', 'B', 'Y', 'F', 'V', 'K', 'W', 'Z', 'X', 'J', 'Q'
];

let solveMap = [];

export function solveAll() {
  setupSolvemap();
    // Get all word ids.
    // foreach word id: call solveWord.
}

async function setupSolvemap() {
    const req = await status();
    const data = await req.json();

    console.log(data);

    data.forEach(word => {
        solveMap.push({
            "id": word.id,
            "triedLetters": [],
            "word": word.word,
        });
    });
}

function solveWord(wordId) {
    // ist word solved.
    while(!isWordSolved(wordId)) {
        // Do the next step. What is the next step? 
        // Either next letter or guess the word.

        // Primitve: if !all letters guessed, do
        if (areAllLettersGuessed(wordId)) {
            // Send request to solve word with the current solution.
            // TODO send the word. 
        } else {
            // Send request with next sensible letter.
            guessNextLetter(wordId);
        }
    }
}

function guessNextLetter(wordId) {
    const wordMapEntry = solveMap.find((word) => {
        return word.id === wordId;
    });

    const nextLetters = diffArray(occuranaceArray, wordMapEntry.triedLetters);

    if(nextLetters.length) {
        // make request for next letter with nextLetters[0];
        // onsuccess: insert found letters into word.
    }

    console.error('all letters tried for word with id ' + wordId);
}

function insertFoundLetters(currentWord, newSolvedLetters) {
    currentWord = '_a_';
    newSolvedLetters = 'C__';

    const newLettersArray = newSolvedLetters.split('');
    newLettersArray.forEach((letter, i) => {
        if(letter !== '_') {
            currentWord = currentWord.substring(0, i) + letter + currentWord.substring(i + 1);
        }
    });

    return currentWord;
}

function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
  }

function areAllLettersGuessed(wordId) {
    // TODO return true if all letters are filled out
}

function isWordSolved(wordId) {
    // TODO return true if word with wordId is solved.
}
