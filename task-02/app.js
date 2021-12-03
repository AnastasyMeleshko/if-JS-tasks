//Является ли строка палиндромом?
// 1. шалаш - является
// 2. паста - не является
// 3. мадам - является

//1 способ
console.log("Первый способ")
function palindrome(str) {
    str = str.toUpperCase().replace(/\s/g, '');
    const len = Math.floor(str.length / 2);
    for (let i = 0; i < len; i++)
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    return true;
}

console.log("шалаш " + palindrome('шалаш'));
console.log("паста " + palindrome('паста'));
console.log("мадам " + palindrome('мадам'));
console.log("Анна " + palindrome('Анна'));
console.log("А роза упала на лапу Азора " + palindrome('А роза упала на лапу Азора'));

//2 способ
console.log("Второй способ")
const userString = prompt("Введите строку для проверки является ли она палиндромом").toLowerCase();
const reverseString = userString.split("").reverse().join("");
if (userString === reverseString) {
    console.log("Является. Вот смотри:", userString, "и наоборот", reverseString);
} else console.log("Не является. Вот смотри:", userString, "и", reverseString)


//3 способ
console.log("Третий способ")
function palindrome1(str) {
    str = str.toUpperCase().replace(/\s/g, '');
    return str === str.split('').reverse().join('');
}

console.log("шалаш " + palindrome1('шалаш'));
console.log("паста " + palindrome1('паста'));
console.log("мадам " + palindrome1('мадам'));
console.log("Анна " + palindrome1('Анна'));
console.log("А роза упала на лапу Азора " + palindrome1('А роза упала на лапу Азора'));

//4 способ
console.log("Четвертый способ")

function palindrome4(str) {
    str = str.toUpperCase().replace(/\s/g, '');
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];
    if (str[0] === str.slice(-1)) return palindrome4(str.slice(1, -1))
    return false;
}
console.log("шалаш " + palindrome4('шалаш'));
console.log("паста " + palindrome4('паста'));
console.log("мадам " + palindrome4('мадам'));
console.log("Анна " + palindrome4('Анна'));
console.log("А роза упала на лапу Азора " + palindrome4('А роза упала на лапу Азора'));