


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

