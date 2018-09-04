// window.addEventListener("load", concatNPad);

let str = "image#";
let num = "3";

function concatNPad(str, num) {
  let i = str.indexOf("#", 0); // position of the #
  console.log(i);
  let newStr;
  let numNewStr;
  // checking where # is in the string - beginning, middle , last one
  // beginning
  if (i === 0) {
    newStr = str.slice(i + 1, str.length);
    console.log(newStr);
    // check if the number need extra 0
    if (num < 10) {
      numNewStr = "0" + num + newStr;
    } else {
      numNewStr = num + newStr;
    }
    // in the middle
  } else if (i > 1 && i < str.length - 1) {
    const part1 = str.slice(0, i);
    const part2 = str.slice(i + 1, str.length);
    console.log(part1);
    console.log(part2);
    if (num < 10) {
      numNewStr = part1 + "0" + num + part2;
    } else {
      numNewStr = part1 + num + part2;
    }
    // last one
  } else {
    newStr = str.slice(0, i);
    console.log(newStr);

    if (num < 10) {
      numNewStr = newStr + "0" + num;
    } else {
      numNewStr = newStr + num;
    }
  }

  return numNewStr;
}
// console.log(numNewStr);

// approach with the function
//  window.addEventListener("load", concatNPad);

// const str;
// const num;
// let newStr;
// let i;
// let numNewStr;

//   function concatNPad(str, num) {
//   i = str.indexOf("#", 0); // position of the #
//   console.log(i);

//   createNewStr(str);

//   return concatNPad();
//     }

// function createNewStr(str){
//   if (i === 0) {
//     newStr = str.slice(i + 1, str.length);
//     console.log(newStr);

//     if (num < 10) {
//       numNewStr = "0" + num + newStr;
//     } else {
//       numNewStr = num + newStr;
//     }
//   } else if (i > 1 && i < str.length - 1) {
//     const part1 = str.slice(0, i - 1);
//     const part2 = str.slice(i + 1, str.length - 1);
//     console.log(part1);
//     console.log(part2);
//     if (num < 10) {
//       numNewStr = part1 + "0" + num + part2;
//     } else {
//       numNewStr = part1 + num + part2;
//     }
//   } else {
//     newStr = str.slice(0, i);
//     console.log(newStr);

//     if (num < 10) {
//       numNewStr = newStr + "0" + num;
//     } else {
//       numNewStr = newStr + num;
//     }
// }

//   }
