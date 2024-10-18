// Foreach

// 1-MASALA

// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function (value) {
//   console.log(value);
// });

// 2-MASALA

// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function (value) {
//   console.log(value + 5);
// });

// 3-MASALA

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.forEach(function (value) {
//   if (value % 2 == 1) {
//     console.log(value);
//   }
// });

// 4-MASALA

// let arr = [1, 2, 3, 4, 5];
// let counter = 0;

// arr.forEach(function () {
//   counter++;
// });

// console.log(counter);

// 5-MASALA

// let arr = [1, 2, 3, 4, 5];
// let res = [];
// arr.forEach(function (value) {
//   res.push(value);
// });

// console.log(res);

// map

// 1-MASALA

// let arr = [1, 2, 3, 4, 5];
// let res = arr.map(function (value) {
//   return value * 2;
// });

// console.log(res);

// 2-MASALA

// let arr = [2, 3, 4, 5];
// let res = arr.map(function (value) {
//   return value ** 2;
// });

// console.log(res);

// 3-MASALA

// let arr = ["mersedes", "bmw", "toyato", "kia"];
// let res = arr.map(function (value) {
//   return value.toUpperCase();
// });
// console.log(res);

// 4-MASALA

// let arr = [1, 2, 3, 4, 5];
// let res = arr.map(function (value) {
//   return -value;
// });

// console.log(res);

// 5-MASALA

// let arr = [1, 2, 3, 4, 5];
// let res = arr.map(function (value) {
//   return value + 3;
// });

// console.log(res);

// filter

// 1-MASALA

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = arr.filter(function (value) {
//   return value % 2 == 0;
// });

// console.log(res);

// 2-MASALA

// let arr = [1, 2, 3, -9, -7, 5];
// let res = arr.filter(function (value) {
//   return value > 0;
// });

// console.log(res);

// 3-MASALA

// let arr = ["mersedes", "bmw", "toyato", "kia"];
// let res = arr.filter(function (value) {
//   return value.length > 5;
// });

// console.log(res);

// 4-MASALA

// let arr = [29, 20, 12, 19, 15];
// let res = arr.filter(function (value) {
//   return value >= 18;
// });

// console.log(res);

// 5-MASALA

// let arr = [5, 12, 9, 19, 2, 25, 7, 16];
// let res = arr.filter(function (value) {
//   return value < 10;
// });

// console.log(res);

// find

// 1-MASALA

// let arr = [1, 12, 3, 15, 7, 20];
// let res = arr.find(function (value) {
//   return value > 10;
// });

// console.log(res);

// yoki

// let arr = [1, 12, 3, 15, 7, 20];
// let res = arr.filter(function (value) {
//   return value > 10;
// });

// console.log(res);

// 2-MASALA

// let arr = [5, 12, 3, -15, 7, -20];
// let res = arr.find(function (value) {
//   return value > 0;
// });

// console.log(res);

// yoki

// let arr = [5, 12, 3, -15, 7, -20];
// let res = arr.filter(function (value) {
//   return value > 0;
// });

// console.log(res);

// 3-MASALA

// let arr = ["Mercedes", "BMW", "Tesla", "Kia"];
// let res = arr.find(function (value) {
//   return value.length > 4;
// });

// console.log(res);

// yoki

// let arr = ["Mercedes", "BMW", "Tesla", "Kia"];
// let res = arr.filter(function (value) {
//   return value.length > 4;
// });

// console.log(res);

// 4-MASALA

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = arr.find(function (value) {
//   return value % 2 == 0;
// });

// console.log(res);

// yoki

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = arr.filter(function (value) {
//   return value % 2 == 0;
// });

// console.log(res);

// 5-MASALA

// let arr = [5, 2, -20, 4, -9, -12];
// let res = arr.find(function (value) {
//   return value >= 0;
// });

// console.log(res);

// yoki

// let arr = [5, 2,10, -20, 4, -9, -12];
// let res = arr.filter(function (value) {
//   return value >= 0;
// });

// console.log(res);

// some

// 1-MASALA

// let arr = [2, 5, 7, -8];
// let res = arr.some(function (value) {
//   return value < 0;
// });

// console.log(res ? "Mavjud" : "Mavjud emas");

// 2-MASALA

// let arr = [1, 3, 7, 4];
// let res = arr.some(function (value) {
//   return value % 2 == 0;
// });

// console.log(res);

// 3-MASALA

// let arr = ["orange", "banana", "apple"];
// let fruit = "apple";
// let res = arr.some(function (value) {
//   return value == fruit;
// });

// console.log(res ? "Mavjud" : "Mavjud emas");

// every

// 4-MASALA

// let arr = [1, 2, 3, 9];
// let res = arr.every(function (value) {
//   return value > 0;
// });

// console.log(res);

// 5-MASALA
// let arr = ["hello", "olma", "javascript"];
// let res = arr.every(function (value) {
//   return typeof value == "string";
// });

// console.log(res);

// 6-MASALA
// let arr = [1, 12, 55, 99];
// let res = arr.every(function (value) {
//   return value < 100;
// });

// console.log(res);
