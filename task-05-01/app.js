/*
Вывести в ряд N-ое количество числел Фибоначи
https://ru.wikipedia.org/wiki/%D0%A7%D0%B8%D1%81%D0%BB%D0%B0_%D0%A4%D0%B8%D0%B1%D0%BE%D0%BD%D0%B0%D1%87%D1%87%D0%B8
fibonacci(4) -> 0, 1, 1, 2
*/

let initialArray = [];
function fibonacci(n) {
    for (let i = 0; i < n; i++) {
        if (i >= 2) {
            initialArray[i] = initialArray[i - 2] + initialArray[i - 1];
        } else {
            initialArray[i] = i;
        }
    }
    console.log(initialArray.join(", "));
}
fibonacci(6);