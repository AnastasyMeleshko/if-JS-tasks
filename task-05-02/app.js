/*
сделать значения в массиве уникальными
uniqueFunc([1,5,2,3,4,3,2,4,1,5,6]) -> [1,5,2,3,4,6]
*/

// 1 способ

initialArray = [1, 5, 2, 3, 4, 3, 2, 4, 1, 5, 6];
let arrayLength = initialArray.length;
console.log("Исходный массив: " + initialArray);
resultArray = [];

function uniqueFunc() {

    for (let i = 0; i < arrayLength; i++) {
        let shifted = initialArray.shift();
        if (initialArray.includes(shifted)) {
            initialArray.splice(initialArray.indexOf(shifted), 1);
        }
        if (shifted || shifted === 0) {
            resultArray.push(shifted);
        }
    }
    console.log("Полученный массив уникальных значений: " + resultArray);
}

uniqueFunc();

// 2 способ

let arr = [1, 5, 2, 3, 4, 3, 2, 4, 1, 5, 6];
let resultArr = [];
for (let number of arr) {
    if(!resultArr.includes(number)) {
        resultArr.push(number)
    }
}
console.log(resultArr);