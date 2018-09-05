// I want a function findAll( arr, search ) that I can use to look for all occurences of search in the array arr. The function must return another array, with the indexes of each occurence of search.

// example of array
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

// function findAll()
let arr;
let search;
function findAll(arr, search) {
  let finalArr;
  // we need to specify that newArr is an array
  let newArr = [];
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // find 'cat'
    if (arr[i] === search) {
      // numer of index
      console.log(i);
      // console.log(arr[i]); // = cat
      // if we could find more than one 'cat'
      if (i < 2) {
        newArr.push(`${i}`);
        // console.log(newArr);
      } else {
        newArr.push(`${i}`);
        // console.log(newArr);
      }
    }
    finalArr = newArr;
  }
  return finalArr;
}
