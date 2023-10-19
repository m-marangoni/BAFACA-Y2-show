const btns = document.querySelectorAll('.btn')
const display = document.querySelector('.display')
const pageFunc = [
  page1,
  page2,
  page3,
  page4,
  page5,
  page6,
]

for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = () => {
    render(i);
  }
}

function render(wang) {
  pageFunc[wang]();
}

function page1() {
  let p1 = `<p class="rl-text" style="transform: translate(180px, 80px)">最近我发现了规律的奇妙之处</p>`
  let p2 = `<p class="rl-text" style="transform: translate(130px, 160px)">时间无论什么，包括我所热爱的</p>`
  let p3 = `<p class="rl-text" style="transform: translate(350px, 200px)">规律这个词听起来无趣，是数学家，物理家才喜欢引用的词汇</p>`
  let p4 = `<p class="rl-text" style="transform: translate(280px, 280px)">发现规律使情爱有章可循，从而有趣</p>`
  let p6 = `<p style="font-size: 18px;transform: translate(40px, 540px)">9/2019</p>`
  let p8 = `<p style="transform: translate(20px, 100px)">发现规律的无限乐趣</p>`
  let p9 = `<p style="transform: translate(220px, 200px)">我认为是最自由</p>`
  let p10 = `<p style="transform: translate(250px, 50px)">琢磨不透的的艺术</p>`
  let p11 = `<p style="transform: translate(300px, 80px)">都是有规律的</p>`
  let p12 = `<p style="transform: translate(50px, 280px)">恰恰是食物永恒的共有的特征</p>`
  let p13 = `<p style="transform: translate(100px, 320px)">使事物严谨</p>`
  let p5 = `<p style="font-size: 18px;transform: translate(20px, -100px)">规律</p>`

  display.innerHTML = `<div class="page-content page1">
      ${p1}
      ${p2}
      ${p3}
      ${p4}
      ${p6}
      ${p8}
      ${p9}
      ${p10}
      ${p11}
      ${p12}
      ${p13}
      ${p5}
    </div>`
}

function page2() {
  let texts = `不知累般地追赶是飞向哪里的我忘了只觉得喘不上气了我穿过长长的楼梯拥挤的人群能不能让我先？我问他们听了一个传给前一个一个再传给前一个一直到柜台小姐那儿轰隆隆隆…柜台小姐身后的白色消失了蓝蓝的天空出现在了那个位置我还是没赶上！`

  function getPoints() {
    let angle = 1;
    let spacing = 120;
    let list = [];
    for (let i = 0; i < 250; i++) {
      let x = Math.cos(angle) * spacing;
      let y = Math.sin(angle) * spacing;
      list.push({ x: x + 220, y: y + 220 });
      angle -= 0.13; // 控制螺旋线的旋转速度
      spacing += 1.1; // 控制螺旋线的间距增加速度
    }

    return list;
  }

  let points = getPoints();

  let html = `<p style="font-size: 18px;transform: translate(180px, 260px)">土耳其之梦</p>
  <p style="font-size: 32px;transform: translate(120px, 280px)">快…快…</p>
  <p style="transform: translate(240px, 300px)">飞奔着，</p>
  <p style="font-size: 18px;transform: translate(190px, -30px)">9/2019</p>`

  for (let i = 0; i < texts.length; i++) {
    html += `<p style="position: absolute;transform: translate(${points[i].x}px, ${points[i].y}px)">${texts[i]}</p>`
  }

  display.innerHTML = `<div class="page-content page2">
    ${html}
  </div>`
}

function page3() {
  let points = getSinPoints(0, 500);

  let h1 = '<div style="transform: translate(220px, 420px) rotate(55deg);">'
  let t1 = '海浪也一层接着一层';
  for (let i = 0; i < t1.length; i++) {
    h1 += `<p style="position: absolute;transform: translate(${points[i].x}px, ${points[i].y}px)">${t1[i]}</p>`
  }
  h1 += '</div>'

  let h2 = '<div style="transform: translate(120px, 410px) rotate(45deg);">'
  let t2 = '浪里浪间我捕到了穿梭过草浪';
  for (let i = 0; i < t2.length; i++) {
    h2 += `<p style="position: absolute;transform: translate(${points[i].x}px, ${points[i].y}px)">${t2[i]}</p>`
  }
  h2 += '</div>'

  let h3 = '<div style="transform: translate(20px, 410px) rotate(35deg);">'
  let t3 = '风的身型隔着紧闭的古朴玻璃窗';
  for (let i = 0; i < t3.length; i++) {
    h3 += `<p style="position: absolute;transform: translate(${points[i].x}px, ${points[i].y}px)">${t3[i]}</p>`
  }
  h3 += '</div>'

  let h4 = '<div style="transform: translate(-20px, 450px) rotate(15deg);">'
  let t4 = '树叶无声地原地起舞世界静了只剩下眼前这场盛大哑剧';
  for (let i = 0; i < t4.length; i++) {
    h4 += `<p style="position: absolute;transform: translate(${points[i].x}px, ${points[i].y}px)">${t4[i]}</p>`
  }
  h4 += '</div>'

  display.innerHTML = `<div class="page-content page3">
    <p style="font-size: 18px;transform: translate(20px, 80px) rotate(-45deg);">光在那窗前晶莹的蜘蛛丝上流动</p>
    <p style="font-size: 18px;transform: translate(220px, 200px);">那绿草的海</p>
    <p style="font-size: 18px;transform: translate(200px, 180px) rotate(-15deg);"><span style="font-size: 36px">风</span>儿不停歇呀</p>
    ${h1}
    ${h2}
    ${h3}
    ${h4}
    <p style="font-size: 24px;transform: translate(20px, 0px);">发呆</p>
    <p style="font-size: 18px;transform: translate(20px, 0px);">5/2019</p>

  </div>`
}

