// Data
const certifications = [
    {
        name: "AWS Certified Solutions Architect - Associate",
        vendor: "Amazon Web Services",
        price: "PKR 35,000",
        exam_fee: "PKR 15,000",
        duration: "6 weeks",
        difficulty: "Intermediate",
        icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
        description: "Learn to design distributed systems on AWS cloud platform",
        prerequisites: "Basic IT knowledge, 1+ year experience recommended",
        topics: [
            "AWS Core Services (EC2, S3, RDS, VPC)",
            "High Availability & Fault Tolerance",
            "Security & Compliance",
            "Cost Optimization Strategies",
            "Migration & Deployment"
        ],
        next_batches: ["Jan 15, 2026", "Feb 5, 2026", "Mar 1, 2026"],
        who_should_take: "IT professionals, system administrators, and developers looking to validate their AWS skills",
        career_outcomes: "Cloud Architect, Solutions Architect, DevOps Engineer"
    },
    {
        name: "Microsoft Azure Administrator",
        vendor: "Microsoft",
        price: "PKR 38,000",
        exam_fee: "PKR 16,000",
        duration: "6 weeks",
        difficulty: "Intermediate",
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
        description: "Master Azure administration and cloud infrastructure management",
        prerequisites: "Understanding of cloud concepts and Azure services",
        topics: [
            "Azure Virtual Machines & Networking",
            "Storage Management",
            "Identity & Access Management",
            "Monitoring & Backup Solutions",
            "Azure Resource Manager"
        ],
        next_batches: ["Jan 20, 2026", "Feb 10, 2026", "Mar 5, 2026"],
        who_should_take: "System administrators and cloud professionals",
        career_outcomes: "Azure Administrator, Cloud Engineer, Infrastructure Specialist"
    },
    {
        name: "CompTIA Security+",
        vendor: "CompTIA",
        price: "PKR 32,000",
        exam_fee: "PKR 14,000",
        duration: "5 weeks",
        difficulty: "Intermediate",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/comptia.svg",
        description: "Foundational cybersecurity certification for IT professionals",
        prerequisites: "Basic networking and IT fundamentals",
        topics: [
            "Threats, Attacks & Vulnerabilities",
            "Security Architecture & Tool Sets",
            "Identity & Access Management",
            "Risk Management",
            "Cryptography & PKI"
        ],
        next_batches: ["Jan 18, 2026", "Feb 8, 2026", "Mar 3, 2026"],
        who_should_take: "IT professionals entering cybersecurity field",
        career_outcomes: "Security Analyst, Security Administrator, SOC Analyst"
    },
    {
        name: "Google Cloud Associate Engineer",
        vendor: "Google Cloud",
        price: "PKR 36,000",
        exam_fee: "PKR 15,000",
        duration: "6 weeks",
        difficulty: "Intermediate",
        icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
        description: "Deploy and manage applications on Google Cloud Platform",
        prerequisites: "Basic cloud computing knowledge",
        topics: [
            "Google Compute Engine",
            "Cloud Storage Solutions",
            "Networking in GCP",
            "Kubernetes Engine",
            "Cloud Security Best Practices"
        ],
        next_batches: ["Jan 25, 2026", "Feb 15, 2026", "Mar 10, 2026"],
        who_should_take: "Cloud engineers and developers",
        career_outcomes: "Cloud Engineer, GCP Specialist, DevOps Engineer"
    },
    {
        name: "Cisco CCNA",
        vendor: "Cisco",
        price: "PKR 40,000",
        exam_fee: "PKR 18,000",
        duration: "8 weeks",
        difficulty: "Intermediate",
        icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg",
        description: "Network fundamentals and Cisco routing/switching",
        prerequisites: "Basic computer literacy",
        topics: [
            "Network Fundamentals",
            "IP Connectivity & Services",
            "Security Fundamentals",
            "Automation & Programmability",
            "Cisco IOS Configuration"
        ],
        next_batches: ["Jan 22, 2026", "Feb 12, 2026", "Mar 8, 2026"],
        who_should_take: "Network administrators and engineers",
        career_outcomes: "Network Engineer, Network Administrator, Systems Engineer"
    },
    {
        name: "CompTIA A+",
        vendor: "CompTIA",
        price: "PKR 28,000",
        exam_fee: "PKR 12,000",
        duration: "4 weeks",
        difficulty: "Beginner",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/comptia.svg",
        description: "Entry-level IT support and troubleshooting certification",
        prerequisites: "None - perfect for beginners",
        topics: [
            "Hardware & Operating Systems",
            "Networking Basics",
            "Mobile Devices",
            "Troubleshooting Methodologies",
            "Security Fundamentals"
        ],
        next_batches: ["Jan 12, 2026", "Feb 2, 2026", "Feb 25, 2026"],
        who_should_take: "IT beginners and career changers",
        career_outcomes: "IT Support Technician, Help Desk Analyst, Desktop Support"
    }
];

