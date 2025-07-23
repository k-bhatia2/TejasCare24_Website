document.addEventListener('DOMContentLoaded', function () {

    // --- Intersection Observer for scroll animations ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(elem => {
        revealObserver.observe(elem);
    });

    // --- Dynamic Service Modal ---
    const serviceModal = document.getElementById('serviceModal');
    if (serviceModal) {
        serviceModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget; // Button that triggered the modal

            // Extract info from data-* attributes
            const title = button.getAttribute('data-title');
            const image = button.getAttribute('data-image');
            const description = button.getAttribute('data-description');
            const whatsappLink = button.getAttribute('data-whatsapp-link');

            // Update the modal's content
            const modalTitle = serviceModal.querySelector('.modal-title');
            const modalImage = serviceModal.querySelector('#modal-service-image');
            const modalDescription = serviceModal.querySelector('#modal-service-description');
            const modalWhatsappBtn = serviceModal.querySelector('#modal-whatsapp-btn');

            modalTitle.textContent = title;
            modalImage.src = image;
            modalImage.alt = title;
            modalDescription.textContent = description;
            modalWhatsappBtn.href = whatsappLink;
        });
    }

});