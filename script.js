/**
 * Infotech Wizard Landing Page - Vanilla JavaScript
 * Handles accessible mobile drawer navigation, scroll effects, and link interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------------------
  // DOM Elements
  // -------------------------------------------------------------------------
  const siteHeader = document.getElementById('header');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerNavLinks = document.querySelectorAll('.drawer-nav-link');
  const desktopNavLinks = document.querySelectorAll('.nav-link');

  // -------------------------------------------------------------------------
  // Mobile Navigation Drawer Functions
  // -------------------------------------------------------------------------
  const openDrawer = () => {
    mobileDrawer.classList.add('active');
    drawerBackdrop.classList.add('active');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    drawerBackdrop.setAttribute('aria-hidden', 'false');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';

    // Focus close button for keyboard accessibility
    if (closeDrawerBtn) {
      setTimeout(() => closeDrawerBtn.focus(), 100);
    }
  };

  const closeDrawer = () => {
    mobileDrawer.classList.remove('active');
    drawerBackdrop.classList.remove('active');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    drawerBackdrop.setAttribute('aria-hidden', 'true');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';

    // Return focus to hamburger button
    if (hamburgerBtn) {
      hamburgerBtn.focus();
    }
  };

  // -------------------------------------------------------------------------
  // Event Listeners for Drawer
  // -------------------------------------------------------------------------
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (closeDrawerBtn) {
    closeDrawerBtn.addEventListener('click', closeDrawer);
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', closeDrawer);
  }

  // Close drawer on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('active')) {
      closeDrawer();
    }
  });

  // Close drawer when any nav link inside it is clicked
  drawerNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // -------------------------------------------------------------------------
  // Header Sticky Shadow on Scroll
  // -------------------------------------------------------------------------
  const handleScroll = () => {
    if (window.scrollY > 20) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // -------------------------------------------------------------------------
  // Smooth Active Nav Link Switching on Scroll (Intersection Observer)
  // -------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          
          desktopNavLinks.forEach(link => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });

          drawerNavLinks.forEach(link => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(sec => sectionObserver.observe(sec));
  }
});

