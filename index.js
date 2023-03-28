let input = document.getElementById("inp");
let eklenecek = document.getElementById("list");

let suruklenenli;

input.addEventListener("keyup", ekle);

function ekle(event) {
  if (event.keyCode === 13) {
    let li = document.createElement("li");
    eklenecek.appendChild(li);
    li.innerHTML = input.value;
    li.draggable = true;
    li.ondragenter = function (event) {
      event.preventDefault();
      suruklenenli = li;
    };
    li.onclick = function (event) {
      li.classList.toggle("x");
    };
    input.value = "";
  }
}

function uzerinde(event) {
  event.preventDefault();
}

function a(event) {
  eklenecek.removeChild(suruklenenli);
}
