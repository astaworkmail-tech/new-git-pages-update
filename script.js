/* ===== TAILWIND CONFIGURATION ===== */
    /* Purpose: Extends Tailwind with coffee-shop brand colors, fonts, and soft shadows */
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            espresso: '#2b1810',
            mocha: '#4a2c1a',
            crema: '#f7ead7',
            latte: '#fff8ef',
            caramel: '#c47a3a',
            roast: '#7a4424',
            sage: '#7d8b66'
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            display: ['Playfair Display', 'serif']
          },
          boxShadow: {
            warm: '0 24px 80px rgba(43, 24, 16, 0.16)',
            glow: '0 16px 50px rgba(196, 122, 58, 0.24)'
          }
        }
      }
    };

// ===== MOBILE MENU INITIALIZATION =====
    // Function: initializeMobileMenu()
    // Purpose: Connects hamburger menu button to the responsive mobile navigation panel
    // Triggers: Runs once on DOMContentLoaded and binds click events to toggle and links
    function initializeMobileMenu() {
      const toggleButton = document.getElementById('nav-menu-toggle');
      const mobileMenu = document.getElementById('mobile-menu');
      const openIcon = document.getElementById('menu-open-icon');
      const closeIcon = document.getElementById('menu-close-icon');
      const mobileLinks = document.querySelectorAll('.mobile-nav-link');

      if (!toggleButton || !mobileMenu || !openIcon || !closeIcon) {
        return;
      }

      toggleButton.addEventListener('click', function () {
        const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
        toggleButton.setAttribute('aria-expanded', String(!isExpanded));
        mobileMenu.classList.toggle('hidden');
        openIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
      });

      mobileLinks.forEach(function (link) {
        link.addEventListener('click', function () {
          toggleButton.setAttribute('aria-expanded', 'false');
          mobileMenu.classList.add('hidden');
          openIcon.classList.remove('hidden');
          closeIcon.classList.add('hidden');
        });
      });
    }

    // ===== MENU FILTER INITIALIZATION =====
    // Function: initializeMenuFilters()
    // Purpose: Shows menu items that match the selected category while keeping all favorites available
    // Triggers: Runs once on DOMContentLoaded and updates items when category buttons are clicked
    function initializeMenuFilters() {
      const filterButtons = document.querySelectorAll('.menu-filter-button');
      const menuItems = document.querySelectorAll('.menu-item');

      filterButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          const selectedFilter = button.getAttribute('data-filter');

          filterButtons.forEach(function (filterButton) {
            filterButton.classList.remove('active');
            filterButton.setAttribute('aria-selected', 'false');
          });

          button.classList.add('active');
          button.setAttribute('aria-selected', 'true');

          menuItems.forEach(function (item) {
            const itemCategory = item.getAttribute('data-category');
            const shouldShow = selectedFilter === 'all' || selectedFilter === itemCategory;

            item.classList.toggle('hidden', !shouldShow);
          });
        });
      });
    }

    // ===== FAQ ACCORDION INITIALIZATION =====
    // Function: initializeFaqAccordion()
    // Purpose: Allows visitors to expand and collapse common questions with accessible state updates
    // Triggers: Runs once on DOMContentLoaded and toggles answers on FAQ button click
    function initializeFaqAccordion() {
      const faqItems = document.querySelectorAll('.faq-item');

      faqItems.forEach(function (item) {
        const questionButton = item.querySelector('.faq-question');

        if (!questionButton) {
          return;
        }

        questionButton.addEventListener('click', function () {
          const isOpen = item.classList.contains('open');

          faqItems.forEach(function (faqItem) {
            const button = faqItem.querySelector('.faq-question');
            faqItem.classList.remove('open');

            if (button) {
              button.setAttribute('aria-expanded', 'false');
            }
          });

          if (!isOpen) {
            item.classList.add('open');
            questionButton.setAttribute('aria-expanded', 'true');
          }
        });
      });
    }

    // ===== RESERVATION FORM INITIALIZATION =====
    // Function: initializeReservationForm()
    // Purpose: Handles reservation form submission and displays a friendly confirmation message
    // Triggers: Runs once on DOMContentLoaded and responds to the form submit event
    function initializeReservationForm() {
      const reservationForm = document.getElementById('reservation-form');
      const successMessage = document.getElementById('reservation-success');

      if (!reservationForm || !successMessage) {
        return;
      }

      reservationForm.addEventListener('submit', function (event) {
        event.preventDefault();
        successMessage.classList.remove('hidden');
        reservationForm.reset();
        successMessage.focus?.();
      });
    }

    // ===== SCROLL REVEAL INITIALIZATION =====
    // Function: initializeScrollReveal()
    // Purpose: Reveals content cards and headings as visitors scroll through the page
    // Triggers: Runs once on DOMContentLoaded using IntersectionObserver when available
    function initializeScrollReveal() {
      const revealElements = document.querySelectorAll('.reveal');

      if (!('IntersectionObserver' in window)) {
        revealElements.forEach(function (element) {
          element.classList.add('is-visible');
        });
        return;
      }

      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.14
      });

      revealElements.forEach(function (element) {
        observer.observe(element);
      });
    }

    // ===== PAGE SCRIPT BOOTSTRAP =====
    // Function: DOMContentLoaded callback
    // Purpose: Starts all interactive landing page features after the HTML document is ready
    // Triggers: Browser fires DOMContentLoaded after parsing the document
    document.addEventListener('DOMContentLoaded', function () {
      initializeMobileMenu();
      initializeMenuFilters();
      initializeFaqAccordion();
      initializeReservationForm();
      initializeScrollReveal();
    });