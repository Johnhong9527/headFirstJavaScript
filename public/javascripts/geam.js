window.onload = function () {
  let btnEnter = document.getElementById('btnEnter');
  let coordinate = document.getElementById('coordinate');
  // 给`btnEnter`元素,添加点击事件
  // btnEnter.addEventListener('click', btn);
  // coordinate.addEventListener('keydown', btn);
  btnEnter.onclick = btn
  coordinate.onkeypress = key;

  function key(e) {
    if (e.charCode === 13) {
      btn()
    }
  }

  // 转化坐标
  let digital = {'A': 0, 'B': 7, 'C': 14, 'D': 21, 'E': 28, 'F': 35, 'G': 42};
  // 初始化战舰位置
  let ships = {0: Math.floor(Math.random() * 48), 1: Math.floor(Math.random() * 48), 2: Math.floor(Math.random() * 48)};
  console.log(ships)

  // 获取所有的td表格
  function btn() {
    console.log(coordinate.value);
    console.log(ships)
    let patt1 = new RegExp(/^[a-g][0-6]/i);
    if (patt1.test(coordinate.value)) {
      // 截取字符串中的首位,将其转化为大写字母
      let coordinateText = coordinate.value[0].toUpperCase();
      // 玩家输入的战舰坐标
      let coordinateNumber = Number.parseInt(digital[coordinateText]) + Number.parseInt(coordinate.value[1]);
      let tds = document.getElementsByTagName('td');
      // 判断玩家输入的坐标上,是否有战舰存在,如果有的话,就击沉战舰
      /*    let shipsBoolean = ships[0] === coordinateNumber;
          let shipsBoolean1 = ships[1] === coordinateNumber;
          let shipsBoolean2 = ships[2] === coordinateNumber;
          console.log('shipsBoolean=>' + shipsBoolean)
          console.log('shipsBoolean1=>' + shipsBoolean1)
          console.log('shipsBoolean2=>' + shipsBoolean2)*/
      if (ships[0] === coordinateNumber || ships[1] === coordinateNumber || ships[2] === coordinateNumber) {
        tds[coordinateNumber].setAttribute('class', 'ship');
      } else {
        tds[coordinateNumber].setAttribute('class', 'miss');
      }
      /*for (let i in ships) {
        console.log(Number.parseInt(ships[i]));
        console.log(coordinateNumber);
        if (Number.parseInt(ships[i]) === coordinateNumber) {
          // console.log(23)
          tds[coordinateNumber].setAttribute('class', 'ship');
        } else if (Number.parseInt(ships[i]) !== coordinateNumber) {
          // console.log(26)
          tds[coordinateNumber].setAttribute('class', 'miss');
        }
      }*/
    } else {
      alert('请输入正确的坐标;\n如: A6!')
    }


  }
};
