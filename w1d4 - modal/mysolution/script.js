"use strict";
const modal = document.querySelector("#modal_container");
const closeBtn = document.querySelector("#closebutton");

const pdk1 = document.querySelector("#product_1");
const pdk2 = document.querySelector("#product_2");
const pdk3 = document.querySelector("#product_3");
const pdk4 = document.querySelector("#product_4");
const pdk5 = document.querySelector("#product_5");

const products = [pdk1, pdk2, pdk3, pdk4, pdk5];

products.forEach(element => {
  for (let i = 0; i < products.length; i++) {
    let details = products[i].lastChild;
    details.addEventListener("click", showModal);

    function showModal() {
      console.log("Show modal");
      modal.classList.remove("hide");
      closeBtn.addEventListener("click", hideModal);

      function hideModal() {
        console.log("Hide modal");
        modal.classList.add("hide");
      }
    }
  }
});
