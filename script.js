var btn = document.getElementById("btn");
var spn = document.getElementById("spn");

function toggleBtn() {
  btn.classList.toggle("active");
  spn.classList.toggle("toggle-theme");
}

var faq = document.getElementsByClassName("faq-card");
var ans = document.getElementsByClassName("answer");

function answer_faq(num) {
  var Faq = faq[num];
  var Ans = ans[num];
  Faq.classList.toggle("active-faq");
}

var opt = document.getElementById("opt");
var option = document.getElementById("option");
val = false;
function toggleOptions() {
  if (!val) {
    option.classList.remove("options");
    option.classList.add("active-options");
    val = true;
  } else {
    option.classList.remove("active-options");
    option.classList.add("options");
    val = false;
  }
}
