// let not = document.querySelector(".cookies");
// let cross = document.querySelector(".cross");
// window.addEventListener("load", popUpCookie);

// function popUpCookie() {
//   not.classList.add("slide-up");
// }
// cross.addEventListener("click", closeNot);

// function closeNot() {
//   not.classList.remove("slide-up");
//   not.classList.add("slide-down");
// }

// second solution

window.addEventListener("load", () => {
  const not = document.querySelector("#cookies");
  const accept = not.querySelector(".accept");
  const deny = not.querySelector(".deny");

  not.classList.add("moveIn");

  hookUpEvents();
  function hookUpEvents() {
    accept.addEventListener("click", () => {
      not.classList.remove("moveIn");
    });
    deny.addEventListener("click", () => {
      not.classList.remove("moveIn");
    });
    deny.addEventListener("mouseenter", () => {
      deny.style.transform = `translateY(${Math.random() * 300})`;
    });
  }
});
