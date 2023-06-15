let countStopBoxes = 0
var box1; 
var box2; 
var box3; 
var box4; 
const makeBoxMove = (boxNum) => {
    let boxClassName = `.still-box${boxNum}`;
    if (boxNum == 1){
        document.querySelector(boxClassName).classList.toggle('moving-box'); 
      
        document.querySelector(".testButt").innerHTML += "1";
    } else if (boxNum == 2){
        document.querySelector(boxClassName).classList.toggle('moving-box-down'); 
       
        document.querySelector(".testButt").innerHTML += "2";
    }else if (boxNum == 3){
        document.querySelector(boxClassName).classList.toggle('moving-box-return'); 
       
        document.querySelector(".testButt").innerHTML += "3";
    }else if (boxNum == 4){
        document.querySelector(boxClassName).classList.toggle('moving-boxUp'); 
    
        document.querySelector(".testButt").innerHTML += "4";
    }

    let allButtons = document.querySelectorAll(".move-box"); 
    let buttonPressCounter = 0; 
    allButtons.forEach(
        (element) => {
            console.log(element.parentElement.classList.length)
            buttonPressCounter+=element.parentElement.classList.length
        }
    )
    if (buttonPressCounter == 4){
        document.querySelector("#stop").disabled = false
        logFlashMsg.innerHTML = ""; 
    }

}




// make Times a Ticking flash -----------------

const logFlashMsg = document.querySelector(".flash");
const makeMainBoxFlash = document.querySelector(".flexContainer")

// stopwatch code -----------------------------

// let timer; 

let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
 
let hour = 00;
let minute = 00;
let second = 00;
let count = 00;


startBtn.addEventListener('click', function () {
    logFlashMsg.innerHTML = "Times a Ticking!!!"; 
    // makeMainBoxFlash.
    timer = true;
    stopWatch();

    makeBoxMove(1); 
    makeBoxMove(2); 
    makeBoxMove(3);
    makeBoxMove(4);
});

// if (box1 && box2 && box3 && box4 ){
//     stopBtn.addEventListener('click', function () {
//         timer = false;
//     });
// }

stopBtn.addEventListener('click', function () {
    
    timer = false;
});

// if (box1 === true && box2 === true && box3 === true && box4 === true ){
//     timer = false;
// }

// if (countStopBoxes = 8) {
//     timer = false;
// }

// if (countStopBoxes === 8) {
//     stopBtn.addEventListener('click', function () {
//         logFlashMsg.innerHTML = "";
//         timer = false;
//     });

// }
 
resetBtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
});
 
function stopWatch() {
    if (timer) {
        count++;
 
        if (count == 100) {
            second++;
            count = 0;
        }
 
        if (second == 60) {
            minute++;
            second = 0;
        }
 
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
 
        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;
 
        if (hour < 10) {
            hrString = "0" + hrString;
        }
 
        if (minute < 10) {
            minString = "0" + minString;
        }
 
        if (second < 10) {
            secString = "0" + secString;
        }
 
        if (count < 10) {
            countString = "0" + countString;
        }
 
        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;
        setTimeout(stopWatch, 10);
    }
}