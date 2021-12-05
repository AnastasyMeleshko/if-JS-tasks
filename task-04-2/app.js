// FizzBuzz
// Требуется написать функцию, выводящую в консоль числа от 1 до n,
// где n — это целое число, которая функция принимает в качестве параметра,
// с такими условиями:
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
// Ответ: Fizzbuzz(5)
// // 1
// // 2
// // fizz
// // 4
// // buzz

// //1 способ (if - else)
//
// const fizzbuzz = (n) => {
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("fizzbuzz")
//         } else if (i % 5 === 0) {
//             console.log("buzz")
//         } else if (i % 3 === 0) {
//             console.log("fizz")
//         } else {
//             console.log(i)
//         }
//     }
// }
//
// fizzbuzz(15);

//2 способ

// const fizzbuzz = (num) => {
//     let str;
//     for (let i = 1; i <= num; i++) {
//         str = "";
//         if (i % 3 === 0) {
//             str = "fizz";
//         }
//         if (i % 5 === 0) {
//             str += "buzz";
//         }
//         console.log(str || i);
//     }
// }
//
// fizzbuzz(15);

//3 способ

// let n = 15;
// for (let i = 1; i <= n; i++) {
//     let str = (i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz');
//     console.log(str == '' ? i : str);
// }

// 4 способ
// let n = 15;
// for (let i = 1; i <= n; i++) {
//     let str = '';
//     if (i % 3 === 0) {
//         str += 'Fizz';
//     }
//     if (i % 5 === 0) {
//         str += 'Buzz';
//     }
//
//     console.log(str ? str : i);
// }

// 5 способ

const fizzbuzz = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(findMatch(i));
    }
};

function findMatch(index) {
    if (index % 15 === 0) {
        return "fizzbuzz";
    } else if (index % 3 === 0) {
        return "fizz";
    } else if (index % 5 === 0) {
        return "buzz";
    }
    return index;
}

fizzbuzz(30);
