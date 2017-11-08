window.onload = init;

function init() {
  // alert('你好!');
  let image = document.getElementsByTagName('img');
  for (let i in image) {
    image[i].onclick = showAnswer;
    image[i].oncontextmenu = showAnswer; // 监听鼠标右击事件
  }
  // image.onclick = showAnswer;
  // image.oncontextmenu = menu;

}

function menu() {
  // e.stopPropagation();
  console.log('右击');
  return false;
}

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
  return false; // 这是阻止浏览器原有的鼠标右击事件的触发
}