var button = document.getElementById("btn");
var randomNumber = Math.floor(Math.random() * 100 + 1);
var myres = document.getElementById("para");
console.log(randomNumber);

button.addEventListener("click", function () {
    var input = document.getElementById("inp").value;
  if (isNaN(input)) {
        alert("Please enter a valid number.");
    } else if (input > 100 || input < 1) {
        alert("Please enter a number between 1 and 100.");
    } else if (randomNumber == input) {
        myres.innerHTML = "Congratulations! You guessed the right number!";
    } else if (randomNumber < input) {
        alert("Too high!");
    } else {
        alert("Too low!");
    }
});
