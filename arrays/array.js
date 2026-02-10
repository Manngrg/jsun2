
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

// Looping backwards

console.log('----Looping back-----');

const ram = [
    'Ram',
    'Nepali',
    2037 - 1990,
    'student',
    ['hari', 'sita', 'Gita'],
    true
];

for (let i = ram.length - 1; i >= 0; i--) {
    console.log(i, ram[i]);
}

console.log('---loop inside loop---');


for (let exercise = 1; exercise < 3; exercise++) {
    console.log(`startting exercise..${exercise}`);

    for (let rep = 1; rep < 2; rep++) {
        console.log(`exercise ${exercise} :lifting weight repeition ${rep} 🏋️`);
    }

}

// WHILE LOOP

console.log('using while loop');

let rep = 1;
while (rep <= 4) {
    console.log(`WHILE : lifting weight repeition ${rep} 🏋️`);
    rep++;
}

//roll a dice and keep rolling until 6

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice} , next roll`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('loop is about to end..');
}
