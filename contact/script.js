// ===== MOBILE MENU TOGGLE =====
    // Function: toggleMobileMenu()
    // Purpose: Show or hide the simple anchor navigation on mobile devices
    // Triggers: Click on the Menu button in the navbar
    function toggleMobileMenu() {
      const toggleButton = document.getElementById('navMenuToggle');
      const mobileMenu = document.getElementById('mobileMenu');
      const isOpen = mobileMenu.classList.toggle('is-open');

      toggleButton.setAttribute('aria-expanded', String(isOpen));
      toggleButton.textContent = isOpen ? 'Close' : 'Menu';
    }

    // ===== CONTACT FORM SUBMISSION =====
    // Function: handleContactFormSubmit(event)
    // Purpose: Create a pre-filled email for the coffee shop and show a friendly status message
    // Triggers: Submit event on the contact form
    function handleContactFormSubmit(event) {
      event.preventDefault();

      const form = event.currentTarget;
      const formData = new FormData(form);
      const fullName = formData.get('full_name');
      const email = formData.get('email');
      const topic = formData.get('topic');
      const message = formData.get('message');
      const status = document.getElementById('formStatus');

      const subject = encodeURIComponent('Coffee Shop Contact: ' + topic);
      const body = encodeURIComponent(
        'Name: ' + fullName + '\n' +
        'Email: ' + email + '\n' +
        'Topic: ' + topic + '\n\n' +
        message
      );

      status.classList.add('is-visible');
      window.location.href = 'mailto:hello@beanandbloom.coffee?subject=' + subject + '&body=' + body;
      form.reset();
    }

    // ===== PAGE EVENT BINDINGS =====
    // Purpose: Attach JavaScript behavior after the document is ready
    document.getElementById('navMenuToggle').addEventListener('click', toggleMobileMenu);
    document.getElementById('contactForm').addEventListener('submit', handleContactFormSubmit);