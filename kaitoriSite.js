"use strict";
{
  const pagetop_btn = document.querySelector(".pagetop");

  // .pagetopをクリックしたら、ページ上部へスムーズに移動する部分

  // .pagetopをクリックしたら
  pagetop_btn.addEventListener("click", scroll_top);
  // ページ上部へスムーズに移動
  function scroll_top() {
    window.scroll({ top: 0, behavior: "smooth" });
  }
  // スクロールされたら表示
  window.addEventListener("scroll", scroll_event);
  function scroll_event() {
    if (window.pageYOffset > 100) {
      pagetop_btn.style.opacity = "1";
    } else if (window.pageYOffset < 100) {
      pagetop_btn.style.opacity = "0";
    }
  }
}

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}