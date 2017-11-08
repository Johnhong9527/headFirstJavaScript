/*
  注意: `window.onload`立即执行的`init`函数中,
  如要执行异步程序,函数名(如:image[i].onclick = showAnswer;).
  否则其他任何形式的定义都会导致网页加载完毕之后,函数会被立即执行.
*/
/*
事件群英谱:
  click: 点击事件
  resize: 用户调整浏览器大小时触发
  play: 点击<video>元素的播放按钮时触发
  pause: 点击<video>元素的暂停按钮时触发
  load: 网页加载结束
  upload: 用户关闭浏览器窗口或切换到其他网页触发
  drop: 用户放下拖拽元素时触发
  dragstart: 用户拖拽网页中的元素时触发
  mousemove: 鼠标在元素中滑动
  mouseover: 鼠标指向元素
  mouseout: 鼠标滑出
  keypress: 敲击键盘任何键位都会触发该事件
  touchstart: 触摸并按住元素
  touchend: 停止触摸
 */
window.onload = init;

function init() {
  let winner = function () {
    console.log("WINNER!")
  };
  let loser = function () {
    console.log("LOSER!")
  };
  let a = winner;
  let b = loser;
  let c = loser;
  c = a; // c = winner
  a = b; // a = loser
  b = c; // b = winner
  c = a; // c = loser
  a = c; // a = loser
  a = b; // a = winner
  b = c; // b = loser
  a(); // winner
  // alert('你好!');
  let image = document.getElementsByTagName('img');
  for (let i in image) {
    image[i].onclick = showAnswer; // 监听鼠标左击事件
    image[i].oncontextmenu = showAnswer; // 监听鼠标右击事件
    image[i].onmouseover = showAnswer; // 监听鼠标滑入
    // image[i].onmouseover = myHandler; // 监听鼠标滑入
    // image[i].onmouseout = myOut; // 监听鼠标滑出
  }
  // 筛选
  let passengers = [
    {name: "Jane Doloop", paid: true},
    {name: "Dr. Evel", paid: true},
    {name: "Sue Property", paid: false},
    {name: "John Funcall", paid: true}];
}

//鼠标滑出/滑入
function showAndHide(event) {
  let reg = new RegExp(/blur/);
  let image = event.target;
  if (reg.test(image.src)) {
    image.src = '../images/' + image.id + '.jpg';
  } else {
    image.src = '../images/' + image.id + 'blur.jpg';
  }
}

// 鼠标左击/右击,替换图片
function showAnswer(event) {
  // console.log(event.target);
  // let image = document.getElementById('zero');
  let reg = new RegExp(/blur/);
  let image = event.target;
  if (reg.test(image.src)) {
    image.src = '../images/' + image.id + '.jpg';
  } else {
    image.src = '../images/' + image.id + 'blur.jpg';
  }
  // 事件触发之后,间隔2秒图片重新恢复模糊状态
  /*
    // 方案一:
    setTimeout(function () {
      image.src = '../images/' + image.id + 'blur.jpg';
    }, 2000);
   */
  // 方案二:
  setTimeout(reblur, 2000, image);
  return false; // 这是阻止浏览器原有的鼠标右击事件的触发
}

function reblur(image) {
  image.src = '../images/' + image.id + 'blur.jpg';
}

// 鼠标划入
function myHandler(event) {
  event.target.src = '../images/' + event.target.id + '.jpg';
}

// 鼠标划出
function myOut(event) {
  event.target.src = '../images/' + event.target.id + 'blur.jpg';
}