const randomNumContainer = document.querySelector(".circle");
const randomNumTitle1 = randomNumContainer.querySelector(".num1");
const randomNumTitle2 = randomNumContainer.querySelector(".num2");
const randomNumTitle3 = randomNumContainer.querySelector(".num3");
const randomNumTitle4 = randomNumContainer.querySelector(".num4");
const randomNumTitle5 = randomNumContainer.querySelector(".num5");
const randomNumTitle6 = randomNumContainer.querySelector(".num6");
const randomNumTitle7 = randomNumContainer.querySelector(".num7");

function startNum1(){
    const number = Math.floor(Math.random() * 46);
    randomNumTitle1.innerText = `${number}`;
}
function startNum2(){
    const number = Math.floor(Math.random() * 46);
    randomNumTitle2.innerText = `${number}`;
}
function startNum3(){
    const number = Math.floor(Math.random() * 46);
    randomNumTitle3.innerText = `${number}`;
}
function startNum4(){
    const number = Math.floor(Math.random() * 46);
    randomNumTitle4.innerText = `${number}`;
}
function startNum5(){
    const number = Math.floor(Math.random() * 46);
    randomNumTitle5.innerText = `${number}`;
}
function startNum6(){
    const number = Math.floor(Math.random() * 46);
    randomNumTitle6.innerText = `${number}`;
}function startNum7(){
    const number = Math.floor(Math.random() * 46);
    randomNumTitle7.innerText = `${number}`;
}


function init(){
    startNum1();
    startNum2();
    startNum3();
    startNum4();
    startNum5();
    startNum6();
    startNum7();
    alert('당첨되면 반띵');
}

init();

