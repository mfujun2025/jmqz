// 移动端菜单切换
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function() {
      siteNav.classList.toggle('open');
      navToggle.classList.toggle('active');
    });

    // 点击导航链接后关闭菜单
    siteNav.querySelectorAll('.nav-link').forEach(function(link) {
      link.addEventListener('click', function() {
        siteNav.classList.remove('open');
        navToggle.classList.remove('active');
      });
    });
  }

  // 平滑滚动（锚点链接）
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // 图片懒加载（浏览器原生支持时不做额外处理）
  // 这里可以添加自定义的图片加载动画等

  console.log('舒脉康网站已加载');
});
