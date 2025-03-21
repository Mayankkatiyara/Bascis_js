//map function
const numbers = [5, 6, 7, 8];
const sqr = numbers.map((num) => num * num);
console.log("map function : " + sqr);

//filter
const orignalNum = [1, 2, 3, 4, 5, 6];
const evenNum = orignalNum.filter((num) => num % 2 == 0);
console.log("filter function : " + evenNum);

//slice
const Names = ["Prem", "Nayan", "kittu", "Ayush", "Aril"];
const topNames = Names.slice(0, 3);
console.log("slice function : " + topNames);

//splice
Names.splice(2, 2, "Nikhil", "Kani");
console.log("splice function : " + Names);
