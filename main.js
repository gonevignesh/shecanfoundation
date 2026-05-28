/* =====================================================
   SHE CAN FOUNDATION — Main JavaScript
   Interactions, Animations, & Functionality
   ===================================================== */

// ─── INIT ANIMATIONS ON LOAD ───
window.addEventListener('load', () => {
  initScrollAnimations();
});


// ─── CUSTOM CURSOR ───
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');

if (cursor && follower && window.matchMedia('(pointer: fine)').matches) {
  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  // Hover effect on interactive elements
  const hoverTargets = document.querySelectorAll('a, button, input, textarea, select, .gallery-item, .service-card, .team-card');
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
      follower.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
      follower.classList.remove('hover');
    });
  });
}


// ─── NAVBAR ───
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-donate-btn');

// Scroll effect
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  
  // Add scrolled class
  if (scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Back to top visibility
  const btt = document.getElementById('back-to-top');
  if (btt) {
    if (scrollY > 600) {
      btt.classList.add('visible');
    } else {
      btt.classList.remove('visible');
    }
  }
});

// Highlight active page link based on pathname
const path = window.location.pathname;
const currentPage = path.split('/').pop() || 'index.html';
navLinks.forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === 'index.html' && href === '/') || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

// Hamburger menu
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });
}

// Close mobile menu on link click
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80;
      const pos = target.offsetTop - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  });
});


// ─── SCROLL ANIMATIONS ───
function initScrollAnimations() {
  const animElements = document.querySelectorAll('[data-animate]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute('data-delay') || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, parseInt(delay));
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  animElements.forEach(el => observer.observe(el));
}


// ─── STATS COUNTER ───
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'));
        const duration = 2000;
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(eased * target);
          
          if (target >= 1000) {
            el.textContent = current.toLocaleString() + '+';
          } else {
            el.textContent = current + '+';
          }
          
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        }
        
        requestAnimationFrame(updateCounter);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));
}
animateCounters();


// ─── TESTIMONIALS SLIDER ───
const track = document.getElementById('testimonial-track');
const prevBtn = document.getElementById('test-prev');
const nextBtn = document.getElementById('test-next');
const dotsContainer = document.getElementById('testimonial-dots');

if (track) {
  const cards = track.querySelectorAll('.testimonial-card');
  let currentSlide = 0;
  const totalSlides = cards.length;

  // Create dots
  cards.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('testimonial-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  function goToSlide(index) {
    currentSlide = index;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update dots
    dotsContainer.querySelectorAll('.testimonial-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
      goToSlide(currentSlide);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
      goToSlide(currentSlide);
    });
  }

  // Auto-play
  let autoPlay = setInterval(() => {
    currentSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
    goToSlide(currentSlide);
  }, 5000);

  // Pause on hover
  track.addEventListener('mouseenter', () => clearInterval(autoPlay));
  track.addEventListener('mouseleave', () => {
    autoPlay = setInterval(() => {
      currentSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
      goToSlide(currentSlide);
    }, 5000);
  });

  // Touch support
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left - next
        currentSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
      } else {
        // Swipe right - prev
        currentSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
      }
      goToSlide(currentSlide);
    }
  }, { passive: true });
}


// ─── CONTACT FORM ───
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const btn = document.getElementById('submit-btn');
    const originalHTML = btn.innerHTML;
    
    btn.innerHTML = `
      <span>Sending...</span>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin">
        <path d="M21 12a9 9 0 11-6.219-8.56"/>
      </svg>
    `;
    btn.disabled = true;
    
    // Simulate submission
    setTimeout(() => {
      btn.innerHTML = `
        <span>Message Sent!</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      `;
      btn.style.background = 'linear-gradient(135deg, #2A6F6A, #1D4E4B)';
      
      setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.disabled = false;
        btn.style.background = '';
        contactForm.reset();
      }, 2500);
    }, 1500);
  });
}

// Add spinning animation for loading state
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .spin { animation: spin 1s linear infinite; }
`;
document.head.appendChild(style);


// ─── NEWSLETTER FORM ───
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('input');
    const originalPlaceholder = input.placeholder;
    input.value = '';
    input.placeholder = 'Thanks for subscribing! ✨';
    setTimeout(() => {
      input.placeholder = originalPlaceholder;
    }, 3000);
  });
}


// ─── BACK TO TOP ───
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


// ─── PARALLAX ON HERO COLLAGE ───
if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  const cardTopLeft = document.querySelector('.card-top-left');
  const cardTopRight = document.querySelector('.card-top-right');
  const cardMidLeft = document.querySelector('.card-mid-left');
  const cardMidRight = document.querySelector('.card-mid-right');
  const cardBottomCenter = document.querySelector('.card-bottom-center');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY < window.innerHeight) {
      if (cardTopLeft) cardTopLeft.style.transform = `translateY(${scrollY * 0.08}px) rotate(-6deg)`;
      if (cardTopRight) cardTopRight.style.transform = `translateY(${scrollY * 0.05}px) rotate(4deg)`;
      if (cardMidLeft) cardMidLeft.style.transform = `translateY(${scrollY * 0.04}px) rotate(3deg)`;
      if (cardMidRight) cardMidRight.style.transform = `translateY(${scrollY * 0.06}px) rotate(-5deg)`;
      if (cardBottomCenter) cardBottomCenter.style.transform = `translateY(${scrollY * 0.03}px) rotate(2deg)`;
    }
  }, { passive: true });
}


// ─── TILT EFFECT ON CARDS ───
if (window.matchMedia('(pointer: fine)').matches) {
  const tiltCards = document.querySelectorAll('.service-card, .story-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      card.style.transform = `translateY(-8px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}
