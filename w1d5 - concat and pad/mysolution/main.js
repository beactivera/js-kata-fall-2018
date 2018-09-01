// window.addEventListener("load", concatNPad);

const str;
const num;

// function concatNPad(str, num) {
  let i = str.indexOf("#", 0); // position of the #
  console.log(i);
  let newStr;
  let numNewStr;

  if (i === 0) {
    newStr = str.slice(i + 1, str.length);
    console.log(newStr);

    if (num < 10) {
      numNewStr = "0" + num + newStr;
    } else {
      numNewStr = num + newStr;
    }
  } else if (i > 1 && i < str.length - 1) {
    const part1 = str.slice(0, i - 1);
    const part2 = str.slice(i + 1, str.length - 1);
    console.log(part1);
    console.log(part2);
    if (num < 10) {
      numNewStr = part1 + "0" + num + part2;
    } else {
      numNewStr = part1 + num + part2;
    }
  } else {
    newStr = str.slice(0, i);
    console.log(newStr);

    if (num < 10) {
      numNewStr = newStr + "0" + num;
    } else {
      numNewStr = newStr + num;
    }
  }
// }
console.log(numNewStr);
