/*
一等值:
  ❏ 将其赋给变量或存储在数组和对象等数据结构中。
  ❏ 将其传递给函数。
  ❏ 从函数中返回它们。
 */
window.onload = init;

function init() {
  // 筛选
  let passengers = [
    {name: "Jane Doloop", paid: true},
    {name: "Dr. Evel", paid: true},
    {name: "Sue Property", paid: false},
    {name: "John Funcall", paid: true}];
  // pass(passengers);
}

function checkNoFlyList(passenger) {

}

function checkNotPaid(passenger) {
}

/*
let pass = (passengers) => {
  for (let i = 0; i < passengers.length; i++) {
    if (!passengers[i].paid) {
      return console.log(passengers[i].name + '没有买票!');
    }
  }
  console.log(passengers)
}*/
