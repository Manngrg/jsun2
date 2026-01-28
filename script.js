


function fruitJuiceProcessor(apple, banana) {
    const juice = `Juice with ${apple} many apples and ${banana} many bananas please.`;
    return juice;
}

console.log(fruitJuiceProcessor(3, 1));

//function declarion vs expression 

function calcAge1(birthYear) {
    const age = 2020 - birthYear;
    return age;
}

// or to simplify

function calcAge1(birthYear) {
    return age = 2029 - birthYear;
}

age1 = calcAge1(2001);
console.log(age1);

// function expression ]


// arrowfunction 

const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1990);
console.log(age3);

const yearsUntilRetire = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirementAge = 65 - age;
    // return retirementAge;
    return `${firstName} retires in ${retirementAge} years`
}
console.log(yearsUntilRetire(1991, 'manoj'));


// if one statement no return required
//if multiple parameters paranthesis is required for parameters and return too.