const testimonials = [
    {
        name: "Ahmed Khan",
        role: "Cloud Engineer at Systems Limited",
        certification: "AWS Solutions Architect",
        quote: "CertifyMe.pk helped me transition from support role to cloud engineering. The instructors are experienced and the testing center is world-class.",
        rating: 5,
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
    },
    {
        name: "Fatima Ali",
        role: "Azure Administrator at Avery Global",
        certification: "Microsoft Azure Admin",
        quote: "Best investment in my career! I passed Azure exam on first attempt and got 40% salary increase within 2 months.",
        rating: 5,
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
    },
    {
        name: "Hassan Raza",
        role: "Security Analyst at MCB Bank",
        certification: "CompTIA Security+",
        quote: "The hands-on labs and real-world scenarios prepared me perfectly for the exam and my new role in cybersecurity.",
        rating: 5,
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
    }
];

const successStories = [
    {
        name: "Aisha Malik",
        before: "Computer Science Graduate",
        after: "DevOps Engineer at Netsol",
        certification: "AWS Solutions Architect",
        salary_increase: "85%",
        story: "Fresh graduate with no experience to DevOps Engineer earning PKR 120,000/month in 4 months",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop"
    },
    {
        name: "Bilal Ahmed",
        before: "IT Support Technician",
        after: "Cloud Infrastructure Engineer",
        certification: "Azure Administrator",
        salary_increase: "60%",
        story: "Career transformation from PKR 45,000 to PKR 95,000 monthly salary",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=300&fit=crop"
    },
    {
        name: "Sara Khan",
        before: "Fresh Graduate",
        after: "Security Analyst at Bank Alfalah",
        certification: "CompTIA Security+",
        salary_increase: "100%",
        story: "From jobless to earning PKR 80,000/month in the cybersecurity field",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=300&fit=crop"
    },
    {
        name: "Usman Tariq",
        before: "Network Technician",
        after: "Senior Network Engineer at PTCL",
        certification: "Cisco CCNA",
        salary_increase: "70%",
        story: "Promotion and salary jump from PKR 50,000 to PKR 110,000 within 6 months",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300&fit=crop"
    }
];

const faqs = [
    {
        question: "How long does it take to complete a certification?",
        answer: "Most certifications take 4-8 weeks depending on the complexity. We offer flexible schedules including evening and weekend batches."
    },
    {
        question: "What is the exam pass guarantee?",
        answer: "While we don't guarantee pass, our students have 85%+ first-attempt pass rate. We offer free exam retake training if you don't pass."
    },
    {
        question: "Can I pay in installments?",
        answer: "Yes! We offer 2-3 month installment plans for courses above PKR 30,000. Contact us for details."
    },
    {
        question: "Do you provide job placement support?",
        answer: "Yes, we have partnerships with 15+ IT companies. We provide resume review, interview prep, and direct referrals to hiring partners."
    },
    {
        question: "Are you an authorized testing center?",
        answer: "Yes, we are authorized by Pearson VUE and Prometric to conduct official certification exams in our secure testing facility."
    },
    {
        question: "What is included in the training course?",
        answer: "Our training includes live interactive sessions, recorded lectures, hands-on lab access, practice exams, study materials, and lifetime course access."
    }
];

