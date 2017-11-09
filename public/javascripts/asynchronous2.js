/*
一等值:
  ❏ 将其赋给变量或存储在数组和对象等数据结构中。
  ❏ 将其传递给函数。
  ❏ 从函数中返回它们。
 */
window.onload = function () {
  // 筛选
  // let passengers = [
  //   {name: "Jane Doloop", paid: true},
  //   {name: "Dr. Evel", paid: true},
  //   {name: "Sue Property", paid: false},
  //   {name: "John Funcall", paid: true}];

  /*
  let pass = (passengers) => {
    for (let i = 0; i < passengers.length; i++) {
      if (!passengers[i].paid) {
        return console.log(passengers[i].name + '没有买票!');
      }
    }
    console.log(passengers)
  }*/
  // 排序
  let products = [{name: "Grapefruit", calories: 170, color: "red", sold: 8200},
    {name: "Orange", calories: 160, color: "orange", sold: 12101},
    {name: "Cola", calories: 210, color: "caramel", sold: 25412},
    {name: "Diet Cola", calories: 0, color: "caramel", sold: 43922},
    {name: "Lemon", calories: 200, color: "clear", sold: 14983},
    {name: "Raspberry", calories: 180, color: "pink", sold: 9427},
    {name: "Root Beer", calories: 200, color: "caramel", sold: 9909},
    {name: "Water", calories: 0, color: "clear", sold: 62123}
  ];

  // 数组排序
  function compareSold(cloaA, cloaB) {
    if (cloaA.sold > cloaB.sold) {
      return 1;
    } else if (cloaA.sold === cloaB.sold) {
      return 0;
    } else {
      return -1;
    }
  }

  /*
  传递给s or t方法的函数必须返回下面的其中一个值:大于0的数字、0或小于0的数字。
   */
  products = products.sort(compareSold)
  console.log(products)

  // pass(passengers);
}