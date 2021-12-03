//вывести матрицу в консоль с отступами и переходами на новую строку(https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%82%D1%80%D0%B8%D1%86%D0%B0_(%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0))
// 1 2 3
// 4 5 6
// 7 8 9
const initialMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log("Первый способ")
for (let i = 0; i < initialMatrix.length; i++) {
    const matrixLine = initialMatrix[i].join(" ");
    console.log(matrixLine)
}

console.log("Второй способ")
let arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = new Array(3);
}
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 0) {
            arr[i][j] = j + 1;
        } else if ((i === 1)) {
            arr[i][j] = j + 4;
        } else {
            arr[i][j] = j + 7;
        }
    }
}

for (let i = 0; i < 3; i++) {
    console.log(arr[i].join(" "))
}



