/*
Find the kth largest element in an unsorted array.
Note that it is the kth largest element in the sorted order,
not the kth distinct element.
For example, given [3,2,1,5,6,4] and k = 2, return 5.
*/

let givenArray = [441777,1,2,30,4,422,3];
let k = 2;

function largestByIndex(givenArray, index) {
    console.log(`Дан массив: ${givenArray}`);
    let sortedArray = givenArray.sort();
    if (index < givenArray.length && index !== 0) {
        return `${index}-й с конца наибольший элемент:` + sortedArray[sortedArray.length - index];
    }
   else {
       return `Введите корректный индекс`;
    }
}

console.log(largestByIndex(givenArray, 4));
