const checkbox = document.getElementById("checkbox");
const submitBtn = document.querySelector("button[type=submit]");

checkbox.disabled = true;
submitBtn.disabled = true;

const elements = document.querySelectorAll(".element");
const selectColor = document.getElementById("select-color");
// selectColor = document.querySelector("#select-color");

//console.log(selectColor);

function getRandomColor() {
  const letter = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  return color;
}

elements.forEach(function (element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.innerHTML = color;
  selectColor.innerHTML = color;
});

elements.forEach(function (element) {
  element.addEventListener("click", function () {
    if (element.innerHTML === selectColor.innerHTML) {
      checkbox.disabled = false;
      checkbox.checked = true;
      // checkbox.Checked = true;
      alert("You're Human.");
      submitBtn.disabled = false;
      submitBtn.classList.remove("btn-light");
      submitBtn.classList.add("btn-success");
    } else {
      alert("Please verify that you're human.");
      location.reload(true);
    }
  });
});