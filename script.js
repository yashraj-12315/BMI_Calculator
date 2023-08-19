const form = document.querySelector("form");
// const height= parseInt(document.querySelector('#height').value);
// Upper case  wil give you empty value
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  // const results = document.querySelector("#results");
  const msg = document.querySelector("#msg");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please enter a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please enter a valid weight";
  } else {
    const BMI = (weight / (height ** 2 / 10000)).toFixed(2);
    //show the result
    // results.innerHTML = `<span>${BMI}</span>`;
    if (BMI < 18.6) {
      msg.innerHTML = `Your BMI Index is ${BMI} and you are underweight`;
    } else if (BMI >= 18.6 && BMI <= 24.9) {
      msg.innerHTML = `Your BMI Index is ${BMI} and you are Normal`;
    } else if (BMI > 24.9) {
      msg.innerHTML = `Your BMI Index is ${BMI} and you are Overweight`;
    }
  }
});
