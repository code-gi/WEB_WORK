function convertString(string) {
  return string.split('').map(char => {
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  }).join('')
}

console.log(convertString('hELLo'));