
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