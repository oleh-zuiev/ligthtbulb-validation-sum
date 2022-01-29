const colorChangerRef = document.querySelector('.js-col-ch');
const changeColBtnRef = document.querySelector('.js-change-col-btn');
function switchColors() {
    colorChangerRef.classList.toggle('second-color');
}
changeColBtnRef.addEventListener('click', function () {
    switchColors();
});
// ====================================
// const inputField = document.querySelector('#name');
// const actionBtn = document.querySelector('#showName');
// const resultRef = document.querySelector('#result');
// actionBtn.addEventListener('click', function () {
// const userName = inputField.value;
// resultRef.innerHTML = `Привет, ${userName} !!!`;
// })

