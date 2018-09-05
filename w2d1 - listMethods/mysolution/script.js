"use strict";
let sections;
let uls;

function displayElement(element) {
  console.log(element.textContent);
}

listMethods("modify");
listMethods("info");
listMethods("newarray");

sections = document.querySelectorAll("section");
console.log(sections);

// TODO: Create listMethods function
function listMethods() {
  for (let i = 0; i < sections.length; i++) {
    uls = sections[i].lastElementChild;
    console.log(uls);
  }

  // for (let i = 0; i < arrElement.length; i++) {
  //   console.log(arrElement[i].lastElementChild);
  // }
}
