// State
let currentTestimonial = 0;
let testimonialInterval;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Render functions removed as they are now handled by PHP
    initNavigation();
    initStatCounters();
    initTestimonialCarousel();
    initContactForm();
    initSmoothScroll();
});

// Navigation
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');

    // Hamburger menu toggle
    if(hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when link clicked
    if(navLinks) {
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if(hamburger) hamburger.classList.remove('active');
                if(navMenu) navMenu.classList.remove('active');
                
                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // Navbar scroll effect
    if(navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}

// Show All Certifications (Button click handler)
function showAllCertifications(event) {
    event.preventDefault();
    const grid = document.getElementById('certificationsGrid');
    
    // We can use the 'certifications' variable injected from PHP
    grid.innerHTML = certifications.map((cert, index) => `
        <div class="certification-card" onclick="showCertificationModal(${index})" style="cursor: pointer;">
            <img src="${cert.icon}" alt="${cert.name}" class="cert-icon">
            <div class="cert-vendor">${cert.vendor}</div>
            <h3 class="cert-name">${cert.name}</h3>
            <div class="cert-meta">
                <div class="cert-meta-item">
                    <span>💰</span>
                    <span>${cert.price}</span>
                </div>
                <div class="cert-meta-item">
                    <span>⏱️</span>
                    <span>${cert.duration}</span>
                </div>
            </div>
            <span class="difficulty-badge difficulty-${cert.difficulty.toLowerCase()}">${cert.difficulty}</span>
        </div>
    `).join('');
    
    event.target.style.display = 'none';
}

// Certification Modal
function showCertificationModal(index) {
    try {
        const cert = certifications[index];
        const modal = document.getElementById('certificationModal');
        const modalBody = document.getElementById('modalBody');
        
        if (!modal || !modalBody || !cert) return;
        
        modalBody.innerHTML = `
        <div class="modal-header">
            <img src="${cert.icon}" alt="${cert.name}" class="modal-icon">
            <h2 class="modal-title">${cert.name}</h2>
            <p class="modal-vendor">${cert.vendor}</p>
        </div>
        
        <div class="modal-tabs">
            <button class="tab-btn active" onclick="switchTab(event, 'overview')">Overview</button>
            <button class="tab-btn" onclick="switchTab(event, 'curriculum')">Curriculum</button>
            <button class="tab-btn" onclick="switchTab(event, 'pricing')">Pricing</button>
            <button class="tab-btn" onclick="switchTab(event, 'schedule')">Schedule</button>
        </div>
        
        <div id="overview" class="tab-content active">
            <h3>About This Certification</h3>
            <p>${cert.description}</p>
            
            <h4 style="margin-top: 25px;">Prerequisites</h4>
            <p>${cert.prerequisites}</p>
            
            <h4 style="margin-top: 25px;">Who Should Take This?</h4>
            <p>${cert.who_should_take}</p>
            
            <h4 style="margin-top: 25px;">Career Outcomes</h4>
            <p>${cert.career_outcomes}</p>
        </div>
        
        <div id="curriculum" class="tab-content">
            <h3>Course Curriculum</h3>
            <ul class="curriculum-list">
                ${cert.topics.map(topic => `<li class="curriculum-item">${topic}</li>`).join('')}
            </ul>
        </div>
        
        <div id="pricing" class="tab-content">
            <h3>Investment Details</h3>
            <div class="pricing-table">
                <div class="pricing-row">
                    <span>Training Course</span>
                    <strong>${cert.price}</strong>
                </div>
                <div class="pricing-row">
                    <span>Official Exam Fee</span>
                    <strong>${cert.exam_fee}</strong>
                </div>
                <div class="pricing-row">
                    <span>Duration</span>
                    <strong>${cert.duration}</strong>
                </div>
            </div>
            <p style="margin-top: 20px; color: var(--text-gray);">💡 Installment plans available for courses above PKR 30,000</p>
        </div>
        
        <div id="schedule" class="tab-content">
            <h3>Upcoming Batches</h3>
            <div class="schedule-list">
                ${cert.next_batches.map(batch => `
                    <div class="schedule-item">
                        <span>📅 ${batch}</span>
                        <a href="#contact" class="btn btn-primary" onclick="closeModal()">Reserve Seat</a>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="sticky-enroll">
            <a href="#contact" class="btn btn-primary btn-large" onclick="closeModal()">Enroll Now</a>
        </div>
    `;
        
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    } catch(error) {
        console.error('Error in showCertificationModal:', error);
    }
}

function closeModal() {
    const modal = document.getElementById('certificationModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

function switchTab(event, tabId) {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// Testimonials Carousel Logic
function initTestimonialCarousel() {
    // Only init if testimonials exist
    if (typeof testimonials !== 'undefined' && testimonials.length > 0) {
        testimonialInterval = setInterval(() => {
            moveCarousel(1);
        }, 5000);
    }
}

function moveCarousel(direction) {
    if (typeof testimonials === 'undefined' || testimonials.length === 0) return;
    
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if(cards.length === 0) return;

    cards[currentTestimonial].classList.remove('active');
    dots[currentTestimonial].classList.remove('active');
    
    currentTestimonial = (currentTestimonial + direction + testimonials.length) % testimonials.length;
    
    cards[currentTestimonial].classList.add('active');
    dots[currentTestimonial].classList.add('active');
    
    clearInterval(testimonialInterval);
    initTestimonialCarousel();
}

function goToTestimonial(index) {
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if(cards.length === 0) return;

    cards[currentTestimonial].classList.remove('active');
    dots[currentTestimonial].classList.remove('active');
    
    currentTestimonial = index;
    
    cards[currentTestimonial].classList.add('active');
    dots[currentTestimonial].classList.add('active');
    
    clearInterval(testimonialInterval);
    initTestimonialCarousel();
}

// Statistics Counter
function initStatCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    const options = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    statNumbers.forEach(stat => observer.observe(stat));
}

function animateCounter(element) {
    const target = parseFloat(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target % 1 === 0 ? target + '+' : target.toFixed(1) + '/5';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// FAQs
function toggleFAQ(index) {
    const items = document.querySelectorAll('.faq-item');
    const item = items[index];
    
    item.classList.toggle('active');
}

// Success Stories
function showSuccessStoryModal(index) {
    const story = successStories[index];
    const modal = document.getElementById('successStoryModal');
    const modalBody = document.getElementById('successModalBody');
    
    if(!modal || !modalBody || !story) return;

    modalBody.innerHTML = `
        <img src="${story.image}" alt="${story.name}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 15px; margin-bottom: 30px;">
        <h2 style="font-size: 32px; margin-bottom: 15px;">${story.name}</h2>
        <div style="display: flex; justify-content: center; gap: 30px; margin-bottom: 30px; flex-wrap: wrap;">
            <div style="text-align: center;">
                <strong style="display: block; font-size: 18px; color: var(--primary-blue);">Before</strong>
                <p style="margin: 5px 0;">${story.before}</p>
            </div>
            <div style="font-size: 32px; color: var(--growth-green);">→</div>
            <div style="text-align: center;">
                <strong style="display: block; font-size: 18px; color: var(--primary-blue);">After</strong>
                <p style="margin: 5px 0;">${story.after}</p>
            </div>
        </div>
        <div style="background: linear-gradient(135deg, var(--primary-blue) 0%, var(--growth-green) 100%); color: white; padding: 30px; border-radius: 15px; text-align: center; margin-bottom: 30px;">
            <h3 style="font-size: 48px; margin-bottom: 10px;">${story.salary_increase}</h3>
            <p style="font-size: 18px; margin: 0;">Salary Increase</p>
        </div>
        <div style="background: var(--light-gray); padding: 25px; border-radius: 15px; margin-bottom: 30px;">
            <strong style="display: block; margin-bottom: 10px; color: var(--primary-blue);">Certification Achieved:</strong>
            <p style="margin: 0; font-size: 18px;">${story.certification}</p>
        </div>
        <div style="font-size: 18px; line-height: 1.8; color: var(--dark-charcoal); white-space: pre-wrap;">${story.story}</div>
        <div style="text-align: center; margin-top: 40px;">
            <a href="#contact" class="btn btn-primary btn-large" onclick="closeSuccessModal()">Start Your Journey</a>
        </div>
    `;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeSuccessModal() {
    const modal = document.getElementById('successStoryModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

// Contact Form
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if(!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            const formData = new FormData(form);
            fetch('submit_contact.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    form.style.display = 'none';
                    document.getElementById('formSuccess').classList.add('show');
                    setTimeout(() => {
                        form.reset();
                        form.style.display = 'block';
                        document.getElementById('formSuccess').classList.remove('show');
                    }, 3000);
                } else {
                    alert(data.msg);
                }
            })
            .catch(() => {
                alert('Error submitting form. Please try again.');
            });
        }
    });
}

function validateForm() {
    let isValid = true;
    
    // Name validation
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (name.value.trim().length < 3) {
        nameError.textContent = 'Name must be at least 3 characters';
        isValid = false;
    } else {
        nameError.textContent = '';
    }
    
    // Email validation
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    } else {
        emailError.textContent = '';
    }
    
    // Phone validation
    const phone = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
    if (phone.value.trim().length < 10) {
        phoneError.textContent = 'Please enter a valid phone number';
        isValid = false;
    } else {
        phoneError.textContent = '';
    }
    
    // Message validation
    const message = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (message.value.trim().length < 10) {
        messageError.textContent = 'Message must be at least 10 characters';
        isValid = false;
    } else {
        messageError.textContent = '';
    }
    
    return isValid;
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}