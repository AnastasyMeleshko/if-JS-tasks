// write a bubble sort algorithm in JavaScript
// https://www.geeksforgeeks.org/bubble-sort/

function BubbleSort(value) {
    let length = value.length;
    for (let i = 0; i < length-1; i++) {
        for (let j = 0; j < length-1-i; j++) {
            if (value[j+1] < value[j]) {
                let some = value[j+1];
                value[j+1] = value[j];
                value[j] = some;
            }
        }
    }
    return value;
}

arr1 = [1,7,33,555,2,8,1,8,32];
arr2 = ["d", "a", "u", "r"];
console.log(BubbleSort(arr1));
console.log(BubbleSort(arr2));


