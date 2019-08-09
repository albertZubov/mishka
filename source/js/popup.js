var link = document.querySelector(".product-week__order");
// Если у тебя множество элементов в переменной, то и называй во множественном числе
var linkCatalog = document.querySelectorAll(".catalog-item__basket");
var linkBasket = document.querySelector(".production-process__btn-order");
var popup = document.querySelector(".modal-basket");
var close = popup.querySelector(".modal-basket__btn");
var overlay = document.querySelector(".overlay");

var event = function(evt){
  evt.preventDefault();
  popup.classList.add("modal-basket--show");
  overlay.classList.add("overlay--show");
};

link && link.addEventListener("click", event);
linkBasket && linkBasket.addEventListener("click", event);

for (var i = 0; i < linkCatalog.length; i++) {
  linkCatalog[i].addEventListener("click", event);
};

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-basket--show");
  overlay.classList.remove("overlay--show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode  ===  27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-basket--show")) {
      popup.classList.remove("modal-basket--show");
      overlay.classList.remove("overlay--show");
    }
  }
});
