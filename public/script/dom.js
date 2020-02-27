const orders = document.querySelector('.orders');
const content = document.querySelector('.content__menu');
const myOrdersBtn = document.querySelector('.header__your-order');
const details = document.querySelector('.details');
const backToHomeBtn = document.querySelector('.orders__back');
const quantityDisplay = document.querySelector('.details__quantity');
const price = document.querySelector('.price');
const TotalPrice = document.querySelector('.Total_price');
const detailsButton = document.querySelector('.details__button');
const detailsName = document.querySelector('.details__name');
const quantityRange = document.getElementById('quantityRange');
const size = document.getElementById('size');
const sugar = document.getElementById('sugar');
const date = new Date();
const seconds = date.getSeconds();
const minutes = date.getMinutes();
const hour = date.getHours();
quantityDisplay.textContent = quantityRange.value;

quantityRange.addEventListener('mousemove', () => {
  quantityDisplay.textContent = quantityRange.value;
  TotalPrice.textContent = price.textContent * quantityRange.value;
});
quantityRange.addEventListener('touchmove', () => {
  quantityDisplay.textContent = quantityRange.value;
  TotalPrice.textContent = price.textContent * quantityRange.value;
});
quantityRange.addEventListener('touchstart', () => {
  quantityDisplay.textContent = quantityRange.value;
  TotalPrice.textContent = price.textContent * quantityRange.value;
});
const details_ord = () => {
  console.log(detailsName.textContent);
  console.log(price.textContent + '$');
  console.log(quantityDisplay.textContent);
  console.log(size.value);
  console.log(sugar.value);
  console.log(hour + ':' + minutes + ':'+ seconds);
  console.log(TotalPrice.textContent + '$');
};
detailsButton.addEventListener('click', () => {
  details_ord();
});


myOrdersBtn.onclick = () => {
  content.style.display = 'none';
  orders.style.display = 'flex';
  details.style.display = 'none';
  backToHomeBtn.style.display = 'block';
};

backToHomeBtn.onclick = () => {
  content.style.display = 'flex';
  orders.style.display = 'none';
  details.style.display = 'none';
  backToHomeBtn.style.display = 'none';
};

document.addEventListener('click', (e) => {
  if (e.target.alt === 'coffee') {
    content.style.display = 'none';
    orders.style.display = 'none';
    details.style.display = 'flex';
    backToHomeBtn.style.display = 'block';
  }
});

const creatMenu = (data) => {
  data.forEach((e) => {
});
};
const createOrder = (data) => {
  data.forEach((e) => {
});
};
