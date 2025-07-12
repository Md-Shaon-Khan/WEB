// Demo 1
const friends = ["Shaon", "Ahad", "Tuhin"];
friends[3] = "Nahid";
friends[4] = "Raunaq";
document.getElementById("demo1").innerHTML = friends;

// Demo 2
const cars = new Array("Saab", "Volvo", "BMW");
document.getElementById("demo2").innerHTML = cars + " length is " + cars.length;

// Demo 3
let carsToStrCar = cars.toString();
document.getElementById("demo3").innerHTML = carsToStrCar + " & length is " + carsToStrCar.length;

// Demo 4
const fruits = ["Mango", "Banana", "Orange", "Apple"];
let lenOfFruits = fruits.length;
let listFruit = "<ul>";
for (let i = 0; i < lenOfFruits; i++) {
  listFruit += "<li>" + fruits[i] + "</li>";
}
listFruit += "</ul>";
document.getElementById("demo4").innerHTML = listFruit;

// Demo 5
fruits.push("Lemon");
document.getElementById("demo5").innerHTML = fruits;

// Demo 6 - pop()
fruits.pop();
document.getElementById("demo6").innerHTML = fruits;

// Demo 7 - shift()
fruits.shift();
document.getElementById("demo7").innerHTML = fruits;

// Demo 8 - unshift()
fruits.unshift("Pineapple");
document.getElementById("demo8").innerHTML = fruits;

// Demo 9 - change element
fruits[1] = "Strawberry";
document.getElementById("demo9").innerHTML = fruits;

// Demo 10 - concat()
const boys = ["Rakib", "Tanvir"];
const girls = ["Mitu", "Priya"];
const all = boys.concat(girls);
document.getElementById("demo10").innerHTML = all;

// Demo 11 - splice()
const spliceTest = ["A", "B", "C", "D"];
spliceTest.splice(2, 0, "X", "Y"); // insert at index 2
document.getElementById("demo11").innerHTML = spliceTest;

// Demo 12 - slice()
const sliceTest = ["One", "Two", "Three", "Four"];
const sliced = sliceTest.slice(1, 3);
document.getElementById("demo12").innerHTML = sliced;

// Demo 13 - at()
const atArr = [10, 20, 30, 40];
document.getElementById("demo13").innerHTML = "Element at index 2: " + atArr.at(2);

// Demo 14 - join()
const joinArr = ["Shaon", "Ahad", "Tuhin"];
document.getElementById("demo14").innerHTML = joinArr.join(" | ");

// Demo 15 - delete()
const delArr = ["A", "B", "C"];
delete delArr[1]; // index 1 becomes undefined
document.getElementById("demo15").innerHTML = delArr + " (Length: " + delArr.length + ")";

// Demo 16 - copyWithin()
const copyArr = ["A", "B", "C", "D", "E"];
copyArr.copyWithin(1, 3); // copy from index 3 to index 1
document.getElementById("demo16").innerHTML = copyArr;

// Demo 17 - flat()
const nested = [1, 2, [3, 4], [5, 6]];
const flatArr = nested.flat();
document.getElementById("demo17").innerHTML = flatArr;

// Demo 18 - toSpliced() (ES2023+)
const spliceArr = ["X", "Y", "Z", "W"];
const newArr = spliceArr.toSpliced(1, 2, "A", "B");
document.getElementById("demo18").innerHTML = "Original: " + spliceArr + "<br>Modified: " + newArr;

// Demo 19 - indexOf()
const idxArr = ["Apple", "Banana", "Mango", "Banana"];
document.getElementById("demo19").innerHTML = "First Banana found at index: " + idxArr.indexOf("Banana");

// Demo 20 - lastIndexOf()
document.getElementById("demo20").innerHTML = "Last Banana found at index: " + idxArr.lastIndexOf("Banana");

// Demo 21 - includes()
document.getElementById("demo21").innerHTML = "Does include 'Mango'? " + idxArr.includes("Mango");

// Demo 22 - find()
const findArr = [4, 10, 22, 30, 5];
const found = findArr.find(x => x > 15);
document.getElementById("demo22").innerHTML = "First number > 15: " + found;

// Demo 23 - findIndex()
const findIdx = findArr.findIndex(x => x > 15);
document.getElementById("demo23").innerHTML = "Index of first number > 15: " + findIdx;

// Demo 24 - findLast() (ES2023+)
const lastFound = findArr.findLast(x => x < 10);
document.getElementById("demo24").innerHTML = "Last number < 10: " + lastFound;

// Demo 25 - findLastIndex() (ES2023+)
const lastIdx = findArr.findLastIndex(x => x < 10);
document.getElementById("demo25").innerHTML = "Last index of number < 10: " + lastIdx;

// Demo 26 - Alphabetic Sort
const alphaArr = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo26").innerHTML = alphaArr.sort();

// Demo 27 - sort()
const basicSort = ["Shaon", "Ahad", "Tuhin"];
basicSort.sort();
document.getElementById("demo27").innerHTML = basicSort;

// Demo 28 - reverse()
basicSort.reverse();
document.getElementById("demo28").innerHTML = basicSort;

// Demo 29 - toSorted() (ES2023+)
const toSort = ["Z", "Y", "A", "B"];
const sortedNew = toSort.toSorted();
document.getElementById("demo29").innerHTML = "Original: " + toSort + "<br>Sorted: " + sortedNew;

// Demo 30 - toReversed() (ES2023+)
const reversedNew = toSort.toReversed();
document.getElementById("demo30").innerHTML = "Original: " + toSort + "<br>Reversed: " + reversedNew;

// Demo 31 - Numeric Sort
const nums = [40, 100, 1, 5, 25, 10];
nums.sort((a, b) => a - b);
document.getElementById("demo31").innerHTML = nums;

// Demo 32 - Numeric Descending Sort
nums.sort((a, b) => b - a);
document.getElementById("demo32").innerHTML = nums;

// Demo 33 - Sorting Objects by Property
const students = [
  { name: "Shaon", marks: 85 },
  { name: "Ahad", marks: 92 },
  { name: "Tuhin", marks: 78 }
];
students.sort((a, b) => b.marks - a.marks);
let sortedStudents = "";
students.forEach(s => {
  sortedStudents += s.name + " : " + s.marks + "<br>";
});
document.getElementById("demo33").innerHTML = sortedStudents;

// Demo 34 - Random Sort (Shuffling)
const randArr = [1, 2, 3, 4, 5, 6];
randArr.sort(() => 0.5 - Math.random());
document.getElementById("demo34").innerHTML = randArr;

// Demo 35 - Math.min() & Math.max()
const minMaxArr = [5, 2, 100, 43];
document.getElementById("demo35").innerHTML =
  "Min: " + Math.min(...minMaxArr) + " | Max: " + Math.max(...minMaxArr);

// Demo 36 - Homemade Min and Max
function getMin(arr) {
  let min = arr[0];
  for (let val of arr) if (val < min) min = val;
  return min;
}
function getMax(arr) {
  let max = arr[0];
  for (let val of arr) if (val > max) max = val;
  return max;
}
document.getElementById("demo36").innerHTML =
  "Custom Min: " + getMin(minMaxArr) + " | Custom Max: " + getMax(minMaxArr);
