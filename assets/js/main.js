// --- DATA STORE FOR SCREENSHOT GALLERIES ---
const projectGalleries = {
    timesmed: [
        { src: "assets/images/screenshots/timesmed/onboard.webp", caption: "TimesMed — Onboarding" },
        { src: "assets/images/screenshots/timesmed/login.webp", caption: "TimesMed — Login" },
        { src: "assets/images/screenshots/timesmed/home.webp", caption: "TimesMed — Home dashboard and vitals" },
        { src: "assets/images/screenshots/timesmed/ai.webp", caption: "TimesMed — AI health consultation" }
    ],
    foode: [
        { src: "assets/images/screenshots/foode/home.webp", caption: "FOODe — Restaurant discovery" },
        { src: "assets/images/screenshots/foode/restaurant-details.webp", caption: "FOODe — Restaurant menu" },
        { src: "assets/images/screenshots/foode/orders.webp", caption: "FOODe — Cart and checkout" },
        { src: "assets/images/screenshots/foode/tracking.webp", caption: "FOODe — Live delivery tracking" }
    ],
    howdy: [
        { src: "assets/images/screenshots/howdy-chats/onboard.webp", caption: "Howdy Chats — Welcome and sign-up" },
        { src: "assets/images/screenshots/howdy-chats/chats.webp", caption: "Howdy Chats — Direct messages" },
        { src: "assets/images/screenshots/howdy-chats/discover.webp", caption: "Howdy Chats — Discover people and communities" },
        { src: "assets/images/screenshots/howdy-chats/feed.webp", caption: "Howdy Chats — Social feed" }
    ]
};

// --- DATA STORE FOR PROJECT DETAILS MODAL ---
const projectDetails = {
    taei: {
        title: "TAEI — Tamil Nadu Accident and Emergency Care Initiative",
        badge: "Government healthcare",
        badgeClass: "project-gov",
        overview: "TAEI is Tamil Nadu's state emergency care platform. It links ambulances, hospital emergency departments and district medical centers so trauma cases are handled consistently.",
        problem: "In trauma care, every minute counts. Paper triage and long multi-step forms slowed doctors down during the first critical hour.",
        contributions: [
            "Reworked the mobile triage screens for use in busy emergency departments.",
            "Reorganized layouts so the most critical patient data is visible first.",
            "Added error handling for API responses so the app copes with unreliable networks.",
            "Standardized text sizes and the color coding used for trauma severity."
        ],
        stack: ["Flutter", "Dart", "GetX", "HTTP Client", "Clean Architecture"],
        links: [
            { url: "https://play.google.com/store/apps/details?id=com.app.taei_gov", text: "Get it on Google Play" },
            { url: "https://taei.co.in", text: "Visit the TAEI portal" }
        ]
    },
    mtm: {
        title: "MTM — Makkalai Thedi Maruthuvam",
        badge: "Government healthcare",
        badgeClass: "project-gov",
        overview: "Makkalai Thedi Maruthuvam is a Tamil Nadu Government health scheme that brings care to people's homes, screening and treating hypertension, diabetes and palliative conditions.",
        problem: "Field health workers in rural and urban areas needed a simple, reliable app to record patient vitals, verify identity and sync records with national registries.",
        contributions: [
            "Worked on functional testing and UI updates, and integrated the core REST APIs for field triage and patient records.",
            "Helped take the Ayushman Bharat Digital Mission (ABDM) integration to production.",
            "Handled authentication tokens and required security headers, and implemented ABDM M1 features for creating ABHA IDs.",
            "Improved local caching so records can be collected offline."
        ],
        stack: ["Flutter", "Dart", "Chopper", "REST APIs", "ABDM / ABHA M1", "GetX"],
        link: "https://spc.tn.gov.in/uploads/M_T_M",
        linkText: "Read about the MTM program"
    },
    timesmed: {
        title: "TimesMed — Doctor–patient telehealth app",
        badge: "Telehealth",
        overview: "A healthcare app that connects patients, clinics and doctors for online consultations, appointment booking and health records.",
        problem: "Long live-monitoring sessions made the UI lag and used too much memory on mid-range phones.",
        contributions: [
            "Built dashboard screens that show doctors real-time vitals and patient metrics.",
            "Reduced unnecessary rebuilds and listeners to fix UI lag during long monitoring sessions.",
            "Integrated the AI-assisted health consultation feature.",
            "Simplified the login and onboarding flows for doctors and patients."
        ],
        stack: ["Flutter", "Dart", "Provider", "REST APIs", "Firebase"],
        link: null,
        confidentiality: "Screenshots use demo data, not real patient records."
    },
    foode: {
        title: "FOODe — Dine-in and food ordering app",
        badge: "Food delivery",
        overview: "A food app covering table booking, dine-in menus and home delivery with live courier tracking.",
        problem: "The cart, restaurant availability, live driver locations and payment callbacks all change at once, so the app needed one consistent way to manage state.",
        contributions: [
            "Built the front end and a single API layer for both food ordering and table booking.",
            "Added live delivery tracking on Google Maps with custom markers and routes.",
            "Integrated Razorpay checkout, including handling failed payments.",
            "Used GetX so the cart and totals update instantly."
        ],
        stack: ["Flutter", "Dart", "GetX", "Google Maps SDK", "Razorpay", "REST APIs"],
        link: null
    },
    howdy: {
        title: "Howdy Chats — Real-time messaging app",
        badge: "Social &amp; chat",
        overview: "A social app with real-time messaging, media feeds, people discovery and live status updates.",
        problem: "Chat apps have to keep connections alive and keep scrolling smooth even when many messages arrive at once.",
        contributions: [
            "Built the chat, feed and discovery screens.",
            "Used WebSockets to send and receive messages in real time.",
            "Used Cloud Firestore and Firebase Realtime Database to store messages and sync online status.",
            "Added media caching so the discovery feed scrolls smoothly."
        ],
        stack: ["Flutter", "Dart", "Firebase", "WebSockets", "Material UI"],
        links: [
            { url: "https://play.google.com/store/apps/details?id=com.timesmed.wego", text: "Get it on Google Play" },
            { url: "https://howdychats.com/", text: "Visit howdychats.com" }
        ]
    }
};

