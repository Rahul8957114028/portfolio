/* ===================================================================
   PORTFOLIO MINI PROJECT - JAVASCRIPT
   Features: Mobile Nav Toggle, Active Link Spy, Dark Theme, Form Mock
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  /* ------------------- SHOW / HIDE MOBILE MENU ------------------- */
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    });
  }

  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  }

  // Remove menu when clicking on any navigation link
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  });

  /* ------------------- CHANGE HEADER BACKGROUND ON SCROLL ------------------- */
  const header = document.getElementById('header');
  function scrollHeader() {
    if (window.scrollY >= 50) {
      header.classList.add('scroll-header');
    } else {
      header.classList.remove('scroll-header');
    }
  }
  window.addEventListener('scroll', scrollHeader);

  /* ------------------- SCROLL REVEAL / ACTIVE SECTION SPY ------------------- */
  const sections = document.querySelectorAll('section[id]');

  function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 80;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(`.nav__menu a[href*='${sectionId}']`);

      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add('active-link');
        } else {
          navItem.classList.remove('active-link');
        }
      }
    });
  }
  window.addEventListener('scroll', scrollActive);

  /* ------------------- SHOW SCROLL TO TOP BUTTON ------------------- */
  const scrollUp = document.getElementById('scroll-up');
  function handleScrollUp() {
    if (window.scrollY >= 350) {
      scrollUp.classList.add('show-scroll');
    } else {
      scrollUp.classList.remove('show-scroll');
    }
  }
  window.addEventListener('scroll', handleScrollUp);

  /* ------------------- DARK / LIGHT THEME TOGGLE ------------------- */
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const darkTheme = 'dark-theme';
  const iconTheme = 'fa-sun';

  // Retrieve saved theme preference from localStorage
  const selectedTheme = localStorage.getItem('selected-theme');

  if (selectedTheme) {
    if (selectedTheme === 'dark') {
      document.body.classList.add(darkTheme);
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add(iconTheme);
    } else {
      document.body.classList.remove(darkTheme);
      themeIcon.classList.remove(iconTheme);
      themeIcon.classList.add('fa-moon');
    }
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    const isDark = document.body.classList.contains(darkTheme);

    if (isDark) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add(iconTheme);
      localStorage.setItem('selected-theme', 'dark');
    } else {
      themeIcon.classList.remove(iconTheme);
      themeIcon.classList.add('fa-moon');
      localStorage.setItem('selected-theme', 'light');
    }
  });

  /* ------------------- CONTACT FORM SUBMISSION (MOCK) ------------------- */
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simple visual validation
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !subject || !message) {
        formStatus.style.color = '#ef4444';
        formStatus.textContent = 'Please fill out all required fields.';
        return;
      }

      // Simulate sending state
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Sending...`;
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        formStatus.style.color = '#10b981';
        formStatus.textContent = `Thank you, ${name}! Your message has been sent successfully.`;

        // Clear form
        contactForm.reset();

        // Clear message after 5 seconds
        setTimeout(() => {
          formStatus.textContent = '';
        }, 5000);
      }, 1200);
    });
  }
});
