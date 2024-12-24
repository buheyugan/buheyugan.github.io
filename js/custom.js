document.addEventListener("DOMContentLoaded", function () {
  const tocWrapper = document.querySelector(".toc-container"); // 目录容器
  const headings = document.querySelectorAll("h2"); // 获取所有二级标题

  // 检查二级标题的数量
  if (headings.length > 4) {
    tocWrapper.style.display = "block"; // 显示目录
  } else {
    tocWrapper.style.display = "none"; // 隐藏目录
  }
});
