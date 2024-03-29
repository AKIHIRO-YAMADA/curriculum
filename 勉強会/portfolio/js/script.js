/* ーーーーーーーーーーーーーーー */
/* ページ内スクロール、TOPへ戻る */
/* ーーーーーーーーーーーーーーー */
$(function () {

  //ヘッダークラスの外側のクラスの高さを取得
  var navHeight = $(".header").outerHeight();

  // ID名が指定されているaタグをクリック
  $('a[href^="#"]').on("click", function () {
    // クリックしたaタグのhrefで指定されている値
    var href = $(this).attr("href");
    // hrefの値が#もしくは空だった場合にhtmlの開始タグの位置を、それ以外ならそのままの値
    var target = $(href == "#" || href == "" ? "html" : href);
    // ページの上端からの距離を求める
    var position = target.offset().top - navHeight;
    // アニメーション（swingでスクロールを加速）
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    // urlに#を表示させない（リンク先に移動しない）ようにするための処理
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300, "swing");
    return false;
  });

});

/* ーーーーーーーーーーーーー */
/* アニメーションスキルバー */
/* ーーーーーーーーーーーーー */

window.addEventListener('DOMContentLoaded', () => {

  // DOM要素を取得
  const skillEls = document.querySelectorAll('.skill');

  // カウントアップの設定
  const animationDuration = 2000;
  const frameDuration = 1000 / 60;
  const totalFrames = Math.round(animationDuration / frameDuration);
  const easeOut = t => t * (2 - t);
  const animateCountUp = el => {
    let frame = 0;
    const countTo = parseInt(el.innerHTML, 10);
    const counter = setInterval( () => {
      frame++;
      const progress = easeOut(frame / totalFrames);
      const currentCount = Math.round(countTo * progress);

      if (parseInt(el.innerHTML, 10) !== currentCount) {
        el.innerHTML = currentCount;
      }

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  };

  // Intersection observerに渡すコールバック関数
  const cb = function(entries, observer) {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        const proficiencyVal = entry.target.dataset.proficiency;
        const skillBar = entry.target.querySelector('.skill-bar');
        const percentage = entry.target.querySelector('.skill-percentage');
        const countup = entry.target.querySelector('.countup');

        skillBar.style.width = proficiencyVal + '%';
        percentage.style.opacity = 1;
        countup.textContent = proficiencyVal;
        animateCountUp(countup);

        observer.unobserve(entry.target);
      }
    });
  };

  // Intersection observerに渡すオプション
  const options = {
    rootMargin: "-50px 0px"
  };

  // IntersectionObserver初期化
  const io = new IntersectionObserver(cb, options);
  io.POLL_INTERVAL = 100; // Polyfillの設定
  skillEls.forEach(el => {
    io.observe(el);
  });

});
