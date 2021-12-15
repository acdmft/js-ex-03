const sentence = "Hello Konexio !";
let reversedSentence = "";

for (var i = 0; i <= sentence.length-1; i++) {
    reversedSentence = sentence[i] + reversedSentence ;
}
console.log(reversedSentence);
