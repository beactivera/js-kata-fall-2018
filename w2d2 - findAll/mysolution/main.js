// I want a function findAll( arr, search ) that I can use to look for all occurences of search in the array arr. The function must return another array, with the indexes of each occurence of search.

const animals = [
  "dog",
  "cat",
  "horse",
  "cat",
  "mouse",
  "dog",
  "cat",
  "cat",
  "dog"
];
const catsAt = findAll(animals, "cat");
console.log(catsAt);
let arr;
let search;
function findAll(arr, search) {
  let finalArr;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
      console.log(i);
      console.log(arr[i]);
      // declare first index
      let indexOfFirst = arr.indexOf(search);
      console.log(indexOfFirst);
      if (i < 1) {
        // put value of index in the variable 'sol'
        let sol = arr.indexOf(arr[i]);
        console.log(sol);
        // change variable sol to a string called 'a'
        let a = sol.toString();
        console.log(a);
        // add to newArr the string
        newArr.push(`${a}`);
        console.log(newArr);
      } else {
      }
    }
    finalArr = newArr.push();
  }
  return finalArr;
}
