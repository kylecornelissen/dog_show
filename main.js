var output = document.querySelector('.output-name');
var input = document.getElementById('name-input');
var submitButton = document.getElementById('name-btn');
var dogPicture = document.querySelector('.dog-profile');

console.log(dogPicture.src);

submitButton.addEventListener('click', addDogName);

function addDogName() {
  if (input.value === "Cajun" || input.value === "cajun") {
    console.log("Input Value true:", input.value)
    output.innerText = input.value;
    dogPicture.src = "./images/cajun.jpg"
  } else {
    console.log("Input Value false:", input.value)
    output.innerText = input.value;
    dogPicture.src = "./images/dog1-sq.jpg"
  }
}

function hitEnter() {
  if (event.keyCode == 13) {
    addDogName();
    return false;
  } else {
    console.log("!!!")
  }
}
