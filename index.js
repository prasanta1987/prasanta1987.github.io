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
    circleEleTitle[elementPosition].style.fontSize = '3rem'
}

makeCircle()


function rotate() {
    deg = deg + (360 / elements);
    circleBody.style.transform = `rotate(${deg}deg)`;
    for (let d = 0; d < elements; d++) {
        liDeg = titleAngles[d] - deg;
        circleEleTitle[d].style.transform = `rotate(${liDeg}deg)`
        circleEleTitle[d].style.fontSize = '1rem'
        circleEleDesc[d].style.display = 'none'
    }
    ++elementPosition
    if (elementPosition > elements) {
        elementPosition = 1;
    }
    let currentPosition = elements - elementPosition;
    circleEleTitle[currentPosition].style.fontSize = '4rem'
    circleEleDesc[currentPosition].style.display = 'grid'
}

setInterval(rotate, 2000);





// const loader = document.querySelector('.loader-container');

// function showLoader() {
//     console.log('out')
//     loader.style.display = 'block'
//     setTimeout(() => {
//         loader.style.display = 'none'
//     }, 2000);
// }

// setInterval(showLoader, 4000);
// let canvas = document.querySelector('#mycanvas');

// context = canvas.getContext('2d');

// make_base();

// function make_base() {
//     base_image = new Image();
//     base_image.src = 'pic.png';
//     base_image.onload = function () {
//         context.drawImage(base_image, 0, 100);
//     }
// }

// const d = new Date()

// console.log(d.toLocaleTimeString())

/*
const circleBody = document.querySelector('#circle-body')
const circleList = document.querySelector('#ele-list')
const listElement = document.querySelectorAll('.elem')

let angle = 0;
let element = 0;

function rotate() {
    angle = angle - 90;
    ele_angle = 360 - angle;

    listElement.forEach((e) => {
        e.children[1].style.display = 'none'
        e.style.color = 'red'
        e.children[1].classList.remove('appear')
    })
    circleBody.style.transform = "rotateZ(" + angle + "deg)"

    listElement.forEach(function (e) {
        e.style.transform = "rotateZ(" + ele_angle + "deg)"
    })

    listElement[element].children[1].style.display = 'flex'
    listElement[element].style.color = 'green'
    listElement[element].children[1].classList.add('active')
    listElement[element].children[1].classList.add('appear')
    element++;
    if (element >= listElement.length) {
        element = 0;
    }
}
rotate()
setInterval(rotate, 5000);

*/
