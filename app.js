//  add to cart

let productsCountEl = document.getElementById("products-count");
// console.log(productsCountEl);
let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");
// console.log(addToCartBtns);
for (let i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", function () {
    // console.log("clicked");
    //   варіант 1
    // productsCountEl.textContent = +productsCountEl.textContent + 1;
    // варіант 2
    let prevProductsCount = +productsCountEl.textContent;
    productsCountEl.textContent = prevProductsCount + 1;
  });
}

//   Задача про лайки

let likeBtns = document.querySelectorAll(".like");
console.log(likeBtns);

likeBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    // console.log("cliked");
    if (btn.classList.contains("liked")) {
      btn.classList.remove("liked");
    } else {
      btn.classList.add("liked");
    }
  })
);
