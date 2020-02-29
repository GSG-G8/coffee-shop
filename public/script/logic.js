fetch('/menu')
  .then((res) => res.json())
  .then((result) => creatMenu(result));

fetch('/menu')
  .then((res) => res.json())
  .then((result) => { theResult = result; });

fetch('/orders')
  .then((res) => res.json())
  .then((result) => createOrder(result));
