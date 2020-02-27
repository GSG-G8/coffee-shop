fetch('/menu').then((res) => res.json()).then((result) => creatMenu(result));
fetch('/orders').then((res) => res.json()).then((result) => createOrder(result));
