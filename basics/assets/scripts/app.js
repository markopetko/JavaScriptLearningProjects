/* 
    More about using strings - 5
*/

const defaultResult = 0;

let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = `( ${defaultResult} + 10) * 3 / 2 - 1`;

let errorMessage = 'An error \\ occurred!'; // adding \ as part of a string

outputResult(currentResult, errorMessage);

/* Output result:

    An error \ occurred!

    Result: 14
*/