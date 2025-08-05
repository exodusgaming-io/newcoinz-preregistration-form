(() => {
    "use strict";
    let addWindowScrollEvent = false;
    setTimeout(() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", function(e) {
                document.dispatchEvent(windowScroll);
            });
        }
    }, 0);
    window["FLS"] = true;

    // Handle success message after form submission
    function handleSuccessMessage() {
        const urlParams = new URLSearchParams(window.location.search);
        const success = urlParams.get('success');

        if (success === 'true') {
            const registrationContent = document.getElementById('registration-content');
            const successMessage = document.getElementById('success-message');

            if (registrationContent && successMessage) {
                registrationContent.style.display = 'none';
                successMessage.style.display = 'block';

                // Clean up URL without page reload
                const newUrl = window.location.pathname;
                window.history.replaceState({}, document.title, newUrl);
            }
        }
    }

    // Run on page load
    document.addEventListener('DOMContentLoaded', handleSuccessMessage);
})();