// --- THEME TOGGLE ---
const themeToggle = document.getElementById('theme-toggle');

function syncThemeToggleLabel() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
}

themeToggle.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    syncThemeToggleLabel();
});

syncThemeToggleLabel();

// --- MOBILE MENU CONTROLLER ---
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

function toggleMenu(open) {
    const isOpen = open !== undefined ? open : !navMenu.classList.contains('open');
    navMenu.classList.toggle('open', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen);
    if (isOpen) {
        menuToggle.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
    } else {
        menuToggle.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>`;
    }
}

menuToggle.addEventListener('click', () => toggleMenu());

document.querySelectorAll('.nav-link, .nav-resume-btn').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
});

// Close on outside click
document.addEventListener('click', (e) => {
    // composedPath() still includes the toggle after toggleMenu() swaps its icon out from under e.target
    const path = e.composedPath();
    if (navMenu.classList.contains('open') && !path.includes(navMenu) && !path.includes(menuToggle)) {
        toggleMenu(false);
    }
});

// --- STICKY HEADER ---
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}, { passive: true });

// --- INTERSECTION OBSERVER FOR SCROLL ANIMATIONS ---
const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));
} else {
    revealElements.forEach(el => el.classList.add('visible'));
}

// --- ACTIVE NAVIGATION HIGHLIGHT ---
const navSections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    navSections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}, { passive: true });

// --- LIGHTBOX GALLERY IMPLEMENTATION ---
let currentGalleryKey = null;
let currentImageIndex = 0;
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxCounter = document.getElementById('lightbox-counter');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');
const lightboxClose = document.getElementById('lightbox-close');

function openLightbox(galleryKey, index) {
    if (!projectGalleries[galleryKey]) return;
    currentGalleryKey = galleryKey;
    currentImageIndex = index || 0;
    renderLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function renderLightboxImage() {
    const list = projectGalleries[currentGalleryKey];
    if (!list || !list[currentImageIndex]) return;
    const item = list[currentImageIndex];
    
    lightboxImg.src = item.src;
    lightboxImg.alt = item.caption;
    lightboxCaption.textContent = item.caption;
    lightboxCounter.textContent = `Image ${currentImageIndex + 1} of ${list.length}`;

    // Graceful error handling for missing files
    lightboxImg.onerror = function() {
        this.alt = "Image failed to load";
    };
}

function nextLightboxImage() {
    const list = projectGalleries[currentGalleryKey];
    if (!list) return;
    currentImageIndex = (currentImageIndex + 1) % list.length;
    renderLightboxImage();
}

function prevLightboxImage() {
    const list = projectGalleries[currentGalleryKey];
    if (!list) return;
    currentImageIndex = (currentImageIndex - 1 + list.length) % list.length;
    renderLightboxImage();
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxNext.addEventListener('click', nextLightboxImage);
lightboxPrev.addEventListener('click', prevLightboxImage);

// Click outside image to close
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

// --- PROJECT DETAILS MODAL IMPLEMENTATION ---
const projectModal = document.getElementById('project-modal');
const modalContent = document.getElementById('modal-content');

function openProjectModal(key) {
    const data = projectDetails[key];
    if (!data) return;

    let stackHtml = data.stack.map(s => `<span class="tech-tag">${s}</span>`).join(' ');
    let contributionsHtml = data.contributions.map(c => `<li>${c}</li>`).join('');
    const links = data.links || (data.link ? [{ url: data.link, text: data.linkText || 'Visit Link' }] : []);
    let linkBtn = links.length
        ? `<div class="project-actions" style="margin-top: 14px;">${links.map(l => `<a href="${l.url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">${l.text}</a>`).join('')}</div>`
        : '';
    let confHtml = data.confidentiality ? `<div class="project-confidential-note" style="margin-top: 16px;"><span>${data.confidentiality}</span></div>` : '';

    modalContent.innerHTML = `
        <span class="project-domain-badge ${data.badgeClass || ''}">${data.badge}</span>
        <h3 class="project-modal-title" id="modal-title">${data.title}</h3>
        
        <div class="project-modal-section">
            <h4>Overview</h4>
            <p>${data.overview}</p>
        </div>

        <div class="project-modal-section">
            <h4>Problem & Context</h4>
            <p>${data.problem}</p>
        </div>

        <div class="project-modal-section">
            <h4>Key Technical Responsibilities</h4>
            <ul>${contributionsHtml}</ul>
        </div>

        <div class="project-modal-section">
            <h4>Technology Stack</h4>
            <div class="project-tech" style="margin-top: 6px;">${stackHtml}</div>
        </div>

        ${confHtml}
        ${linkBtn}
    `;

    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.querySelector('.project-modal-close').focus();
}

function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
}

projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) closeProjectModal();
});

// --- GLOBAL KEYBOARD ACCESSIBILITY (ESC, ARROWS) ---
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (lightbox.classList.contains('active')) closeLightbox();
        if (projectModal.classList.contains('active')) closeProjectModal();
        if (navMenu.classList.contains('open')) toggleMenu(false);
    }
    if (lightbox.classList.contains('active')) {
        if (e.key === 'ArrowRight') nextLightboxImage();
        if (e.key === 'ArrowLeft') prevLightboxImage();
    }
});

// --- CONTACT FORM SUBMISSION CONTROLLER ---
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');
const formError = document.getElementById('form-error');
const formErrorMsg = document.getElementById('form-error-msg');
const formSubmitBtn = document.getElementById('form-submit-btn');
const formBtnText = document.getElementById('form-btn-text');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    formSuccess.style.display = 'none';
    formError.style.display = 'none';

    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const message = document.getElementById('form-message').value.trim();

    // Client Validation
    if (!name || !email || !message) {
        formErrorMsg.textContent = "Please complete all required fields.";
        formError.style.display = 'flex';
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        formErrorMsg.textContent = "Please enter a valid email address.";
        formError.style.display = 'flex';
        return;
    }

    // Button loading state
    formSubmitBtn.disabled = true;
    formBtnText.textContent = "Sending...";

    const endpoint = contactForm.getAttribute('data-endpoint');

    if (endpoint && endpoint.startsWith('http')) {
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({ name, email, message })
            });
            if (response.ok) {
                formSuccess.style.display = 'flex';
                contactForm.reset();
            } else {
                throw new Error('Service responded with error');
            }
        } catch (err) {
            formErrorMsg.textContent = "Submission failed. Please email pradeepsankaran70@gmail.com directly.";
            formError.style.display = 'flex';
        } finally {
            formSubmitBtn.disabled = false;
            formBtnText.textContent = "Send Message";
        }
    } else {
        // Interactive fallback: opens mail client with encoded parameters
        setTimeout(() => {
            const mailtoUrl = `mailto:pradeepsankaran70@gmail.com?subject=${encodeURIComponent('Portfolio Contact from ' + name)}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message)}`;
            window.location.href = mailtoUrl;

            formSuccess.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Ready! Your mail client has been opened to send your message to pradeepsankaran70@gmail.com.</span>`;
            formSuccess.style.display = 'flex';
            contactForm.reset();
            formSubmitBtn.disabled = false;
            formBtnText.textContent = "Send Message";
        }, 400);
    }
});
