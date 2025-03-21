function greet(name, call) {
  console.log("Hello, " + name);
  call();
}

function wish() {
  console.log("Good Morning!");
}

greet("Mayank", wish);
