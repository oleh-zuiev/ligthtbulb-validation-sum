const colorChangerRef = document.querySelector('.js-col-ch');
const changeColBtnRef = document.querySelector('.js-change-col-btn');
function switchColors() {
    colorChangerRef.classList.toggle('second-color');
}
changeColBtnRef.addEventListener('click', function () {
    switchColors();
});
// =============text length validation=================
const textRef = document.querySelector('.js-text');
function checkValidation(input) {
    const text = input.value;
    if (text.length < 2 || text.length > 5) {
    textRef.classList.add('wrong-text');
    } else {
    textRef.classList.remove('wrong-text');
    }
    if (text.length === 0) {
    textRef.classList.remove('wrong-text');
    }
}
// =============sum or multiply function=================
let num1 =0;
let num2 =0;
// const num1Ref = document.querySelector('.js-num1');
// num1Ref.addEventListener('input', function () {
// console.dir(num1Ref);
// console.log(num1Ref.value);
// });
// const num2Ref = document.querySelector('.js-num2');
// console.dir(num2Ref.value);
const resultRef = document.querySelector('.js-sumfunc-result');
// ----------------
const sumFuncContainerRef = document.querySelector('.js-sumfunc-contaner');
sumFuncContainerRef.addEventListener('input', function (e) {
    if (e.target.classList.contains('js-num1')) {
        // console.log('num1:',e.target.value);
        num1 = Number(e.target.value);
    }
    if (e.target.classList.contains('js-num2')) {
        // console.log('num2:',e.target.value);
        num2 = Number(e.target.value);
    }
    resultRef.textContent=sum(num1, num2);

    
});

const sum = function (a, b) {
    let result;
    if (a !== b) {
        result = a + b;
    }
    if (a === b) {
        result = a * b;
    }
    // console.log(result);
    return result;
}
// sum(5, 4);
// sum(5, 5);