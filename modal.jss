
const modal = document.querySelector('.modal');

const btn = document.querySelector('.openBtn');


const span = document.querySelector('.close');


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}