// Solution 1 Brute-force way
for (let i = 1; i < 100; i++) {
  let text = "";

  if (i % 3 == 0) {
    text = "fizz";
    if (i % 5 == 0) {
      text = "fizzbuzz";
    }
  } else if (i % 5 == 0) {
    text = text + "buzz";
  } else {
    text = i;
  }

  console.log(text);
}

// Solution 2
for (let i = 1; i < 100; i++) {
  if (i % 15 == 0) {
    console.log("fizzbuzz");
  } else if (i % 3 == 0) {
    console.log("fizz");
  } else if (i % 5 == 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}

// Solution 3 => Shorter version
for (let i = 1; i < 100; i++) {
  console.log((i % 3 ? "" : "fizz") + (i % 5 ? "" : "buzz") || i);
}

// Solution 4

let i = 1;

while (i <= 100) {
  let result = !(i % 3)
    ? !(i % 5) ? "fizzbuzz" : "fizz"
    : !(i % 5) ? "buzz" : i;
  console.log(result);
  i++;
}
