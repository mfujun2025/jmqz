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

  // 微信弹窗功能
  const wechatModal = document.getElementById('wechatModal');
  const wechatClose = document.getElementById('wechatClose');
  const wechatOverlay = document.getElementById('wechatOverlay');

  function openWechatModal() {
    if (wechatModal) {
      wechatModal.classList.add('show');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeWechatModal() {
    if (wechatModal) {
      wechatModal.classList.remove('show');
      document.body.style.overflow = '';
    }
  }

  // 所有带 data-wechat 属性的元素点击打开弹窗
  document.querySelectorAll('[data-wechat]').forEach(function(el) {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      openWechatModal();
    });
  });

  if (wechatClose) {
    wechatClose.addEventListener('click', closeWechatModal);
  }
  if (wechatOverlay) {
    wechatOverlay.addEventListener('click', closeWechatModal);
  }
  // ESC键关闭
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeWechatModal();
  });

  console.log('舒脉康网站已加载');
});
