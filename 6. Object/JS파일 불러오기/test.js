let result = "";
for (let i = 0; i < 15; i++) {
  for (let k = 15-1; k > i; k--) {
    result += " ";
  }
  for (let j = 0; j < 2 * i + 1; j++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);