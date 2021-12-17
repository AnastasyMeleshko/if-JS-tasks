// Найти пересечение массивов

const arrayFirst = [1,45,333,"rrr","tr"];
const arraySecond = [1,6,34,333,"fgg","tr"];
const resultArray = [];
for (let i = 0; i < arrayFirst.length; i++) {
    if (arraySecond.includes(arrayFirst[i])) {
        resultArray.push(arrayFirst[i]);
    }
}
if (resultArray.length !== 0) {
    console.log(`Пересечение ${arrayFirst} и ${arraySecond}: ${resultArray}`);
} else {
    console.log("Пересечения массивов нет");
}
