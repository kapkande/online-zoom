// @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap')
const onMenuClick = (even) => {

    const target = even.target;
    const popup = document.querySelector('.popup');
    const whadow = document.querySelector('.popup, .popup-active')
    const body = document.querySelector('body')
    const header = document.querySelector('header')
    const isAccountBTN = ['header__burger', 'header__burger__line'].includes(target.className);
    const isShadow = ['popup popup-active'].includes(target.className);
    const isPopupCross = ['popup__cross', 'popup__cross__line'].includes(target.className);
    if (isAccountBTN || isPopupCross) {
        popup.classList.toggle("popup-active")
        header.classList.toggle("header-active")
        body.classList.toggle('body-shadow')
    } else if (isShadow) {
        console.log(11);
        popup.classList.toggle("popup-active")
        header.classList.toggle("header-active")
        body.classList.toggle('body-shadow')
    }



}
const headerBurger = document.querySelector('.header__burger')
const Shadow = document.querySelector('.popup, .popup-active')
const clickMenuBurger = headerBurger.addEventListener('click', onMenuClick);
const clickShadow = Shadow.addEventListener('click', onMenuClick);



let circleActive = document.getElementsByClassName('rengeBlock__circleActive')
const amountInput = document.querySelector('.pick__pay__amount__input')
const rengeBlockCircleAll = document.querySelectorAll('.rengeBlock__circle')
const rengeBlockCostItemAll = document.querySelectorAll('.rengeBlock__costItem')

const onRangeClick = (even) => {
    const target = even.target;
    const isCircle = ['rengeBlock__circle rengeBlock__circleActive', 'rengeBlock__circle'].includes(target.className);
    const isCircleParents = ['rengeBlock__circle rengeBlock__circleActive', 'rengeBlock__circle'].includes(target.parentNode.className);
    const isinput = ['pick__pay__amount__input'].includes(target.className);

    if (isCircleParents) {
        delAcrivCircle()
        target.parentNode.classList.add('rengeBlock__circleActive');
    } else if (isCircle) {
        delAcrivCircle()
        target.classList.add('rengeBlock__circleActive');
    }
    if (isCircleParents || isCircle) {
        let num = Number(circleActive[0].innerText.split('$')[1])
        amountInput.value = `${num}`
    }
    if (isinput) {
        if (amountInput.value.length > 4) {
            amountInput.value = `9999`
            delAcrivCircle()
        } else if (amountInput.value == '0' || amountInput.value == '00' || amountInput.value == '000' || amountInput.value == '0000') {
            amountInput.value = '1'
            delAcrivCircle()
        } else {
            delAcrivCircle()
            for (let i = 0; i < rengeBlockCostItemAll.length; i++) {
                if (rengeBlockCostItemAll[i].innerText.split('$')[1] == amountInput.value) {
                    rengeBlockCostItemAll[i].parentNode.classList.add('rengeBlock__circleActive');
                }
            }
        }
    }
}

function delAcrivCircle() {
    if (circleActive[0]) {
        circleActive[0].classList.remove('rengeBlock__circleActive');
    }
}

const clickRengeBlockCircl = document.querySelector('.pick__block__rengeBlock').addEventListener('click', onRangeClick);
amountInput.addEventListener('blur', onRangeClick);