function getSinPoints(s, e) {
  let list = []
  for (let x = s; x <= e; x += 20) {
    let y = 20 * Math.sin(x * 0.05);  // 正弦函数公式
    list.push({ x, y })
  }
  return list;
}

function page4() {
  display.innerHTML = `<div class="page-content page4">
    <p style="font-size: 24px;transform: translate(80px, 20px)">入冬</p>
    <p class="rl-text" style="transform: translate(50px, 60px)">路上拿着已经不太热乎的了的可颂</p>
    <p class="rl-text" style="transform: translate(100px, 60px)">倒数三秒闭眼</p>
    <p class="rl-text" style="transform: translate(150px, 60px)">咬下第一口 清脆的爆炸声</p>
    <p class="rl-text" style="transform: translate(200px, 60px)">那是心脏裂开的声音</p>
    <p style="font-size: 18px;transform: translate(80px, 480px) rotate(45deg);">花儿</p>
    <p style="font-size: 18px;transform: translate(120px, 160px) rotate(-45deg)">从心</p>
    <p style="font-size: 18px;transform: translate(160px, 430px) rotate(45deg)">里破</p>
    <p style="font-size: 18px;transform: translate(190px, 120px) rotate(-45deg)">土而出</p>

    <p style="font-size: 18px;transform: translate(0px, 500px) rotate(45deg)">带着</p>
    <p style="font-size: 18px;transform: translate(40px, 180px) rotate(-45deg)">暖阳</p>
    <p style="font-size: 18px;transform: translate(85px, 450px) rotate(45deg)">的寒风</p>

    <p style="font-size: 32px;transform: translate(280px, 320px)">吹</p>
    <p style="transform: translate(280px, 320px)">11/2019</p>
  </div>`
}

function page5() {
  display.innerHTML = `<div class="page-content page5">
    <p style="transform: translate(100px, 40px)">脖子弯曲成直角扬起</p>
    <p class="rl-text" style="transform: translate(220px, 50px)">脑袋</p>
    <p style="transform: translate(220px, 200px)">星光在蓝色的黑布上</p>
    <p class="rl-text" style="transform: translate(330px, 200px)">眯起眼睛看不稳，就要掉下来了</p>
    <p style="font-size: 18px;transform: translate(10px, 160px) rotate(-25deg);">砰砰砰，从深远处传来</p>
    <p style="transform: translate(200px, 230px)">烟花</p>
    <p style="transform: translate(100px, 230px)">还有空气中的炭火，木头，旧房子</p>
    <p style="transform: translate(160px, 260px)" class="close-eye">闭眼</p>
    <p style="transform: translate(50px, 300px)">好像能听到记忆的深处</p>
    <p style="font-size: 18px;transform: translate(250px, 330px)">冬夜</p>
    <p style="transform: translate(0, 0)">12/2019</p>
  </div>`
}

function page6() {
  display.innerHTML = `<div class="page-content page5">
    <p style="font-size: 18px;transform: translate(50px, 20px) rotate(-20deg);">我身上的汗毛一起竖起</p>
    <p style="font-size: 18px;transform: translate(60px, 150px) rotate(10deg);">瞳孔无限的放大放大嗓子眼锁紧，呼吸加快</p>
    <p style="font-size: 18px;transform: translate(80px, 150px) rotate(-10deg);">列车要驶过来了越来越近了</p>
    <p style="font-size: 18px;transform: translate(90px, 200px) rotate(0deg);">咚！铁轨的声音变闷了</p>
    <p style="font-size: 18px;transform: translate(80px, 250px) rotate(10deg);">我的灵魂被撞飞了</p>
    <p style="font-size: 18px;transform: translate(80px, 240px) rotate(-10deg);">一会儿我的身体在站台上踉跄了两下</p>
    <p style="font-size: 18px;transform: translate(80px, 320px) rotate(10deg);">车身就在我眼前，激烈的摩擦着我的脸</p>
    <p style="font-size: 18px;transform: translate(80px, 350px) rotate(-10deg);">好多尘土和细小的，精灵似的落叶</p>
    <p class="rl-text" style="height: 100vh;transform: translate(420px, -180px)">“况且况且况且…“列车猛烈地从我的身体里抽离我听见精灵们嬉笑的走了</p>
    <p style="font-size: 24px;transform: translate(320px, -160px);">刺激</p>
    <p style="transform: translate(320px, -160px);">6/2019</p>
  </div>`
}

let bool = true;
function cover() {
  let img = document.getElementById('img')
  setInterval(() => {
    if (img) {
      img.src = bool ? './image/cover2.jpg' : './image/cover1.jpg'
      bool = !bool
    }
  }, 2000);
}

cover()
