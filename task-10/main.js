/*
Find the kth largest element in an unsorted array.
Note that it is the kth largest element in the sorted order,
not the kth distinct element.
For example, given [3,2,1,5,6,4] and k = 2, return 5.
*/

let givenArray = [441777,1,2,89,4,422,3];
let k = 2;

function largestByIndex(givenArray, index) {
    if (index > givenArray.length || index <= 0) {
        return `Введите корректный индекс`;
    }
    const sortedArray = givenArray.sort((a, b) => a - b);
    return sortedArray.at(-index);
}

console.log(largestByIndex(givenArray, k));

