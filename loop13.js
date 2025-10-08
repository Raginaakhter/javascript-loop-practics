let text = "abc123xyz45";

let digits = text.match(/[0-9]/g);

let count = digits ? digits.length : 0;

console.log("Digits:", count);
