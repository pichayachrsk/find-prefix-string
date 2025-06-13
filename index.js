console.log('Finding the longest prefix is starting...');
console.log('----------------------------------');

function findLongestPrefix(words) {
    if (!words || words.length === 0) return '';

    let prefix = words[0];

    for (let i = 1; i < words.length; i++) {
        while (words[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === '') return '';
        }
    }
    return prefix;
}

const input1 = ['flower', 'flow', 'flight'];
const input2 = ['dog', 'racecar', 'car'];

const longestPrefix1 = findLongestPrefix(input1);
const longestPrefix2 = findLongestPrefix(input2);

console.log(`Input 1: ${input1}`);
console.log(`Output 1: ${longestPrefix1 !== '' ? longestPrefix1 : 'No prefix'}`);

console.log('----------------------------------');

console.log(`Input 2: ${input2}`);
console.log(`Output 2: ${longestPrefix2 !== '' ? longestPrefix2 : 'No prefix'}`);