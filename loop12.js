let sentence = "I love programming";

let words = sentence.split(" ");
let longest = words.sort((a, b) => b.length - a.length)[0];

console.log(longest);
