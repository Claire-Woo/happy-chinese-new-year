let pin_yin = [
 ["xin" , "nian" , "kuai" , "le"],
 ["gong", "xi" , "fa" , "cai"],
 ["cai" , "yuan" , "guang" , "jin"],
 ["yi" , "ben" , "wan" , "li"],
 ["da" ,"ji" , "da" , "li"],
 ["xin" , "xiang" , "shi" , "cheng"],
 ["wan" , "shi" , "ru" , "yi"],
 ["shen" , "ti" , "jian" , "kang"],
 ["long" , "ma" , "jing" , "shen"],
 ["yi" , "fan" , "feng" , "shun"]
]

let chinese_phrase = [
    ["新" , "年" , "快" , "乐"],
    ["恭" , "喜" , "发" , "财"],
    ["财" , "源" , "广" , "进"],
    ["一" , "本" , "萬" , "利"],
    ["大" , "吉" , "大" , "利"],
    ["心" , "想" , "事" , "成"],
    ["万" , "事" , "如" , "意"],
    ["身" , "体" , "健" , "康"],
    ["龙" , "马" , "精" , "神"],
    ["一" , "帆" , "风" , "顺"]
]




let english_phrase = [
  "(Happy Chinese New Year)"  ,
  "(May you be happy and prosperous)",
  "(May your money and treasures be plentiful)",
  "(Wishing that you reap a huge profit from a small investment)",
  "(May you have great luck and great profit)",
  "(May all your wishes come true)",
  "(May everything go well for you)",
  "(Wishing you good health)",
  "(Wishing you lots of energy and good spirit)",
  "(May all that you do go smoothly)"
]
var p_1 = document.getElementById("p_1");
var p_2 = document.getElementById("p_2");
var p_3 = document.getElementById("p_3");
var p_4 = document.getElementById("p_4");

var c_1 = document.getElementById("c_1");
var c_2 = document.getElementById("c_2");
var c_3 = document.getElementById("c_3");
var c_4 = document.getElementById("c_4");

var english = document.getElementById("el");

function onClick() {
  let num = Math.floor(Math.random() * english_phrase.length);
  english.textContent = english_phrase[num];
  c_1.textContent = chinese_phrase[num][0];
  c_2.textContent = chinese_phrase[num][1];
  c_3.textContent = chinese_phrase[num][2];
  c_4.textContent = chinese_phrase[num][3];

  p_1.textContent = pin_yin[num][0];
  p_2.textContent = pin_yin[num][1];
  p_3.textContent = pin_yin[num][2];
  p_4.textContent = pin_yin[num][3];

} 

button.addEventListener("click" , onClick);