const rangeInput = document.querySelectorAll("input[type='range']");
const progress = document.querySelector("#progress");
const minValue = document.querySelector("#minVal");
const maxValue = document.querySelector("#maxVal");

const priceGap = 100;

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let min = parseInt(rangeInput[0].value);
    let max = parseInt(rangeInput[1].value);

    console.log(e.target.id);
    if (max - min < 100) {
      if (e.target.id === "minPrice") {
        rangeInput[0].value = max - priceGap;
      } else {
        rangeInput[1].value = min + priceGap;
      }
    } else {
      progress.style.left = (min / rangeInput[0].max) * 100 + "%";
      progress.style.right = 100 - (max / rangeInput[1].max) * 100 + "%";
    }

    minValue.innerText = rangeInput[0].value;
    maxValue.innerText = rangeInput[1].value;
  });
});
