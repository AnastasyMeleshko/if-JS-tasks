// write a bubble sort algorithm in JavaScript
// https://www.geeksforgeeks.org/bubble-sort/
//https://medium.com/@alivander/%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-%D0%BF%D1%83%D0%B7%D1%8B%D1%80%D1%8C%D0%BA%D0%BE%D0%BC-javascript-54462b2989a6

//Алгоритм для сортировки по возрастанию

function bubbleSort(arr) {
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                let swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}

arr1 = [1,7,33,555,2,8,1,8,32];
arr2 = ["d", "a", "u", "r"];
console.log(bubbleSort(arr1));
console.log(bubbleSort(arr2));


//Оптимизация алгоритма путем добавления флага,
// отслеживающего перестановку элементов — если за очередной проход по массиву
// не произошло ни одной, значит массив уже отсортирован

function bubbleSort2(arr) {
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        let wasSwap = false;
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                let swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    return arr;
}

console.log(bubbleSort2(arr1));
console.log(bubbleSort2(arr2));

//алгоритм на новом синтаксисе ES6 с избавлением от дополнительной переменной:

const bubbleSort3 = arr => {
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        let wasSwap = false;
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    return arr;
};

console.log(bubbleSort3(arr1));
console.log(bubbleSort3(arr2));
