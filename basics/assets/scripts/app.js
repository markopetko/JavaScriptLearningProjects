/* 
    Executing functions indirectly - basic calculator - 1
*/
const defaultResult = 0;
let currentResult = defaultResult;

function add() {
    currentResult = currentResult + userInput.value;
    outputResult(currentResult, '');
}

addBtn.addEventListener('click', add); // ('event', which event is called)

/* Output result:
    If you input 5, result is: 05
*/