// --- DATA STORE FOR SCREENSHOT GALLERIES ---
const projectGalleries = {
    timesmed: [
        { src: "assets/images/screenshots/timesmed/onboard.webp", caption: "TimesMed — Onboarding Flow & Telehealth Welcome" },
        { src: "assets/images/screenshots/timesmed/login.webp", caption: "TimesMed — Secure Practitioner & Patient Authentication" },
        { src: "assets/images/screenshots/timesmed/home.webp", caption: "TimesMed — Clinical Home Dashboard & Diagnostic Vitals" },
        { src: "assets/images/screenshots/timesmed/ai.webp", caption: "TimesMed — AI Health Consultation & Diagnostic Screening" }
    ],
    foode: [
        { src: "assets/images/screenshots/foode/home.webp", caption: "FOODe — Restaurant Discovery & Featured Dine-In Venues" },
        { src: "assets/images/screenshots/foode/restaurant-details.webp", caption: "FOODe — Restaurant Menu & Customizable Food Items" },
        { src: "assets/images/screenshots/foode/orders.webp", caption: "FOODe — Multi-Tier Cart & Order Processing Checkout" },
        { src: "assets/images/screenshots/foode/tracking.webp", caption: "FOODe — Real-Time Geolocation & Live Delivery Tracking" }
    ],
    howdy: [
        { src: "assets/images/screenshots/howdy-chats/onboard.webp", caption: "Howdy Chats — Welcome & User Identity Onboarding" },
        { src: "assets/images/screenshots/howdy-chats/chats.webp", caption: "Howdy Chats — Asynchronous Direct Messaging & Active Threads" },
        { src: "assets/images/screenshots/howdy-chats/discover.webp", caption: "Howdy Chats — User Discovery & Community Search" },
        { src: "assets/images/screenshots/howdy-chats/feed.webp", caption: "Howdy Chats — Interactive Social Media Timeline & Status Feed" }
    ]
};

