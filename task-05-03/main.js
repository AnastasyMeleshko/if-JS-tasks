// 8. Замена элементов массива:
// - создайте массив с десятью случайными элементами от 0 до 100;
// - напишите функцию, которая будет заменять все 0 на строку 'zero';
// - выведите полученный массив в консоль
// (пример: `[12, 53, '2zero', 18, 22, '1zerozero', 43, 57, '5zero', 1]`).

//1 способ (type of all items of array is string)

let initialArray = [];
let initialString = "";
const lowLimite = 0;
const highLimite = 100;
for (let i=0; i<10; i++) {
    initialArray.push(Math.floor(Math.random() * (highLimite + 1) + Math.ceil(lowLimite)));
}
console.log("Исходный массив: ");
console.log(initialArray);
initialString = initialArray.join(" ");
let replace = /0/gi;
let newString= initialString.replace(replace, 'zero');
console.log("Полученный массив: ");
console.log(newString.split(" "));
//
// // 2 способ (type for all items is number, but for items with 0 - string)
//
let newMas = [];
const lowLimit = 0;
const highLimit = 100;
for(let i = 0; i < 10; i++){
    newMas.push(Math.floor(Math.random() * (highLimit + 1) + Math.ceil(lowLimit)));
}
console.log("Массив из 10-и случайных чисел от 0 до 100: ");
console.log(newMas);
function funZero(newArray){
    let zeroMas = [];
    for(let elementArray of newArray){
        if(elementArray.toString().includes("0")){
            elementArray = elementArray.toString();
            let reg = 0;
            elementArray = elementArray.replaceAll(reg, "zero");
        }
        zeroMas.push(elementArray);
    }
    return zeroMas;
}
console.log("Замена нулей на 'zero' при помощи функции: ");
console.log(funZero(newMas));

// 3 способ

let arr = [];
let min=0;
let max =100;
for (let i = 0; i < 10; i++) {
    arr.push(Math.round(Math.random() * (max-min)));
}
console.log("Исходный массив: ")
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        arr[i] = "zero";
    }
    if (arr[i] % 100 === 0) {
        arr[i] = arr[i]/100+'zerozero';
    }
    if (arr[i] % 10 === 0 || arr[i] === 0) {
        arr[i] = arr[i]/10 +'zero';
    }
}
console.log("Полученный массив: ")
console.log(arr);