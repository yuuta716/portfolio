"use strict";

{
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.querySelector('.Phone-carousel ul');
  const slides = ul.children;
  const dots = [];
  let currentIndex = 0;

  function updateButtons() {
    prev.classList.remove('hidden');
    next.classList.remove('hidden');

    if (currentIndex === 0) {
      prev.classList.add('hidden');
    }

    if (currentIndex === slides.length - 1) {
      next.classList.add('hidden');
    }
  }

  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
    centerMode: true;       //両サイドを表示
    centerPadding: "30%";    //両サイドをどれぐらい表示するか
  };

  function setupDots() {
    for (let i = 0; i < slides.length; i++) {
      const button = document.createElement('button');
      button.addEventListener('click', () => {
        currentIndex = i;
        updateDots();
        updateButtons();
        moveSlides();
      });
      dots.push(button);
      // document.querySelector('nav').appendChild(button);
    }

    dots[0].classList.add('current');
  }

  function updateDots() {
    dots.forEach(dot => {
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
  };

  updateButtons();
  setupDots();

  next.addEventListener('click', () => {
    currentIndex++;
    updateButtons();
    updateDots();
    moveSlides();
  });

  prev.addEventListener('click', () => {
    currentIndex--;
    updateButtons();
    updateDots();
    moveSlides();
  });

  window.addEventListener('resize', () => {
    moveSlides();
  });
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

{
  const dts = document.querySelectorAll('.Js-accordion-toggle');

  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('appear');

      dts.forEach(el => {
        if (dt !== el) {
          el.parentNode.classList.remove('appear');
        }
      });
    });
  });
}

{
  const dts = document.querySelectorAll('.js-accordion-toggle');

  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('appear');

      dts.forEach(el => {
        if (dt !== el) {
          el.parentNode.classList.remove('appear');
        }
      });
    });
  });
}

{
  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      };
      entry.target.classList.add("appear");
      obs.unobserve(entry.target);
    });
  };
  const options = {
    threshold: 0.2,
  };

  const observer = new
    IntersectionObserver(callback, options);//場所
  const targets = document.querySelectorAll(".menuItem");//監視されるもの
  targets.forEach(target => {
    observer.observe(target);//obseverにtargetが入るときの.observe監視対象にする
  });
}


{
  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      };
      entry.target.classList.add("appear");
      obs.unobserve(entry.target);
    });
  };
  const options = {
    threshold: 0.2,
  };

  const observer = new
    IntersectionObserver(callback, options);//場所
  const targets = document.querySelectorAll(".sec4-menuItem");//監視されるもの
  targets.forEach(target => {
    observer.observe(target);//obseverにtargetが入るときの.observe監視対象にする
  });
}


{
  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      };
      entry.target.classList.add("appear");
      obs.unobserve(entry.target);
    });
  };
  const options = {
    threshold: 0.2,
  };

  const observer = new
    IntersectionObserver(callback, options);//場所
  const targets = document.querySelectorAll(".sec5Img");//監視されるもの
  targets.forEach(target => {
    observer.observe(target);//obseverにtargetが入るときの.observe監視対象にする
  });
}

{
  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      };
      entry.target.classList.add("appear");
      obs.unobserve(entry.target);
    });
  };
  const options = {
    threshold: 0.2,
  };

  const observer = new
    IntersectionObserver(callback, options);//場所
  const targets = document.querySelectorAll(".sec5Img-r");//監視されるもの
  targets.forEach(target => {
    observer.observe(target);//obseverにtargetが入るときの.observe監視対象にする
  });
}

{
  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      };
      entry.target.classList.add("appear");
      obs.unobserve(entry.target);
    });
  };
  const options = {
    threshold: 0.2,
  };

  const observer = new
    IntersectionObserver(callback, options);//場所
  const targets = document.querySelectorAll(".sec6Img");//監視されるもの
  targets.forEach(target => {
    observer.observe(target);//obseverにtargetが入るときの.observe監視対象にする
  });
}

{
  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      };
      entry.target.classList.add("appear");
      obs.unobserve(entry.target);
    });
  };
  const options = {
    threshold: 0.2,
  };

  const observer = new
    IntersectionObserver(callback, options);//場所
  const targets = document.querySelectorAll(".sec6-menuItem");//監視されるもの
  targets.forEach(target => {
    observer.observe(target);//obseverにtargetが入るときの.observe監視対象にする
  });
}

{
  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      };
      entry.target.classList.add("appear");
      obs.unobserve(entry.target);
    });
  };
  const options = {
    threshold: 0.2,
  };

  const observer = new
    IntersectionObserver(callback, options);//場所
  const targets = document.querySelectorAll(".sec7Img-r");//監視されるもの
  targets.forEach(target => {
    observer.observe(target);//obseverにtargetが入るときの.observe監視対象にする
  });
}


{
  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      };
      entry.target.classList.add("appear");
      obs.unobserve(entry.target);
    });
  };
  const options = {
    threshold: 0.2,
  };

  const observer = new
    IntersectionObserver(callback, options);//場所
  const targets = document.querySelectorAll(".sec7-menuItem");//監視されるもの
  targets.forEach(target => {
    observer.observe(target);//obseverにtargetが入るときの.observe監視対象にする
  });
}

