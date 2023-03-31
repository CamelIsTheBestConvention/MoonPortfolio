window.onload = function () {
  console.log(document.getElementById("bigCircle").getAttribute("data-id"));

  console.log(document.getElementById("bigCircle").getAttribute("class"));

  document.documentElement.setAttribute("color-theme", "pink");
  //최상위 root에 이 속성을 세팅
};

let darkMode = document.getElementById("darkMode");

darkMode.addEventListener("click", (event) => {
  //e ===> 이벤트가 일어난 객체
  //e.target ==> 이벤트가 일어난 객체를 선택
  //e.target.innerText => 일어난 개체를 선택해서 innerText 속성을 선택

  if (event.target.innerText === "RED") {
    document.documentElement.setAttribute("color-theme", "dark");
    event.target.innerText = "BLUE";
  } else {
    document.documentElement.setAttribute("color-theme", "pink");
    event.target.innerText = "RED";
  }
});

// 스크롤 내리기
// function scrollDown() {
//   window.scroll({
//     top: 890,
//     behavior: "smooth",
//   });
// }

// about me 클릭시 내려가기
function scrollDown() {
  window.scroll({
    top: window.innerHeight,
    behavior: "smooth",
  });
}

// 휠 이벤트 막기
window.addEventListener(
  "wheel",
  function (e) {
    e.preventDefault();
  },
  { passive: false }
);
