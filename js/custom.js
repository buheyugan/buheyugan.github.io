document.addEventListener("DOMContentLoaded", function () {
  const toc = document.querySelector(".toc-container"); // 目录
  const footer = document.querySelector(".footer.gradient-2"); // 较
  const initialTop = 40; // 目录默认的 top 位置

  function updateTocPosition() {
    const footerRect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // 当 footer 进入视图时，调整目录位置
    if (footerRect.top < windowHeight) {
      toc.style.position = "fixed";
      toc.style.bottom = `150px`; // 20px 预留间距
    } else {
      toc.style.position = "fixed";
      toc.style.bottom = `${initialTop}px`;
    }
  }

  window.addEventListener("scroll", updateTocPosition);
  updateTocPosition(); // 页面加载时执行一次
});