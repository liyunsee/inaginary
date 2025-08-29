// commons.js - 공통 JS

document.addEventListener("DOMContentLoaded", function () {
  AOS.init();

  const btnTop = document.querySelector(".btn-top");
  // 스크롤 시 active 클래스 토글
  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY || window.pageYOffset;
    const halfScreen = window.innerHeight / 2;
    if (btnTop) {
      if (scrollY > halfScreen) {
        btnTop.classList.add("active");
      } else {
        btnTop.classList.remove("active");
      }
    }
  });

  // 페이지 상단 이동 버튼 기능
  if (btnTop) {
    btnTop.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // document.querySelector(".sec-title").classList.add("shake-horizontal");
});
