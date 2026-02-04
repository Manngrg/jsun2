/*
------using Array--------

const JonasArray = [
    'gurung',
    'Mann',
    2030 - 2090,
    'teacher',
    ['manoj', 'hari', 'ajax']
];
*/

// using objects:
const jonas = {
    firstName: 'Manoj',
    lastName: 'gurung',
    age: 2030 - 1990,
    job: 'teacher',
    friends: ['hari', 'bodh', 'himm']
};

// Dot vs Bracket Notation

console.log(jonas.lastName);
console.log(jonas['lastName']);

// in bracket notation we can use any expression !!!

const nameKey = 'Name';
console.log(jonas['first' + nameKey]); // firstName is created
console.log(jonas['last' + nameKey]); //lastName is created.

//recap
/*  why use bracket notation ?
->  when we need to 1st compute the property name like in the above.

*/

const interestedIn = prompt('What do you want to know about Manoj? Choose between  firstName, lastName, age, job and friends');


if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! ')
}
// dot notation wouldnt work here as it would return undefined.

jonas.location = 'Nepal';
jonas['twitter'] = '@manngg';
console.log(jonas);

// challenge
// jonas has 3 friends and his best friend is hari

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`);