const blogPosts = [
    {
        title: "Top 5 IT Certifications for 2026 in Pakistan",
        excerpt: "Discover which certifications are most in-demand by Pakistani employers and offer the best ROI for your career.",
        date: "November 20, 2025",
        category: "Career Advice",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
    },
    {
        title: "How to Prepare for AWS Solutions Architect Exam",
        excerpt: "A comprehensive 6-week study plan with free resources and practice tips from our certified instructors.",
        date: "November 18, 2025",
        category: "Exam Prep",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
    },
    {
        title: "Cloud Computing Jobs in Pakistan: Salary Guide 2026",
        excerpt: "Detailed analysis of cloud engineer salaries across major Pakistani cities and how certifications impact earning potential.",
        date: "November 15, 2025",
        category: "Industry News",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    
    
    {
        title: "4th",
        excerpt: "Detailed analysis of cloud engineer salaries across major Pakistani cities and how certifications impact earning potential.",
        date: "November 15, 2025",
        category: "Industry News",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
        title: "5th",
        excerpt: "Detailed analysis of cloud engineer salaries across major Pakistani cities and how certifications impact earning potential.",
        date: "November 15, 2025",
        category: "Industry News",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
        title: "6th",
        excerpt: "Detailed analysis of cloud engineer salaries across major Pakistani cities and how certifications impact earning potential.",
        date: "November 15, 2025",
        category: "Industry News",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
];

// State
let currentTestimonial = 0;
let testimonialInterval;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderCertifications();
    renderTestimonials();
    renderFAQs();
    renderSuccessStories();
    renderBlogPosts();
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
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when link clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Render Certifications
function renderCertifications() {
    const grid = document.getElementById('certificationsGrid');
    const displayCerts = certifications.slice(0, 6);
    
    grid.innerHTML = displayCerts.map(cert => `
        <div class="certification-card" onclick="showCertificationModal(${certifications.indexOf(cert)})">
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
}

// Show All Certifications
function showAllCertifications(event) {
    event.preventDefault();
    const grid = document.getElementById('certificationsGrid');
    
    grid.innerHTML = certifications.map(cert => `
        <div class="certification-card" onclick="showCertificationModal(${certifications.indexOf(cert)})">
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
    const cert = certifications[index];
    const modal = document.getElementById('certificationModal');
    const modalBody = document.getElementById('modalBody');
    
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
}

function closeModal() {
    const modal = document.getElementById('certificationModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

function switchTab(event, tabId) {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// Testimonials
function renderTestimonials() {
    const wrapper = document.getElementById('testimonialsWrapper');
    const dots = document.getElementById('carouselDots');
    
    wrapper.innerHTML = testimonials.map((testimonial, index) => `
        <div class="testimonial-card ${index === 0 ? 'active' : ''}">
            <img src="${testimonial.photo}" alt="${testimonial.name}" class="testimonial-photo">
            <h3 class="testimonial-name">${testimonial.name}</h3>
            <p class="testimonial-role">${testimonial.role}</p>
            <p class="testimonial-quote">"${testimonial.quote}"</p>
            <div class="testimonial-rating">${'⭐'.repeat(testimonial.rating)}</div>
        </div>
    `).join('');
    
    dots.innerHTML = testimonials.map((_, index) => `
        <div class="carousel-dot ${index === 0 ? 'active' : ''}" onclick="goToTestimonial(${index})"></div>
    `).join('');
}

function initTestimonialCarousel() {
    testimonialInterval = setInterval(() => {
        moveCarousel(1);
    }, 5000);
}

function moveCarousel(direction) {
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.carousel-dot');
    
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
function renderFAQs() {
    const accordion = document.getElementById('faqAccordion');
    
    accordion.innerHTML = faqs.map((faq, index) => `
        <div class="faq-item">
            <div class="faq-question" onclick="toggleFAQ(${index})">
                <span>${faq.question}</span>
                <span class="faq-icon">▼</span>
            </div>
            <div class="faq-answer">
                <div class="faq-answer-content">${faq.answer}</div>
            </div>
        </div>
    `).join('');
}

function toggleFAQ(index) {
    const items = document.querySelectorAll('.faq-item');
    const item = items[index];
    
    item.classList.toggle('active');
}

// Success Stories
function renderSuccessStories() {
    const grid = document.getElementById('successStoriesGrid');
    
    grid.innerHTML = successStories.map((story, index) => `
        <div class="success-story-card" onclick="showSuccessStoryModal(${index})">
            <img src="${story.image}" alt="${story.name}" class="success-story-image">
            <div class="success-story-content">
                <h3 class="success-story-name">${story.name}</h3>
                <p class="success-story-transition">${story.before} → ${story.after}</p>
                <div class="success-story-highlight">
                    <strong>${story.salary_increase}</strong>
                    <span>Salary Increase</span>
                </div>
                <span class="success-cert">${story.certification}</span>
            </div>
        </div>
    `).join('');
}

function showSuccessStoryModal(index) {
    const story = successStories[index];
    const modal = document.getElementById('successStoryModal');
    const modalBody = document.getElementById('successModalBody');
    
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
        <p style="font-size: 18px; line-height: 1.8; color: var(--dark-charcoal);">${story.story}</p>
        <div style="text-align: center; margin-top: 40px;">
            <a href="#contact" class="btn btn-primary btn-large" onclick="closeSuccessModal()">Start Your Journey</a>
        </div>
    `;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeSuccessModal() {
    const modal = document.getElementById('successStoryModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Blog Posts
function renderBlogPosts() {
    const grid = document.getElementById('blogGrid');

    // Show only the first 3 posts
    const limitedPosts = blogPosts.slice(0, 3);

    grid.innerHTML = limitedPosts.map(post => `
        <div class="blog-card">
            <img src="${post.image}" alt="${post.title}" class="blog-image">
            <div class="blog-content">
                <span class="blog-category">${post.category}</span>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-meta">
                    <span>📅 ${post.date}</span>
                </div>
            </div>
        </div>
    `).join('');
}


// Contact Form
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            // Show success message
            form.style.display = 'none';
            document.getElementById('formSuccess').classList.add('show');
            
            // Reset form after 3 seconds
            setTimeout(() => {
                form.reset();
                form.style.display = 'block';
                document.getElementById('formSuccess').classList.remove('show');
            }, 3000);
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
    const phoneRegex = /^[0-9+\-\s()]{10,}$/;
    if (!phoneRegex.test(phone.value)) {
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
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#certifications-page') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offset = 80;
                    const targetPosition = target.offsetTop - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Close modals when clicking outside
window.addEventListener('click', function(e) {
    const certModal = document.getElementById('certificationModal');
    const successModal = document.getElementById('successStoryModal');
    
    if (e.target === certModal) {
        closeModal();
    }
    if (e.target === successModal) {
        closeSuccessModal();
    }
});