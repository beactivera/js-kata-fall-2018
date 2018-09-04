"use strict";
const modal = document.querySelector("#modal_container");
const closeBtn = document.querySelector("#closebutton");

// create an array from products
const products = document.querySelectorAll("article");
console.log(products);

// looping through elements in products and add/remove display modal
products.forEach(element => {
  for (let i = 0; i < products.length; i++) {
    let details = products[i].lastElementChild.firstElementChild;
    // console.log(details);
    details.addEventListener("click", showModal);

    function showModal() {
      console.log("Show modal");
      modal.classList.remove("hide");
      closeBtn.addEventListener("click", hideModal);
      modal.querySelector("h1").textContent =
        products[i].firstElementChild.innerHTML;

      function hideModal() {
        console.log("Hide modal");
        modal.classList.add("hide");
      }
    }
  }
});
