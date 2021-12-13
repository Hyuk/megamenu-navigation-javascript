var body = document.querySelector('body');
var nav = document.querySelector('nav');
var menuUl = document.querySelector('nav ul');
var menuLi = document.querySelectorAll('nav ul li');
var closeButton = document.querySelectorAll('.megamenu-close');

var menuMouseOn = false;

menuUl.addEventListener("click", function(e) { // 상위 메뉴에 클릭 이벤트를 추가한다.
  if(e.target && e.target.nodeName == "LI") {
    if (e.target.classList.contains('active')) { // 클릭한 상위 메뉴에 active 클래스가 이미 추가가 되어있는 경우, active 클래스를 삭제한다.
      e.target.classList.remove('active');
      console.log("remove active class");
    } else { // 클릭한 상위 메뉴에 active 클랙스가 없는 경우, active클래스를 추가한다. 
      for (let i = 0; i < menuLi.length; i++) { // 모든 상위 메뉴의 active 클래스를 삭제한다.
        menuLi[i].classList.remove('active');
      }
      e.target.classList.add('active'); // 클릭한 상위 메뉴에 active 클래스를 추가한다.
      console.log("add active class");
    }
  }
});

// 마우스 포인터가 Megamenu Navigation 안에 있는지, 밖에 있는지 확인하여 변수 저장
nav.addEventListener("mouseenter", function() {
  menuMouseOn = true;
});
nav.addEventListener("mouseleave", function() {
  menuMouseOn = false;
});

// 웹사이트 클릭시 마우스 포인터가 메뉴 바깥쪽에 위치한다면, 메뉴를 닫는다.
body.addEventListener("click", function() {
  if(!menuMouseOn) {
    for (let i = 0; i < menuLi.length; i++) { // 모든 상위 메뉴의 active 클래스를 삭제한다.
      menuLi[i].classList.remove('active');
    }
  }
});

// X close 버튼 클릭시 Megamenu 닫힘
for (let j = 0; j < closeButton.length; j++) {
  closeButton[j].addEventListener("click", function() {
    for (let i = 0; i < menuLi.length; i++) { // 모든 상위 메뉴의 active 클래스를 삭제한다.
      menuLi[i].classList.remove('active');
    }
  });
}
