/*
rotate array
Rotate an array of n elements to the right by k steps.
For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7]
is rotated to [5,6,7,1,2,3,4]. How many different ways do you know
to solve this problem?
 */

//1 способ

let n = 7;
let k = 3;
let initialArray = [];
let arrRotate = [];
for (let elem=1; elem<=n; elem++) {
    initialArray.push(elem);
}
console.log("Первоначальный массив: " + initialArray);
arrRotate = initialArray.splice(initialArray.length - k, k);
initialArray.unshift(...arrRotate);
console.log("Полученный массив: " + initialArray);

//2 способ

let n2 = 7;
let k2 = 3;
let initialArray2 = [];
let arrResult = [];
for (let elem=1; elem<=n; elem++) {
    initialArray2.push(elem);
}
console.log("Первоначальный массив: " + initialArray2);
for (let i=0; i<initialArray2.length - k; i++) {
    arrResult.push(initialArray2[i]);
}
for (let j=initialArray.length; j>=initialArray.length-k; j--) {
    if (initialArray2[j]) {
        arrResult.unshift(initialArray2[j]);
    }
}
console.log("Полученный массив: " + arrResult);