/*
rotate array
Rotate an array of n elements to the right by k steps.
For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7]
is rotated to [5,6,7,1,2,3,4]. How many different ways do you know
to solve this problem?
 */

//1 способ

let n = 7;
let k = 23;
let initialArray = [];
let arrRotate = [];
for (let i=1; i<=n; i++) {
    initialArray.push(i);
}
console.log("Первоначальный массив: " + initialArray);
arrRotate = initialArray.splice(initialArray.length - k, k);
initialArray.unshift(...arrRotate);
console.log("Полученный массив: " + initialArray);

//2 способ

let n2 = 7;
let k2 = 23;
let initialArr = [];
let arrResult = [];
for (let i=1; i<=n2; i++) {
    initialArr.push(i);
}
console.log("Первоначальный массив: " + initialArr);
for (let i=0; i<initialArr.length - k2; i++) {
    arrResult.push(initialArr[i]);
}
for (let j=initialArr.length; j>=initialArr.length-k2; j--) {
    if (initialArr[j]) {
        arrResult.unshift(initialArr[j]);
    }
}
console.log("Полученный массив: " + arrResult);