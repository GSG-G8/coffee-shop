const orders = document.querySelector('.orders');
const content = document.querySelector('.content__menu');
const myOrdersBtn = document.querySelector('.header__your-order');
const details = document.querySelector('.details');
const backToHomeBtn = document.querySelector('.orders__back');
const quantityDisplay = document.querySelector('.details__quantity');
const price = document.querySelector('.price');
const TotalPrice = document.querySelector('.Total_price');
const quantityRange = document.getElementById('quantityRange');
const totalPriceForm = document.getElementById('totalPrice');
const menuIdOrder = document.getElementById('menuId');
const detailsImage = document.querySelector('.details__image');
const detailsName = document.querySelector('.details__name');
const detailsPrice = document.querySelector('.price');

quantityDisplay.textContent = quantityRange.value;

quantityRange.addEventListener('mousemove', () => {
  quantityDisplay.textContent = quantityRange.value;
  TotalPrice.textContent = price.textContent * quantityRange.value;
  totalPriceForm.value = TotalPrice.textContent;
});
quantityRange.addEventListener('touchmove', () => {
  quantityDisplay.textContent = quantityRange.value;
  TotalPrice.textContent = price.textContent * quantityRange.value;
  totalPriceForm.value = TotalPrice.textContent;
});
quantityRange.addEventListener('touchstart', () => {
  quantityDisplay.textContent = quantityRange.value;
  TotalPrice.textContent = price.textContent * quantityRange.value;
  totalPriceForm.value = TotalPrice.textContent;
});

backToHomeBtn.onclick = () => {
  content.style.display = 'flex';
  orders.style.display = 'none';
  details.style.display = 'none';
  backToHomeBtn.style.display = 'none';
};
myOrdersBtn.onclick = () => {
  content.style.display = 'none';
  orders.style.display = 'flex';
  details.style.display = 'none';
  backToHomeBtn.style.display = 'block';
};
let theResult;
document.addEventListener('click', (e) => {
  if (e.target.image === 'coffee') {
    content.style.display = 'none';
    orders.style.display = 'none';
    details.style.display = 'flex';
    backToHomeBtn.style.display = 'block';
    const finalData = theResult[e.target.menuId - 1];
    menuIdOrder.value = e.target.menuId;
    detailsImage.src = finalData.menuimage;
    detailsName.textContent = finalData.menuname;
    detailsPrice.textContent = finalData.price;
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
    parentImage.menuId = e.id;
    parentImage.image = 'coffee';
    parentImage.alt = e.menuname;
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
  // orders.textContent = '';
  data.forEach((e) => {
    const parentArical = document.createElement('article');
    const parentImage = document.createElement('img');
    const parenName = document.createElement('span');
    const parenDiv = document.createElement('div');
    const ordPrice = document.createElement('sapn');
    const ordQuantity = document.createElement('sapn');
    const ordSize = document.createElement('sapn');
    const ordSuagr = document.createElement('sapn');

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
    ordSuagr.className = 'order__size';
    ordSuagr.textContent = `${e.suger} -Sugar`;

    orders.appendChild(parentArical);
    parentArical.appendChild(parentImage);
    parentArical.appendChild(parenName);
    parentArical.appendChild(parenDiv);
    parenDiv.appendChild(ordPrice);
    parenDiv.appendChild(ordQuantity);
    parenDiv.appendChild(ordSize);
    parenDiv.appendChild(ordSuagr);
  });
};
