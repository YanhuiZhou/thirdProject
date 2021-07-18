let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
let myImage = document.querySelector('img');


if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello, ' + storedName;
}

myImage.onclick = function() {
    let mySrc =myImage.getAttribute('src');
    if (mySrc === 'images/happyFace.png'){
        myImage.setAttribute('src','images/happyFace2.png');
    } else{
        myImage.setAttribute('src','images/happyFace.png');
    }
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name',myName);
        myHeading.textContent = 'Hello, ' + myName;
    }
}

myButton.onclick = function() {
    setUserName();
}