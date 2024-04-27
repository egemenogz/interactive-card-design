const cardNumber = document.getElementById("number");
const numberInp = document.getElementsByName("cnumber")[0];

const cardName = document.getElementById("name");
const nameInp = document.getElementsByName("chname")[0];

const cardMonth = document.getElementById("month");
const monthInp = document.getElementsByName("date-mm")[0];

const cardYear = document.getElementById("year");
const yearInp = document.getElementsByName("date-yy")[0];

const cardCvc = document.getElementById("cvc");
const cvcInp = document.getElementsByName("card_cvc")[0];

const submitBtn = document.getElementById("submitBtn");
const contBtn = document.getElementById("contBtn");

const complated = document.querySelector(".thank");
const form = document.querySelector(".form-label.credit-card");

function setCardNumber(e) {
  cardNumber.innerText = format(e.target.value);
}
function setCardName(e) {
  cardName.innerText = e.target.value;
}
function setCardMonth(e) {
  cardMonth.innerText = e.target.value;
}
function setCardYear(e) {
  cardYear.innerText = e.target.value;
}
function setCardCvc(e) {
  cardCvc.innerText = e.target.value;
}
function format(number) {
  return number.replace(/\D/g, "").replace(/(\d{4})(?=\d)/g, "$& ");
}

function handleSubmit(e) {
  e.preventDefault();
  if (nameInp.value) {
    nameInp.classList.add("error");
    nameInp.parentElement.classList.add("error_message");
  } else {
    nameInp.classList.remove("error");
    nameInp.parentElement.classList.remove("error_message");
  }
  if (numberInp.value) {
    numberInp.classList.add("error");
    numberInp.parentElement.classList.add("error_message");
  } else {
    numberInp.classList.remove("error");
    numberInp.parentElement.classList.remove("error_message");
  }
  if (monthInp.value) {
    monthInp.classList.add("error");
    monthInp.parentElement.classList.add("error_message");
  } else {
    monthInp.classList.remove("error");
    monthInp.parentElement.classList.remove("error_message");
  }
  if (yearInp.value) {
    yearInp.classList.add("error");
    yearInp.parentElement.classList.add("error_message");
  } else {
    yearInp.classList.remove("error");
    yearInp.parentElement.classList.remove("error_message");
  }
  if (cvcInp.value) {
    cvcInp.classList.add("error");
    cvcInp.parentElement.classList.add("error_message");
  } else {
    cvcInp.classList.remove("error");
    cvcInp.parentElement.classList.remove("error_message");
  }
  if (
    nameInp.value &&
    numberInp.value &&
    monthInp.value &&
    yearInp.value &&
    cvcInp.value
  ) {
    complated.classList.remove("hidden");
    setTimeout(() => {
      form.classList.add("hidden");
    }, 10);
  }
}
function handleContinue() {
  window.location.reload();
}

numberInp.addEventListener("input", setCardNumber);
nameInp.addEventListener("input", setCardName);
monthInp.addEventListener("input", setCardMonth);
yearInp.addEventListener("input", setCardYear);
cvcInp.addEventListener("input", setCardCvc);
submitBtn.addEventListener("click", handleSubmit);
