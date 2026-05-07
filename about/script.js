// ===== MOBILE MENU TOGGLE =====
    // Function: toggleMobileMenu()
    // Purpose: Show or hide navigation menu on mobile devices
    // Triggers: Click on the hamburger menu button
    function toggleMobileMenu() {
      const menuButton = document.getElementById('nav-menu-toggle');
      const mobileMenu = document.getElementById('mobile-menu');
      const isOpen = mobileMenu.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    }

    // ===== CLOSE MOBILE MENU AFTER LINK CLICK =====
    // Function: closeMobileMenu()
    // Purpose: Collapse mobile navigation after an anchor link is selected
    // Triggers: Click on any mobile menu anchor
    function closeMobileMenu() {
      const menuButton = document.getElementById('nav-menu-toggle');
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenu.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation menu');
    }

    // ===== FAQ ACCORDION TOGGLE =====
    // Function: toggleFaqItem(button)
    // Purpose: Expand or collapse a single FAQ item while updating accessibility state
    // Triggers: Click on FAQ question buttons
    function toggleFaqItem(button) {
      const faqItem = button.closest('.faq-item');
      const icon = button.querySelector('span[aria-hidden="true"]');
      const isOpen = faqItem.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(isOpen));
      if (icon) {
        icon.textContent = isOpen ? '−' : '+';
      }
    }

    // ===== NEWSLETTER FORM SUBMISSION =====
    // Function: handleNewsletterSubmit(event)
    // Purpose: Validate the newsletter form and show a friendly success message
    // Triggers: Submit event on the newsletter form
    function handleNewsletterSubmit(event) {
      event.preventDefault();
      const form = event.target;
      const emailField = document.getElementById('newsletter-email');
      const message = document.getElementById('newsletter-message');

      if (!emailField.value || !emailField.checkValidity()) {
        emailField.focus();
        return;
      }

      form.reset();
      message.classList.remove('hidden');
    }

    // ===== INITIALIZE PAGE INTERACTIONS =====
    // Function: initializePageInteractions()
    // Purpose: Attach event listeners after the document has loaded
    // Triggers: DOMContentLoaded browser event
    function initializePageInteractions() {
      const menuButton = document.getElementById('nav-menu-toggle');
      const mobileLinks = document.querySelectorAll('#mobile-menu a');
      const faqButtons = document.querySelectorAll('.faq-toggle');
      const newsletterForm = document.getElementById('newsletter-form');

      if (menuButton) {
        menuButton.addEventListener('click', toggleMobileMenu);
      }

      mobileLinks.forEach(function(link) {
        link.addEventListener('click', closeMobileMenu);
      });

      faqButtons.forEach(function(button) {
        button.addEventListener('click', function() {
          toggleFaqItem(button);
        });
      });

      if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
      }
    }

    // ===== DOCUMENT READY LISTENER =====
    // Purpose: Start JavaScript interactions only after HTML elements are available
    document.addEventListener('DOMContentLoaded', initializePageInteractions);