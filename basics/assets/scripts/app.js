/* 
    Returning Values
*/

const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
    const result = num1 + num2;
    return result;
}

currentResult = add(2, 3);

outputResult(currentResult, '');

/* Output result:
    Result: 5
*/