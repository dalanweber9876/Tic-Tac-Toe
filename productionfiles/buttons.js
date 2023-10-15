const text1 = document.querySelector('.piece1');
const text2 = document.querySelector('.piece2');
const text3 = document.querySelector('.piece3');
const text4 = document.querySelector('.piece4');
const text5 = document.querySelector('.piece5');
const text6 = document.querySelector('.piece6');
const text7 = document.querySelector('.piece7');
const text8 = document.querySelector('.piece8');
const text9 = document.querySelector('.piece9');

const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");
const button5 = document.querySelector(".button5");
const button6 = document.querySelector(".button6");
const button7 = document.querySelector(".button7");
const button8 = document.querySelector(".button8");
const button9 = document.querySelector(".button9");

const start = document.querySelector(".start");

let count = Math.floor(Math.random() * 2) + 1;
if (count == 1) {
    start.innerHTML = "Player X Starts"
} else {
    start.innerHTML = "Player O Starts"
}

function myFunction() {
    // alert("Hello from a static file!");
    if (count%2 == 0){
        text1.innerHTML = "O";
    } else {
        text1.innerHTML = "X";
    }
    count += 1;    
    button1.style.display = "none";
  }

function myFunction2() {
    if (count%2 == 0){
        text2.innerHTML = "O";
    } else {
        text2.innerHTML = "X";
    }
    count += 1;  
    button2.style.display = "none";
}

function myFunction3() {
    if (count%2 == 0){
        text3.innerHTML = "O";
    } else {
        text3.innerHTML = "X";
    }
    count += 1;  
    button3.style.display = "none";
}

function myFunction4() {
    if (count%2 == 0){
        text4.innerHTML = "O";
    } else {
        text4.innerHTML = "X";
    }
    count += 1;  
    button4.style.display = "none";
}

function myFunction5() {
    if (count%2 == 0){
        text5.innerHTML = "O";
    } else {
        text5.innerHTML = "X";
    }
    count += 1;  
    button5.style.display = "none";
}

function myFunction6() {
    if (count%2 == 0){
        text6.innerHTML = "O";
    } else {
        text6.innerHTML = "X";
    }
    count += 1;  
    button6.style.display = "none";
}

function myFunction7() {
    if (count%2 == 0){
        text7.innerHTML = "O";
    } else {
        text7.innerHTML = "X";
    }
    count += 1;  
    button7.style.display = "none";
}

function myFunction8() {
    if (count%2 == 0){
        text8.innerHTML = "O";
    } else {
        text8.innerHTML = "X";
    }
    count += 1;  
    button8.style.display = "none";
}

function myFunction9() {
    if (count%2 == 0){
        text9.innerHTML = "O";
    } else {
        text9.innerHTML = "X";
    }
    count += 1;  
    button9.style.display = "none";
}