var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/manhattan.jpg") {
    myImage.setAttribute("src", "images/new-york.jpg");
  } else {
    myImage.setAttribute("src", "images/manhattan.jpg");
  }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "New York is cool, " + myName;
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "New York is cool, " + storedName;
  }
  
  myButton.onclick = function () {
    setUserName();
  };
  
