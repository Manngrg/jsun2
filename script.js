


// function fruitJuiceProcessor(apple, banana) {
//     const juice = `Juice with ${apple} many apples and ${banana} many bananas please.`;
//     return juice;
// }

// console.log(fruitJuiceProcessor(3, 1));

// //function declarion vs expression 

// function calcAge1(birthYear) {
//     const age = 2020 - birthYear;
//     return age;
// }

// // or to simplify

// function calcAge1(birthYear) {
//     return age = 2029 - birthYear;
// }

// age1 = calcAge1(2001);
// console.log(age1);

// // function expression ]


// // arrowfunction 

// const calcAge3 = birthYear => 2037 - birthYear;

// const age3 = calcAge3(1990);
// console.log(age3);

// const yearsUntilRetire = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirementAge = 65 - age;
//     // return retirementAge;
//     return `${firstName} retires in ${retirementAge} years`
// }
// console.log(yearsUntilRetire(1991, 'manoj'));


// // if one statement no return required
// //if multiple parameters paranthesis is required for parameters and return too.

// //arrow function dont get this keyword.

// // New topic : function calling other functions:


// function cutFruitInPtieces(fruit) {
//     return fruit * 4;
// }


// function fruitJuiceProcessor(apple, banana) {
//     //calling the function inside a function:
//     const applePieces = cutFruitInPtieces(apple);
//     const bananaPieces = cutFruitInPtieces(banana);

//     const juice = `Juice with ${applePieces} many apples and ${bananaPieces} many bananas please.`;
//     return juice;
// }

// console.log(fruitJuiceProcessor(2, 3));


//function review 

const calcAge = function (year) {
    return 2037 - year;
}

const yearsUntilRetire2 = function (birthYear, firstname) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstname} retires in ${retirement}years`);
        return retirement;

    } else {
        console.log(`${firstname} has already retired`)
        return -1;
    }

}

console.log(yearsUntilRetire2(1960, 'jonas'));

/*

important things:

1. after return function gtfo.
2.  types: Function declaration |  Function Expression | Arrow Function

*/

