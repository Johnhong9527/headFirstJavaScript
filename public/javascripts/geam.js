window.onload = function () {
  let btnEnter = document.getElementById('btnEnter');
  let coordinate = document.getElementById('coordinate');
  // 给节点添加点击事件
  btnEnter.onclick = btn;
  coordinate.onkeypress = key;
  function key(e) {
    // 监听`enter`键是否被点击
    if (e.charCode === 13) {
      btn()
    }
  }
  // 转化坐标
  let digital = {'A': 0, 'B': 7, 'C': 14, 'D': 21, 'E': 28, 'F': 35, 'G': 42};
  // 使用随机数,初始化战舰位置
  let ships = {0: Math.floor(Math.random() * 48), 1: Math.floor(Math.random() * 48), 2: Math.floor(Math.random() * 48)};
  console.log(ships);
  // 获取所有的`td`
  function btn() {
    console.log(coordinate.value);
    let patt1 = new RegExp(/^[a-g][0-6]/i);
    if (patt1.test(coordinate.value)) {
      // 截取字符串中的首位,将其转化为大写字母
      let coordinateText = coordinate.value[0].toUpperCase();
      // 玩家输入的战舰坐标
      let coordinateNumber = Number.parseInt(digital[coordinateText]) + Number.parseInt(coordinate.value[1]);
      // 获取所有名为 `td` 的节点
      let tds = document.getElementsByTagName('td');
      // 判断玩家输入的坐标上,是否有战舰存在,如果有的话,就击沉战舰
      if (ships[0] === coordinateNumber || ships[1] === coordinateNumber || ships[2] === coordinateNumber) {
        // 击沉战舰
        tds[coordinateNumber].setAttribute('class', 'ship');
      } else {
        // 没有击沉战舰
        tds[coordinateNumber].setAttribute('class', 'miss');
      }
    } else {
      alert('请输入正确的坐标;\n如: A6!')
    }
  }
};
