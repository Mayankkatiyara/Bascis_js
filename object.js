let Person = {
  name: "Mayank",
  age: "21",
  city: "Nashik",
};

console.log("Initial Object:", Person);

delete Person.city;
console.log("After deleting city:", Person);

Person.state = "Punjab";
console.log("Updating state:", Person);

Person.age = 19;
console.log("Updated Age:", Person.age);
console.log("Current Object:", Person);
