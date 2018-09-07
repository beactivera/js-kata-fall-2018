const ils = document.querySelectorAll("li");
console.log(ils);

ils.forEach(element => {
  console.log(element.firstElementChild);
  console.log(element.firstElementChild.innerHTML);
  if (element.firstElementChild.innerHTML < 5) {
    element.remove();
  }
});
