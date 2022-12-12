// Javascript File
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
    opt.classList.remove("fa-bars");
    opt.classList.add("fa-xmark");
    val = true;
  } else {
    option.classList.remove("active-options");
    option.classList.add("options");
    opt.classList.remove("fa-xmark");
    opt.classList.add("fa-bars");
    val = false;
  }
}
var locate_btn = document.getElementById("locate-btn");
var location_map = document.getElementById("map");
value = false;
function showLocation() {
  if (!value) {
    location_map.classList.remove("locate-off");
    location_map.classList.add("locate-on");
    locate_btn.innerHTML = "Hide Location";
    locate_btn.style.background = "var(--b-l-green)";
    locate_btn.style.transition = "all 0.5s";
    value = true;
  } else {
    location_map.classList.remove("locate-on");
    location_map.classList.add("locate-off");
    locate_btn.innerHTML = "Show Location";
    locate_btn.style.background = "var(--b-green)";
    locate_btn.style.transition = "all 0.5s";
    value = false;
  }
}
