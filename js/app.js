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

    // Capture URL parameters and populate form fields
    function captureURLParameters() {
        const urlParams = new URLSearchParams(window.location.search);

        // Get the stag parameter and populate the hidden field
        const stag = urlParams.get('stag');
        if (stag) {
            const stagField = document.getElementById('s_tag_field');
            if (stagField) {
                stagField.value = stag;
            }
        }

        // Get other tracking parameters
        const cmp = urlParams.get('cmp');
        const prm = urlParams.get('prm');
        const trackingLink = urlParams.get('tracking_link');

        // Add hidden fields for additional parameters if they exist
        const form = document.querySelector('form[action*="formspree.io"]');
        if (form) {
            if (cmp) {
                const cmpField = document.createElement('input');
                cmpField.type = 'hidden';
                cmpField.name = 'cmp';
                cmpField.value = cmp;
                form.appendChild(cmpField);
            }

            if (prm) {
                const prmField = document.createElement('input');
                prmField.type = 'hidden';
                prmField.name = 'prm';
                prmField.value = prm;
                form.appendChild(prmField);
            }

            if (trackingLink) {
                const trackingField = document.createElement('input');
                trackingField.type = 'hidden';
                trackingField.name = 'tracking_link';
                trackingField.value = trackingLink;
                form.appendChild(trackingField);
            }
        }
    }

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
    document.addEventListener('DOMContentLoaded', function() {
        captureURLParameters();
        handleSuccessMessage();
    });
})();
