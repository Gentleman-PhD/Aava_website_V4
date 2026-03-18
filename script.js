document.addEventListener("DOMContentLoaded", () => {
  // Sticky Navbar Glassmorphism Effect
  const navbar = document.getElementById("navbar");
  const heroSection = document.getElementById("hero");
  const navLogo = document.querySelector(".nav-logo");
  const mainHeroLogo = document.querySelector(".main-hero-logo");

  window.addEventListener("scroll", () => {
    if (mainHeroLogo && navLogo && navbar) {
      const giantLogoBottom = mainHeroLogo.getBoundingClientRect().bottom + window.scrollY;

      // Trigger both the dark background and the logo reveal at the same time
      if (window.scrollY > (giantLogoBottom - 80)) {
        navbar.classList.add("scrolled");
        navLogo.classList.add("visible");
      } else {
        navbar.classList.remove("scrolled");
        navLogo.classList.remove("visible");
      }
    }
  });

  // Smooth Scrolling for anchored links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Dynamic Animated Stats for Step 4 (The Difference) - Resets on scroll out
  const counters = document.querySelectorAll('.counter-val');
  const speed = 60; // adjust for speed

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const counter = entry.target;
      const target = parseFloat(counter.getAttribute('data-target')) || 0;

      if (entry.isIntersecting) {
        let count = 0;
        let isFloat = target % 1 !== 0;

        const updateCount = () => {
          const inc = target / speed;

          if (count < target) {
            count += inc;
            counter.innerText = isFloat ? count.toFixed(1) : Math.ceil(count);
            counter.dataset.animationId = requestAnimationFrame(updateCount);
          } else {
            counter.innerText = target;
          }
        };

        if (counter.dataset.animationId) {
          cancelAnimationFrame(parseInt(counter.dataset.animationId));
        }
        updateCount();
      } else {
        if (counter.dataset.animationId) {
          cancelAnimationFrame(parseInt(counter.dataset.animationId));
          counter.dataset.animationId = "";
        }
        counter.innerText = "0";
      }
    });
  }, { threshold: 0.1 });

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });

  // Dynamic Animated Stats for Step 2 (The Problem) - Resets on scroll out
  const problemStats = document.querySelectorAll('.problem-val');
  const problemSpeed = 60; // adjust for speed

  const problemObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const counter = entry.target;
      const target = parseFloat(counter.getAttribute('data-target')) || 0;

      if (entry.isIntersecting) {
        let count = 0;
        const updateCount = () => {
          const inc = target / problemSpeed;

          if (count < target) {
            count += inc;
            counter.innerText = Math.ceil(count);
            counter.dataset.animationId = requestAnimationFrame(updateCount);
          } else {
            counter.innerText = target;
          }
        };

        // Cancel any pending animation before starting a new one
        if (counter.dataset.animationId) {
          cancelAnimationFrame(parseInt(counter.dataset.animationId));
        }
        updateCount();
      } else {
        // Reset to 0 when scrolling away
        if (counter.dataset.animationId) {
          cancelAnimationFrame(parseInt(counter.dataset.animationId));
          counter.dataset.animationId = "";
        }
        counter.innerText = "0";
      }
    });
  }, { threshold: 0.1 });

  problemStats.forEach(stat => {
    problemObserver.observe(stat);
  });

  // Seamless Video Loop Trick
  const heroVideo = document.querySelector('.hero-video');
  const videoOverlay = document.createElement('div');
  videoOverlay.className = 'loop-overlay';
  Object.assign(videoOverlay.style, {
    position: 'absolute',
    top: '0', left: '0', width: '100%', height: '100%',
    backgroundColor: '#000',
    opacity: '0',
    transition: 'opacity 1s ease',
    pointerEvents: 'none',
    zIndex: '2'
  });

  if (heroVideo) {
    heroVideo.parentElement.insertBefore(videoOverlay, heroVideo.nextSibling);

    heroVideo.addEventListener('timeupdate', () => {
      const remainingTime = heroVideo.duration - heroVideo.currentTime;

      // Fade to black right before video ends
      if (remainingTime <= 1.5) {
        videoOverlay.style.opacity = '1';
      }
      // Fade back in when video resets
      else if (heroVideo.currentTime < 0.5) {
        videoOverlay.style.opacity = '0';
      }
    });
  }

});
