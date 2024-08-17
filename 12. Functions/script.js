function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function division(x, y) {
  if (y !== 0) {
    return x / y;
  } else {
    console.log(`Math Error`);
  }
}

function isEven(number) {
  if (number % 2 == 0) {
    console.log(`This is an Even number.`);
  } else {
    console.log(`It's an Odd number.`);
  }
}

function lcm(x, y) {
  const maxNum = Math.max(x, y);
  const minNum = Math.min(x, y);

  for (let i = maxNum; ; i += maxNum) {
    if (i % minNum === 0) {
      console.log(`LCM is of ${x} and ${y} is ${i}`);
      break;
    }
  }
}

function gcd(x, y) {
  let gcd;
  for (let i = 1; i <= x && i <= y; ++i) {
    if (x % i == 0 && y % i == 0) {
      gcd = i;
    }
  }
  console.log(`GCD of ${x} and ${y} is ${gcd}`);
}

function menu(number) {
  let choice = prompt(
    `Choose the operation:
    1: Add
    2: Subtract
    3: Multiply
    4: Divide
    5: Even or Odd
    6: Find LCM
    7: Find GCD
    Enter your choice.`,
  );
  return Number(choice);
}

let choice = menu();

if ((choice >= 1 && choice <= 4) || choice == 6 || choice == 7) {
  x = Number(prompt("Enter your first number (x): "));
  y = Number(prompt("Enter your second number (y): "));
}

if (choice == 1) {
  console.log(`Addition of ${x} and ${y}:`, add(x, y));
} else if (choice == 2) {
  console.log(`Subtraction of ${y} from ${x}:`, subtract(x, y));
} else if (choice == 3) {
  console.log(`Multiplication of ${x} and ${y}:`, multiply(x, y));
} else if (choice == 4) {
  const divisionResult = division(x, y);
  if (divisionResult !== undefined) {
    console.log(`Division of ${x} by ${y}:`, divisionResult);
  }
} else if (choice == 5) {
  let number = Number(
    prompt("Enter the number to check if it's even or odd: "),
  );
  isEven(number);
} else if (choice == 6) {
  lcm(x, y);
} else if (choice == 7) {
  const gcdResult = gcd(x, y);
  console.log(`GCD of ${x} and ${y}:`, gcdResult);
} else {
  console.log("Invalid choice. Please select a number between 1 and 7.");
}
