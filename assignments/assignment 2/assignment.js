const task3Element = document.getElementById('task-3');

// #1

function firstFunc () {
    alert ('test');
}

function secondFunc (name) {
    alert (name);
}

// #2

firstFunc ();

secondFunc ('Marko');

// #3

task3Element.addEventListener('click', firstFunc);

// #4

function thirdFunc (firstString, secondString, thirdString) {
    const sentence = firstString + secondString + thirdString;
    return sentence;
}

// #5

const combinedSentence = thirdFunc ('Marko ' , 'voli ' , 'Jovanu');

alert (combinedSentence);