// --- DATA STORE FOR PROJECT DETAILS MODAL ---
const projectDetails = {
    taei: {
        title: "TAEI — Tamil Nadu Accident and Emergency Care Initiative",
        badge: "Government Healthcare &bull; State Health Network",
        badgeClass: "project-gov",
        overview: "The Tamil Nadu Accident and Emergency Care Initiative (TAEI) is a state-level emergency response platform designed to streamline trauma management across government hospitals, emergency departments, and district medical centers.",
        problem: "Trauma care requires instantaneous clinical data transmission without lag. Fragmented paper triage or complex multi-step digital forms caused delays during golden-hour triage.",
        contributions: [
            "Overhauled mobile UI workflows specifically targeting real-time emergency triage environments.",
            "Restructured layouts using strict information hierarchies to facilitate zero-latency data visualization for critical care doctors.",
            "Implemented robust asynchronous error handling via JSON decoding for unstable emergency network conditions.",
            "Standardized responsive typography and color coding for trauma severity scales."
        ],
        stack: ["Flutter", "Dart", "GetX", "HTTP Client", "High-Density JSON", "Clean Architecture"],
        link: "https://taei.co.in",
        linkText: "Visit TAEI State Portal",
        confidentiality: "Project visuals are illustrative. Production application screenshots and restricted implementation details are not displayed in accordance with healthcare privacy protocols."
    },
    mtm: {
        title: "MTM — Makkalai Thedi Maruthuvam",
        badge: "Government Healthcare &bull; National Health Mission",
        badgeClass: "project-gov",
        overview: "Makkalai Thedi Maruthuvam is a flagship community health scheme launched by the Tamil Nadu Government to bring healthcare directly to people's doorsteps, screening and treating hypertension, diabetes, and palliative conditions.",
        problem: "Field health workers operating in semi-rural and urban centers required a reliable, simple mobile interface to record patient vitals, verify identity, and sync triage updates with national registries.",
        contributions: [
            "Collaborated closely on functional testing, user interface updates, and integrated secure core REST APIs to enable efficient fieldwork triage and patient indexing.",
            "Participated in production migration for Ayushman Bharat Digital Mission (ABDM) integration.",
            "Handled security compliance headers, token authentications, and seamlessly implemented M1 milestone capabilities for direct ABHA ID generation.",
            "Optimized local caching using structured storage to allow reliable offline records collection."
        ],
        stack: ["Flutter", "Dart", "Chopper", "REST APIs", "ABDM / ABHA M1", "GetX"],
        link: "https://spc.tn.gov.in/uploads/M_T_M",
        linkText: "Read MTM Initiative Report",
        confidentiality: "Project visuals are illustrative. Production application screenshots and restricted implementation details are not displayed."
    },
    timesmed: {
        title: "TimesMed Doctor-Patient Platform",
        badge: "Telehealth & Consultation",
        overview: "A comprehensive digital healthcare suite connecting patients, clinics, and medical practitioners with digital consultations, appointment scheduling, and electronic health record keeping.",
        problem: "Prolonged live monitoring sessions and diagnostic feeds caused UI thread blockages and high memory footprints on mid-range smartphones.",
        contributions: [
            "Designed and deployed interactive modern dashboard screens linking healthcare providers with real-time vitals and patient metrics.",
            "Optimized layout rendering and state listeners to prevent UI thread blockages during prolonged live monitoring.",
            "Integrated AI-assisted health consultation components for diagnostic guidance.",
            "Streamlined authentication and onboarding flows for both doctors and patients."
        ],
        stack: ["Flutter", "Dart", "Provider", "REST APIs", "Telehealth UI", "Firebase"],
        link: null,
        confidentiality: "Screenshots shown above are sanitized production previews with dummy demo records."
    },
    foode: {
        title: "FOODe — Dine-In & Food Delivery Application",
        badge: "Food Commerce & Logistics",
        overview: "A multi-faceted mobile food ordering ecosystem catering to table booking, dine-in contactless menus, and doorstep food delivery with live GPS courier tracking.",
        problem: "Coordinating simultaneous state changes across cart calculations, restaurant availability, live GPS drivers, and payment gateway callbacks required a unified architecture.",
        contributions: [
            "Created the frontend framework and unified the communication APIs for a combined restaurant ordering and seat reservation model.",
            "Engineered Google Maps live geolocation tracking with custom map markers and route rendering.",
            "Integrated Razorpay SDK checkout flow with comprehensive transaction error handling.",
            "Utilized GetX state management for instantaneous basket and subtotal recalculations."
        ],
        stack: ["Flutter", "Dart", "GetX", "Google Maps SDK", "Razorpay Payment Gateway", "REST APIs"],
        link: null,
        confidentiality: "Verified screenshots displayed in the gallery above."
    },
    howdy: {
        title: "Howdy Chats — Real-Time Social Platform",
        badge: "Real-Time Communication",
        overview: "A modern social communication application featuring real-time peer messaging, interactive multimedia feeds, user discovery, and instant status updates.",
        problem: "High-throughput messaging apps require asynchronous socket handling to prevent socket drops and maintain smooth 60fps scrolling during bursts of incoming messages.",
        contributions: [
            "Crafted responsive user experiences and specific layout panels for a text-based communication platform.",
            "Implemented asynchronous WebSocket bindings to support high-efficiency message transmission and immediate screen refreshes.",
            "Integrated Firebase Cloud Firestore and Realtime Database for persistent message storage and user status synchronization.",
            "Engineered dynamic discovery feeds with media caching for low-latency visual timeline scrolling."
        ],
        stack: ["Flutter", "Dart", "Firebase", "WebSockets", "Material UI", "Asynchronous State Sync"],
        link: null,
        confidentiality: "Verified screenshots displayed in the gallery above."
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
    let linkBtn = data.link ? `<a href="${data.link}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" style="margin-top: 14px;">${data.linkText || 'Visit Link'}</a>` : '';
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
