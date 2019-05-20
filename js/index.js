const circleBody = document.querySelector('.slider-body')
const circleEle = document.querySelectorAll('.lElement')
const circleEleTitle = document.querySelectorAll('.title')
const circleEleDesc = document.querySelectorAll('.description')

let elements = circleEle.length
let deg = 0;
let liDeg = 0;
let titleDeg = 0;
let elementPosition = 0;

let titleAngles = []

function makeCircle() {
    for (i = 0; i < elements; i++) {
        circleEle[i].style.transform = `rotate(${liDeg}deg)`
        titleDeg = 360 - liDeg;
        liDeg = liDeg + (360 / elements);
        circleEleTitle[i].style.transform = `rotate(${titleDeg}deg)`
        titleAngles.push(titleDeg);
    }
    circleEleDesc[elementPosition].style.display = 'grid'
    circleEleTitle[elementPosition].style.fontSize = '4rem'
    circleEleTitle[elementPosition].style.backgroundColor = '#007f68'
}

makeCircle()


function rotate() {
    deg = deg + (360 / elements);
    circleBody.style.transform = `rotate(${deg}deg)`;
    for (let d = 0; d < elements; d++) {
        liDeg = titleAngles[d] - deg;
        circleEleTitle[d].style.transform = `rotate(${liDeg}deg)`
        circleEleTitle[d].style.fontSize = '2rem'
        circleEleTitle[d].style.backgroundColor = 'rgba(0,0,0,0)'
        circleEleDesc[d].style.display = 'none'
    }
    ++elementPosition
    if (elementPosition > elements) {
        elementPosition = 1;
    }
    let currentPosition = elements - elementPosition;
    circleEleTitle[currentPosition].style.fontSize = '4rem'
    circleEleTitle[currentPosition].style.backgroundColor = '#007f68'
    circleEleDesc[currentPosition].style.display = 'grid'
}

setInterval(rotate, 2000);