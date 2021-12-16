/*1. Дана строка 'ahb acb aeb aeeb adcb axeb'.
Напишите регулярку, которая найдет каждую из этих строк
Дано: 'ahb acb aeb aeeb adcb axeb'
Ответ: 'ahb' 'acb' 'aeb' 'aeeb' 'adcb' 'axeb'
*/

//1 способ
let str1 = "ahb acb aeb aeeb adcb axeb";
let answer1 = /a.?.b/g;
console.log(str1.match(answer1));


//2 способ
let str11 = "ahb acb aeb aeeb adcb axeb";
let answer11 = /a\S*b/g;
console.log(str11.match(answer11));


/*2. Дана строка 'aa aba abba abbba abca abea'.
Напишите регулярку, которая найдет строки aa, aba по шаблону:
буква 'a', буква 'b' один раз или ниодного, буква 'a'.
То есть aba, aa - подходит
abba, abbbba - не подходит
*/

let str2 = "aa aba abba abbba abca abea";
let answer2 = /ab?a/g;
console.log(str2.match(answer2));

/*3. Дана строка '23 2+3 2++3 2+++3 345 567'.
Напишите регулярку, которая найдет строки 2+3, 2++3, 2+++3,
не захватив остальные (+ может быть любое количество).
*/

let str3 = "23 2+3 2++3 2+++3 345 567";
let answer3 = /2.\+*3/g;
console.log(str3.match(answer3));

/*4. Дана строка 'aba accca azzza wwwwa'.
Напишите регулярку, которая найдет все строки по краям которых
стоят буквы 'a', и заменит каждую из них на '!'. Между буквами
a может быть любой символ (кроме a).
*/

//1 способ
let str4 = "aba accca azzza wwwwa";
let srt4Search = /\ba(?!a).?.?.a\b/g;
let answer4 = str4.replace(srt4Search, "!");
console.log(answer4);

//2 способ
let str44 = "aba accca azzza wwwwa";
let srt4Search4 = /\ba(?!a)\w+a\b/g;
let answer44 = str44.replace(srt4Search4, "!");
console.log(answer44);
