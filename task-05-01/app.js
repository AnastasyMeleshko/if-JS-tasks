/*
Вывести в ряд N-ое количество числел Фибоначи
https://ru.wikipedia.org/wiki/%D0%A7%D0%B8%D1%81%D0%BB%D0%B0_%D0%A4%D0%B8%D0%B1%D0%BE%D0%BD%D0%B0%D1%87%D1%87%D0%B8
fibonacci(4) -> 0, 1, 1, 2
*/

// 1 способ

let initialArray = [];
function fibonacci(n) {
    if (n !== 0) {
        for (let i = 0; i < n; i++) {
            if (i === 0 || i === 1) {
                initialArray[i] = i;
            } else {
                initialArray[i] = initialArray[i - 2] + initialArray[i - 1];
            }
        }
        console.log(initialArray.join(", "));
    } else {
        console.log("Последовательность чисел должна быть больше 0");
    }

}
fibonacci(0);
fibonacci(1);
fibonacci(2);
fibonacci(9);

// 2 способ

function fibo(n) {
    if (n === 0) {
        return "Последовательность чисел должна быть больше 0";
    }
    if(n === 1) {
        return [0];
    }
    const result = [0,1];
    for(let i = 2; i < n; i++) {
        result[i] = result[i-2] + result[i-1];
    }
    return result;
}
console.log(fibo(0))
console.log(fibo(1))
console.log(fibo(2))
console.log(fibo(9))