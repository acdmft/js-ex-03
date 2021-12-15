let myArray = [];

for (i=0; i <= 19; i++) {
    let randomNum = Math.floor(Math.random() * 100);
    myArray.push(randomNum);
}
console.log(myArray);

let theBiggestEntry = 0;
for (i=0; i <= myArray.length; i++) {
    if (myArray[i] >= theBiggestEntry) {
        theBiggestEntry = myArray[i];
    }
}
console.log(theBiggestEntry);