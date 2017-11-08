window.onload = () => {
  // console.log('hello');
  document.getElementById('patter').innerHTML = 'patter'
  let pater1 = document.getElementById('pater1');
  // 添加class属性
  pater1.setAttribute("class", "redtext");
  // 获取class属性 :只对 ID 有效，class无效
  let href = document.getElementById('href');
  console.log(href.getAttribute('href'));
//
  let name = document.getElementById('name');
  let btnName = document.getElementById('btnName');
  let btnS = document.getElementById('btnS');
  btnS.addEventListener('click',function () {
    console.log(document.activeElement.tagName)
  })
}