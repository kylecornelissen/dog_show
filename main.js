var output = document.querySelector('.output-name');
var input = document.getElementById('name-input');
var submitButton = document.getElementById('name-btn');
var dogPicture = document.querySelector('.dog-profile');

submitButton.addEventListener('click', addDogName);

function addDogName() {
  if (input.value === "Cajun" || input.value === "cajun") {
    output.innerText = input.value;
    dogPicture.src = "./images/cajun.jpg"
  } else {
    output.innerText = input.value;
    dogPicture.src = "./images/dog1-sq.jpg";
  }
}

function hitEnter() {
  if (event.keyCode === 13) {
    addDogName();
    return false;
  }
}
