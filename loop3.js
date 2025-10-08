let words = "Programming";

let vowels = "a, e, i, o, u";

let result = words.split('').filter(char => vowels.includes(char)).length;

console.log("Total vowels:", result);

