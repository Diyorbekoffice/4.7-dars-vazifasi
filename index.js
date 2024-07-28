// // 1.1-masala
// function kvadratIldiz(son) {
//     return Math.sqrt(son);
// }
// let res = kvadratIldiz(9);
// console.log(res);

// // 1.2-masala
// function ayirma(son1, son2) {
//     return son1 - son2;
// }
// let res = ayirma(9, 5);
// console.log(res);

// // 1.3-masala
// function takrorla(str, n) {
//     return str.repeat(n);
// }
// let res = takrorla('Diyorbek ', 5);
// console.log(res);

// // 1.4-masala
// function kub(son) {
//     return son ** 3;
// }
// let res = kub(9);
// console.log(res);

// // 1.5-masala
// function bolinmaButunQismi(son1, son2) {
//     return Math.floor(son1 / son2);
// }
// let res = bolinmaButunQismi(9, 5);
// console.log(res);

// // 1.6-masala
// function asrAniqla(yil) {
//     return Math.ceil(yil / 100);
// }
// let res = asrAniqla(120000);
// console.log(res);

// // 1.7-masala
// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }
// let res = factorial(5);
// console.log(res);

// // 1.8-masala
// function unliSoniniHisobla(str) {
//     const unli = 'aeiouAEIOU';
//     let count = 0;
//     for (let char of str) {
//         if (unli.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }
// let res = unliSoniniHisobla('Diyorbek');
// console.log(res);

// // 1.9-masala
// function oxiridanKes(str, n) {
//     return str.slice(-n);
// }
// let res = oxiridanKes('Diyorbek', 2);
// console.log(res);

// // 1.10-masala
// function faqatRaqamlar(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] < '0' || str[i] > '9') {
//             return false;
//         }
//     }
//     return str.length > 0;
// }
// console.log(faqatRaqamlar("12a46")); //bunda strda faqat raqam busa true aks holda false chiqadi masalani shunday tushundim
//                                      // masala shartiga tushunish qiyin ekan

// // 1.11-masala
// function daraja(son, d) {
//     return son ** d;
// }
// console.log(daraja(5, 3));

// // 1.12-masala
// function boshliklarniOlibTashla(str) {
//     let bolaklar = str.split(' ');
//     let natija = '';
//     for (let i = 0; i < bolaklar.length; i++) {
//         natija += bolaklar[i];
//     }
//     return natija;
// }

// console.log(boshliklarniOlibTashla('D iyor bek sal om'));

// // 1.13-masala
// function birlashtir(str1, str2) {
//     return str1 + str2;
// }
// console.log(birlashtir('Diyorbek', 'salom'));

// // 14-masala
// function tasodifiySon(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(tasodifiySon(2, 9));

// // 1.15-masala
// function boshHarfKatta(str) {
//     let sozlar = str.split(' ');
//     for (let i = 0; i < sozlar.length; i++) {
//         if (sozlar[i].length > 0) {
//             sozlar[i] = sozlar[i][0].toUpperCase() + sozlar[i].slice(1);
//         }
//     }
//     return sozlar.join(' ');
// }
// console.log(boshHarfKatta('diyorbek salom'));

// // 2.1-masala
// function yigindi(massiv) {
//     let sum = 0;
//     for (let i = 0; i < massiv.length; i++) {
//         sum += massiv[i];
//     }
//     return sum;
// }
// console.log(yigindi([1, 2, 3, 4, 5])); 

// 2.2-masala
// function engKatta(massiv) {
//     let max = massiv[0];
//     for (let i = 1; i < massiv.length; i++) {
//         if (massiv[i] > max) {
//             max = massiv[i];
//         }
//     }
//     return max;
// }
// console.log(engKatta([1, 2, 3, 4, 5]));

// // 2.3-masala
// function teskari(massiv) {
//     let teskariMassiv = [];
//     for (let i = massiv.length - 1; i >= 0; i--) {
//         teskariMassiv.push(massiv[i]);
//     }
//     return teskariMassiv;
// }
// console.log(teskari([1, 2, 3, 4, 5])); 

// // 2.4-masala
// function musbatlarniFiltrlash(massiv) {
//     let musbatMassiv = [];
//     for (let i = 0; i < massiv.length; i++) {
//         if (massiv[i] > 0) {
//             musbatMassiv.push(massiv[i]);
//         }
//     }
//     return musbatMassiv;
// }
// console.log(musbatlarniFiltrlash([-1, 2, -3, 4, -5]));

// // 2.5-masala
// function kvadratgaOshirish(massiv) {
//     let kvadratMassiv = [];
//     for (let i = 0; i < massiv.length; i++) {
//         kvadratMassiv.push(massiv[i] ** 2);
//     }
//     return kvadratMassiv;
// }
// console.log(kvadratgaOshirish([1, 2, 3, 4, 5]));

// // 2.6-masala
// function takroriyOlibTashlash(massiv) {
//     let uniqueMassiv = [];
//     for (let i = 0; i < massiv.length; i++) {
//         if (!uniqueMassiv.includes(massiv[i])) {
//             uniqueMassiv.push(massiv[i]);
//         }
//     }
//     return uniqueMassiv;
// }
// console.log(takroriyOlibTashlash([1, 2, 2, 3, 4, 4, 5]));

// // 2.7-masala
// function birlashtirish(massiv1, massiv2) {
//     let birlashganMassiv = [];
//     for (let i = 0; i < massiv1.length; i++) {
//         birlashganMassiv.push(massiv1[i]);
//     }
//     for (let i = 0; i < massiv2.length; i++) {
//         birlashganMassiv.push(massiv2[i]);
//     }
//     return birlashganMassiv;
// }
// console.log(birlashtirish([1, 2, 3], [4, 5, 6]));

// // 2.8-masala
// function toqSonlarSoni(massiv) {
//     let count = 0;
//     for (let i = 0; i < massiv.length; i++) {
//         if (massiv[i] % 2 !== 0) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(toqSonlarSoni([1, 2, 3, 4, 5])); 

// // 2.9-masala
// function elementlargaQoshish(massiv, son) {
//     let yangiMassiv = [];
//     for (let i = 0; i < massiv.length; i++) {
//         yangiMassiv.push(massiv[i] + son);
//     }
//     return yangiMassiv;
// }
// console.log(elementlargaQoshish([1, 2, 3, 4, 5], 3)); 

// // 2.10-masala
// function engKichik(massiv) {
//     let min = massiv[0];
//     for (let i = 1; i < massiv.length; i++) {
//         if (massiv[i] < min) {
//             min = massiv[i];
//         }
//     }
//     return min;
// }
// console.log(engKichik([1, 2, 3, 4, 5]));








