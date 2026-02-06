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


=> . notation is member accesss where as bracket is computed member access 
because we can compute the property names we want to access. both are L -> R
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

// Object methods*

const manoj = {
    firstName: 'manoj',
    lastName: 'gurung',
    birthYear: 2001,
    job: 'unemployed',
    friends: ['mike', 'jay', 'katt'],
    hasDriversLicense: false,

    //     calcAge: function (birthYear) {
    //         return 2026 - birthYear;
    //     }
    // };


    calcAge: function (birthYear) {
        return 2026 - this.birthYear;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old teacher, 
    and he has ${this.hasDriversLicense ? 'a' : 'no'}
     driver's license`
    }
};


console.log(manoj.calcAge());
//or
// console.log(manoj['calcAge'](2001));

// Manoj is a 46 year old teacher, and
// he has a driver&s license.



console.log(manoj.getSummary());







