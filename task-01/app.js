// Дан массив целых чисел, например [1,4,7,8,12,3,9]
// Найти максимальное число в массиве, минимальное число в массиве и среднее арифмитическое всех чисел

//1 способ
const numbers = [1, 4, 7, 8, 12, 3, 9]
console.log("Первый способ")
console.log("Дан массив: " + numbers)

function average(nums) {
    return nums.reduce((a, b) => (a + b)) / nums.length;
}
console.log("Среднее арифметическое: " + average(numbers));

// Наибольшее
function max (arr){
    let max = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log("Наибольшее: " + max(numbers))

// Наименьшее
function min (arr){
    let min = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
console.log("Наименьшее: " + min(numbers))


//2 способ

console.log("Второй способ")
console.log("Дан массив: " + numbers)
let sum = 0
numbers.sort(function (a, b) {
    return a - b;
})
console.log("Минимальное число в массиве: " + numbers[0])
console.log("Максимальное число в массиве: " + numbers[(numbers.length - 1)])
for (let i = 0; i < numbers.length; i++) {
    sum = (sum + numbers[i])
}
average = sum / numbers.length
console.log("Среднее арифметическое: " + average)

//3 способ

console.log("Третий способ")
console.log("Дан массив: " + numbers)

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray)
}

function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray)
}

let sum2 = numbers.reduce((a, b) => a + b, 0)
let result = sum2 / numbers.length
console.log("Максимально число в массиве: " + getMaxOfArray(numbers))
console.log("Минимальное число в массиве: " + getMinOfArray(numbers))
console.log("Среднее арифметическое: " + result)