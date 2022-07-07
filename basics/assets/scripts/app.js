/* 
    Executing functions indirectly - basic calculator - 2
*/

const defaultResult = 0;
let currentResult = defaultResult;

function add() {
    currentResult = currentResult + parseInt(userInput.value); 
    /* all other SIMPLE operators will work, just + operator wound't, and because of that must be used parseInt / parseFloat / ++ 
       parseInt converting string number to an number without decimal places
       parseFloat converting string number to an number with decimal places */

    // currentResult = currentResult + + userInput.value; // another way converting string number to an number with + +
    outputResult(currentResult, '');
}

addBtn.addEventListener('click', add); // ('event', which event is called)

/* Output result:
    If you input 10, result is: 10
*/