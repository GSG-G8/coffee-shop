const orders = document.querySelector('.orders');
const content = document.querySelector('.content__menu');
const myOrdersBtn = document.querySelector('.header__your-order');
const details = document.querySelector('.details');
const backToHomeBtn = document.querySelector('.orders__back');
const quantityDisplay = document.querySelector('.details__quantity');
const price = document.querySelector('.price');
const TotalPrice = document.querySelector('.Total_price');
const detailsButton = document.querySelector('.details__button');
const quantityRange = document.getElementById('quantityRange');
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
  content.textContent = '';
  data.forEach((e) => {
    const parentArical = document.createElement('article');
    const parentImage = document.createElement('img');
    const ParenDiv = document.createElement('div');
    const divSpanName = document.createElement('span');
    const divSpanPrice = document.createElement('span');
    const parentSpan = document.createElement('span');

    parentArical.className = 'menu__order';
    parentImage.className = 'order__image';
    parentImage.src = e.menuimage;
    ParenDiv.className = 'order__content';
    divSpanName.className = 'order__name';
    divSpanName.textContent = e.menuname;
    divSpanPrice.className = 'order__price';
    divSpanPrice.textContent = `${e.price} $`;
    parentSpan.className = 'order__details';
    parentSpan.textContent = e.menudescription;

    content.appendChild(parentArical);
    parentArical.appendChild(parentImage);
    parentArical.appendChild(ParenDiv);
    ParenDiv.appendChild(divSpanName);
    ParenDiv.appendChild(divSpanPrice);
    parentArical.appendChild(parentSpan);
  });
};

const createOrder = (data) => {
  orders.textContent = '';
  data.forEach((e) => {
    const parentArical = document.createElement('article');
    const parentImage = document.createElement('img');
    const parenName = document.createElement('span');
    const parenDiv = document.createElement('div');
    const ordPrice = document.createElement('sapn');
    const ordQuantity = document.createElement('sapn');
    const ordSize = document.createElement('sapn');

    parentArical.className = 'orders__order';
    parentImage.className = 'order__image';
    parentImage.src = e.menuimage;
    parenName.className = 'order__name';
    parenName.textContent = e.menuname;
    parenDiv.className = 'order-content';
    ordPrice.className = 'order__price';
    ordPrice.textContent = `${e.total_price} $`;
    ordQuantity.className = 'order__quantity';
    ordQuantity.textContent = e.quantity;
    ordSize.className = 'order__size';
    ordSize.textContent = e.size;

    orders.appendChild(parentArical);
    parentArical.appendChild(parentImage);
    parentArical.appendChild(parenName);
    parentArical.appendChild(parenDiv);
    parenDiv.appendChild(ordPrice);
    parenDiv.appendChild(ordQuantity);
    parenDiv.appendChild(ordSize);
  });
};
