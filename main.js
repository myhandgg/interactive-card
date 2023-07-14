const rightSide = document.querySelector(".right-side")
const cardPassword = document.querySelector(".card-password")
const userName = document.querySelector(".name")
const expiredMonth = document.querySelector(".exp-month")
const expiredYear = document.querySelector(".exp-year")
const cvc = document.querySelector(".cvc")
const nameInput = document.querySelector(".name-input")
const cardInput = document.querySelector(".card-input")
const monthInput = document.querySelector(".input-month")
const yearInput = document.querySelector(".input-year")
const Inputcvc = document.querySelector(".input-cvc")
const warning = document.querySelector(".warning")
const warning2 = document.querySelector(".warning2")
const warning3 = document.querySelector(".warning3")

const confirmBtn = document.querySelector(".confirm")

const reg = /\d{4}\s\d{4}\s\d{4}\s\d{4}/ig

const result = document.querySelector(".result")

nameInput.oninput = () =>{
    if (nameInput.value !== ""){
        userName.textContent = nameInput.value
    }
}

cardInput.oninput = () =>{
    if (cardInput.value.match(reg)){
        cardPassword.textContent = cardInput.value
        warning.style.display = "none"
        cardInput.style.borderColor = "var(--Light-grayish-violet)"
    } else {
        cardPassword.textContent = "0000 0000 0000 0000"
        warning.style.display = "block"
        cardInput.style.borderColor = "var(--Red)"
    }
}

monthInput.oninput = () =>{
    if (monthInput.value !== "" && monthInput.value.match(/\d+/ig)){
        monthInput.style.borderColor = "var(--Light-grayish-violet)"
        warning2.style.display = "none"
        if (+monthInput.value < 10){
            expiredMonth.textContent = `0${monthInput.value}`
        } else {
            expiredMonth.textContent = monthInput.value
        }
    } else {
        expiredMonth.textContent = "00"
        monthInput.style.borderColor = "var(--Red)"
        warning2.style.display = "block"
    }
}

yearInput.oninput = () =>{
    if (yearInput.value !== "" && yearInput.value.match(/\d{2}/ig)){
        warning2.style.display = "none"
        expiredYear.textContent = yearInput.value
        yearInput.style.borderColor = "var(--Light-grayish-violet)"
    } else {
        expiredYear.textContent = "00"
        yearInput.style.borderColor = "var(--Red)"
        warning2.style.display = "block"
    }
}

Inputcvc.oninput = () =>{
    if (Inputcvc.value !== "" && Inputcvc.value.match(/\d{3}/ig)){
        warning3.style.display = "none"
        cvc.textContent = Inputcvc.value
        Inputcvc.style.borderColor = "var(--Light-grayish-violet)"
    } else {
        cvc.textContent = "000"
        Inputcvc.style.borderColor = "var(--Red)"
        warning3.style.display = "block"
    }
}

confirmBtn.onclick = () =>{
    if (nameInput.value !== "" &&cardInput.value.match(reg) && monthInput.value !== "" && monthInput.value.match(/\d+/ig) && yearInput.value !== "" && yearInput.value.match(/\d{2}/ig) && Inputcvc.value !== "" && Inputcvc.value.match(/\d{3}/ig)){
        rightSide.style.display = "none"
        result.style.display = "flex"
    }
}