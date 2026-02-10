
const friends = ['mike', 'steven', 'peter'];

console.log(friends[friends.length - 1]);


//
const friends2 = ['mike ', 'paypay', 'steven'];
const newLength = friends2.push('newOne');
console.log(friends2);
console.log(newLength);

const jonas = [
    'jonas',
    'Scmann',
    2082 - 2057,
    'teacher',
    ['mike', 'peter', 'steven']
];

const types = [];



// array are object.
for (let i = 0; i < jonas.length; i++) {
    // reading from jonas array
    console.log(jonas[i], typeof jonas[i])

    //filling types array
    // types[i] = typeof jonas[i];

    types.push(typeof jonas[i]);
}
console.log(types);

const years = [2001, 1990, 1992, 2005];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break statements;

//continue is used to exit the current iteration and continue to next
// one whereras break completly terminates the array.

console.log('----Only string----');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] != 'string') continue;
    console.log(jonas[i],)
}

console.log('---break--with number-');

for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}
