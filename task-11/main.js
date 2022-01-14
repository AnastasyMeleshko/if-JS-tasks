/*
Given a matrix of m x n elements (m rows, n columns),
return all elements of the matrix in spiral order.
For example, given the following matrix:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
You should return [1,2,3,6,9,8,7,4,5].
*/

let givenArray1 = [
    [ 1, 2],
    [ 4, 5]
];

let givenArray2 = [
     [ 1, 2, 3 ],
     [ 4, 5, 6 ],
     [ 7, 8, 9 ]
];

let givenArray3 = [
    [ 1, 2, 3, 5],
    [ 4, 5, 6, 5],
    [ 7, 8, 9, 5],
    [ 7, 8, 9, 5]
];

let givenArray4 = [
    [ 1, 2, 3, 5, 7],
    [ 4, 5, 6, 5, 9],
    [ 7, 8, 9, 5, 7],
    [ 7, 8, 9, 5, 7],
    [ 7, 8, 9, 5, 7]
];

let givenArray5 = [
    [ 1, 2, 3, 5, 7, 7],
    [ 4, 5, 6, 5, 9, 9],
    [ 7, 8, 9, 5, 7, 9],
    [ 7, 8, 9, 5, 7, 7],
    [ 7, 8, 9, 5, 7, 6],
    [ 7, 8, 9, 5, 7, 6]
];


function getSpiral(arr) {
    let resultArr = [];
    let firstRow = [...arr[0]];
    let lastRow = arr[arr.length-1].reverse();

    if (arr.length === 2) {
        resultArr.push(...firstRow);
        resultArr.push(...lastRow);
        return resultArr;
    }

    resultArr.push(...firstRow);

    let lastCol = [];
    let firstCol = [];

    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr[i].length; j++) {
            if ((j === arr[0].length-1) && (j !== 0) && (i !== 0) && ((i !== arr.length-1))) {
                lastCol.push(arr[i][j]);
            }
            if ((j === 0) && (i !== 0) && ((i !== arr[0].length-1))) {
                firstCol.push(arr[i][j]);
            }
        }
    }
        resultArr.push(...lastCol);
        resultArr.push(...lastRow);
        resultArr.push(...firstCol.reverse());

    if (arr.length === 3) {
        resultArr.push(arr[1][1]);
        return resultArr;
    }

    if (arr.length > 3)  {
        arr = arr.slice(1,-1);
        for (let i = 0; i<arr.length; i++) {
            arr[i] = arr[i].slice(1,-1);
        }
        let arr2 = [...arr];
        let resultArr2 = getSpiral(arr2);
        resultArr.push(...resultArr2);
        return  resultArr;
    }

}


console.log(getSpiral(givenArray1));
console.log(getSpiral(givenArray2));
console.log(getSpiral(givenArray3));
console.log(getSpiral(givenArray4));
console.log(getSpiral(givenArray5));
