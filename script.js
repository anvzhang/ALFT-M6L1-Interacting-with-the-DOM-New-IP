let oneElement = document.querySelector(".one");

oneElement.addEventListener("click", function() {
  let fiveElement = document.querySelector(".five");
  fiveElement.style.display = "none";
});

let twoElement = document.querySelector(".two");
twoElement.addEventListener("click", function() {
  let fourElement = document.querySelector(".four");
  fourElement.style.display = "none";
});

let threeElement = document.querySelector(".three");
threeElement.addEventListener("click", function() {
  let sevenElement = document.querySelector(".seven");
  sevenElement.style.display = "none";
});

let fourElement = document.querySelector(".four");
fourElement.addEventListener("click", function() {
  let eightElement = document.querySelector(".eight");
  eightElement.style.display = "none";
});

let fiveElement = document.querySelector(".five");
fiveElement.addEventListener("click", function() {
  let threeElement = document.querySelector(".three");
  threeElement.style.display = "none";
});

let sixElement = document.querySelector(".six");
sixElement.addEventListener("click", function() {
  let twoElement = document.querySelector(".two");
  twoElement.style.display = "none";
});

let sevenElement = document.querySelector(".seven");
sevenElement.addEventListener("click", function() {
  let sixElement = document.querySelector(".six");
  sixElement.style.display = "none";
});

let eightElement = document.querySelector(".eight");
eightElement.addEventListener("click", function() {
  let oneElement = document.querySelector(".one");
  oneElement.style.display = "none";
});

// Solution starts here

let solutionElement = document.createElement("h5");
solutionElement.innerHTML = "The solution is 4,2,6,7,3,5,1.";

document.querySelector("h4:last-of-type").insertAdjacentElement("afterend", solutionElement);

document.querySelectorAll("button").forEach(button => button.style.fontSize = "x-large");

document.querySelector(".two").style.backgroundColor = "red";

document.querySelector(".three").style.backgroundColor = "yellow";

document.querySelector(".four").style.backgroundColor = "orange";

document.querySelector(".five").style.backgroundColor = "purple";

document.querySelector(".six").style.backgroundColor = "gray";

document.querySelector(".seven").style.backgroundColor = "pink";

document.querySelector(".eight").style.backgroundColor = "brown";


document.querySelector("h3").style.textAlign = "center";

document.querySelectorAll("h4").forEach(h4 => h4.style.textAlign = "center");

document.querySelector("h5").style.textAlign = "center";


document.querySelectorAll("button").forEach(button => button.addEventListener("click", function() {
  document.body.style.backgroundColor = window.getComputedStyle(button).backgroundColor;
}))

let refreshButton = document.createElement("button")
refreshButton.innerHTML = "refresh";

document.body.append(refreshButton);

refreshButton.addEventListener("click", function() {
  document.querySelectorAll("button").forEach(button => button.style.removeProperty("display"));
  document.body.style.removeProperty("background-color");
});
