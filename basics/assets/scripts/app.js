/* 
    More about using strings - 1
*/

const defaultResult = 0;

let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = "'('" + defaultResult + ' + 10) * 3 / 2 - 1'; // using " "

outputResult(currentResult, calculationDescription);

/* Output result:

    '('0 + 10) * 3 / 2 - 1

    Result: 14
*/