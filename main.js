/**
 * Main script for Vivek's Placement Portfolio
 * Dynamically renders components and handles animations & user interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Check if data is available
  if (typeof portfolioData === 'undefined') {
    console.error('Portfolio data is missing!');
    return;
  }

  // Set current year in footer
  const currentYear = document.getElementById('current-year');
  if (currentYear) currentYear.textContent = new Date().getFullYear();

  // Initialize all functions
  renderHero();
  renderAboutAndEducation();
  renderSkills();
  renderProjects();
  renderExperience();
  renderAchievementsAndCertifications();
  initTypewriter();
  initMobileMenu();
  initScrollEffects();
  initProjectFilters();
  initContactForm();

  // Initialize Lucide Icons initially and after modifications
  lucide.createIcons();
});

// ==========================================
// 1. DYNAMIC RENDERING FUNCTIONS
// ==========================================

// Render Hero Section Elements
function renderHero() {
  const info = portfolioData.personalInfo;
  
  // Set bio text
  const heroBio = document.getElementById('hero-bio');
  if (heroBio) heroBio.textContent = info.bio;
  
  // Set resume button href if available
  const resumeBtn = document.getElementById('resume-download-btn');
  if (resumeBtn && info.resumeUrl) {
    resumeBtn.href = info.resumeUrl;
  }
  
  // Render Social Links
  const heroSocials = document.getElementById('social-links-hero');
  const contactSocials = document.getElementById('social-links-contact');
  
  const socialLinksHTML = `
    <a href="${info.github}" target="_blank" rel="noopener noreferrer" class="social-icon-wrapper" aria-label="GitHub">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
    </a>
    <a href="${info.linkedin}" target="_blank" rel="noopener noreferrer" class="social-icon-wrapper" aria-label="LinkedIn">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
    </a>
    <a href="mailto:${info.email}" class="social-icon-wrapper" aria-label="Email">
      <i data-lucide="mail"></i>
    </a>
  `;
  
  if (heroSocials) heroSocials.innerHTML = socialLinksHTML;
  if (contactSocials) contactSocials.innerHTML = socialLinksHTML;

  // Render Contact Details List (Bottom)
  const contactDetails = document.querySelector('.contact-details');
  if (contactDetails) {
    contactDetails.innerHTML = `
      <div class="contact-item">
        <div class="contact-icon-wrapper">
          <i data-lucide="mail"></i>
        </div>
        <div class="contact-text">
          <span class="contact-label">Email</span>
          <a href="mailto:${info.email}" class="contact-value" id="contact-email">${info.email}</a>
        </div>
      </div>
      
      <div class="contact-item">
        <div class="contact-icon-wrapper">
          <i data-lucide="phone"></i>
        </div>
        <div class="contact-text">
          <span class="contact-label">Phone</span>
          <a href="tel:${info.phone.replace(/\s+/g, '')}" class="contact-value" id="contact-phone">${info.phone}</a>
        </div>
      </div>
      
      <div class="contact-item">
        <div class="contact-icon-wrapper">
          <i data-lucide="map-pin"></i>
        </div>
        <div class="contact-text">
          <span class="contact-label">Location</span>
          <span class="contact-value" id="contact-location">${info.location}</span>
        </div>
      </div>
    `;
  }
}

// Render About and Education Timeline
function renderAboutAndEducation() {
  const info = portfolioData.personalInfo;
  const detailedBio = document.getElementById('about-detailed-bio');
  if (detailedBio) {
    detailedBio.textContent = info.bio;
  }
  
  // Personal details
  const detailsList = document.getElementById('personal-details-list');
  if (detailsList) {
    detailsList.innerHTML = `
      <div class="detail-item">
        <div class="detail-icon-box"><i data-lucide="mail"></i></div>
        <div class="detail-info">
          <span class="detail-lbl">Email</span>
          <a href="mailto:${info.email}" class="detail-val">${info.email}</a>
        </div>
      </div>
      <div class="detail-item">
        <div class="detail-icon-box"><i data-lucide="phone"></i></div>
        <div class="detail-info">
          <span class="detail-lbl">Phone</span>
          <a href="tel:${info.phone.replace(/\s+/g, '')}" class="detail-val">${info.phone}</a>
        </div>
      </div>
      <div class="detail-item">
        <div class="detail-icon-box"><i data-lucide="map-pin"></i></div>
        <div class="detail-info">
          <span class="detail-lbl">Location</span>
          <span class="detail-val">${info.location}</span>
        </div>
      </div>
      <div class="detail-item">
        <div class="detail-icon-box"><i data-lucide="graduation-cap"></i></div>
        <div class="detail-info">
          <span class="detail-lbl">Degree</span>
          <span class="detail-val">B.E. ECE (2026)</span>
        </div>
      </div>
    `;
  }
  
  // Education timeline
  const timeline = document.getElementById('education-timeline');
  if (timeline) {
    timeline.innerHTML = portfolioData.education.map(edu => `
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <span class="timeline-period">${edu.period}</span>
        <h4 class="timeline-title">${edu.degree}</h4>
        <p class="timeline-subtitle">${edu.institution}</p>
        <div class="timeline-score">${edu.score}</div>
        <div class="timeline-courses">
          ${edu.coursework.map(course => `<span class="course-tag">${course}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }
}

// Render Skill Categories and items
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;
  
  // Helper to map category to standard Lucide icons
  const iconMap = {
    "Languages": "code",
    "Core Computer Science": "database",
    "Web & Mobile Development": "layout",
    "Databases": "server",
    "Tools & Practices": "settings"
  };
  
  container.innerHTML = portfolioData.skills.map(skillGroup => {
    const icon = iconMap[skillGroup.category] || "layers";
    return `
      <div class="skill-category-card glass-card">
        <h3 class="skill-category-title">
          <i data-lucide="${icon}"></i>
          <span>${skillGroup.category}</span>
        </h3>
        <div class="skill-tags">
          ${skillGroup.items.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
      </div>
    `;
  }).join('');
}

// Render Projects
function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-container');
  if (!container) return;
  
  const filteredProjects = filter === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === filter);
    
  if (filteredProjects.length === 0) {
    container.innerHTML = `<p class="no-projects">No projects found in this category.</p>`;
    return;
  }
  
  container.innerHTML = filteredProjects.map(project => `
    <div class="project-card glass-card" data-category="${project.category}">
      <span class="project-badge-cat">${project.category}</span>
      <h3 class="project-title">${project.title}</h3>
      <h4 class="project-subtitle">${project.subtitle}</h4>
      <p class="project-desc">${project.description}</p>
      
      <ul class="project-details-list">
        ${project.details.map(detail => `<li>${detail}</li>`).join('')}
      </ul>
      
      <div class="project-tech">
        ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
      
      <div class="project-links">
         ${project.githubUrl && project.githubUrl !== '#' ? `
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="proj-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            <span>Code</span>
          </a>
        ` : ''}
        ${project.demoUrl && project.demoUrl !== '#' ? `
          <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="proj-link">
            <i data-lucide="external-link"></i>
            <span>Live Demo</span>
          </a>
        ` : ''}
      </div>
    </div>
  `).join('');
  
  // Re-trigger icon parsing
  lucide.createIcons();
}

// Render Work Experience
function renderExperience() {
  const container = document.getElementById('experience-container');
  if (!container) return;
  
  container.innerHTML = portfolioData.experience.map(exp => `
    <div class="exp-item">
      <div class="exp-marker"></div>
      <div class="exp-card glass-card">
        <div class="exp-header">
          <div>
            <h3 class="exp-role">${exp.role}</h3>
            <div class="exp-company">${exp.company}</div>
          </div>
          <span class="exp-period">${exp.period}</span>
        </div>
        <ul class="exp-desc">
          ${exp.description.map(desc => `<li>${desc}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

// Render Achievements & Certifications
function renderAchievementsAndCertifications() {
  const achievementsList = document.getElementById('achievements-list');
  if (achievementsList) {
    achievementsList.innerHTML = portfolioData.achievements.map(ach => `
      <li class="achievement-item">
        <span class="list-bullet"></span>
        <div class="achievement-details">
          <span class="ach-title">${ach.title}</span>
          <span class="ach-desc">${ach.description}</span>
        </div>
      </li>
    `).join('');
  }
  
  const certificationsList = document.getElementById('certifications-list');
  if (certificationsList) {
    certificationsList.innerHTML = portfolioData.certifications.map(cert => `
      <li class="certification-item">
        <span class="list-bullet"></span>
        <div class="certification-details">
          <span class="cert-name">${cert.name}</span>
          <span class="cert-issuer">${cert.issuer}</span>
        </div>
      </li>
    `).join('');
  }
}

// ==========================================
// 2. INTERACTION & INTERACTIVITY LOGIC
// ==========================================

// Typewriter Effect
function initTypewriter() {
  const typewriter = document.getElementById('typewriter');
  if (!typewriter) return;
  
  const words = portfolioData.personalInfo.subtitles;
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  
  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      // Remove character
      typewriter.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      // Add character
      typewriter.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 150;
    }
    
    // Switch state when word finishes typing
    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typingSpeed = 1500; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 500; // Pause before typing next word
    }
    
    setTimeout(type, typingSpeed);
  }
  
  // Start typewriter loops
  setTimeout(type, 500);
}

// Mobile Responsive Navigation Menu
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navOverlay = document.getElementById('nav-overlay');
  const navLinks = document.querySelectorAll('.nav-link');
  
  const toggleMenu = () => {
    navMenu.classList.toggle('active');
    navOverlay.classList.toggle('active');
    
    // Toggle menu icons
    const menuIcon = hamburger.querySelector('.menu-icon');
    const closeIcon = hamburger.querySelector('.close-icon');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  };
  
  const closeMenu = () => {
    navMenu.classList.remove('active');
    navOverlay.classList.remove('active');
    
    const menuIcon = hamburger.querySelector('.menu-icon');
    const closeIcon = hamburger.querySelector('.close-icon');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  };
  
  hamburger.addEventListener('click', toggleMenu);
  navOverlay.addEventListener('click', closeMenu);
  
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// Scroll active states and Back to Top scroll button
function initScrollEffects() {
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('btn-back-to-top');
  
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    // Navbar background scroll state
    if (scrollPosition > 50) {
      navbar.style.background = 'rgba(3, 0, 20, 0.9)';
      navbar.style.height = '70px';
    } else {
      navbar.style.background = 'rgba(3, 0, 20, 0.7)';
      navbar.style.height = '80px';
    }
    
    // Back to top floating button visibility
    if (scrollPosition > 400) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
    
    // Active navigation links updating on scroll
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });
    
    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
  
  // Smooth scroll back to top on click
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Project Category Filtering Setup
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Remove active from other buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      
      // Set active to current button
      e.target.classList.add('active');
      
      const filterValue = e.target.getAttribute('data-filter');
      
      // Render filtered cards
      const container = document.getElementById('projects-container');
      if (container) {
        // Simple scale out animation
        container.style.opacity = '0';
        container.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
          renderProjects(filterValue);
          container.style.opacity = '1';
          container.style.transform = 'translateY(0)';
          container.style.transition = 'all 0.3s ease-in-out';
        }, 200);
      }
    });
  });
}

// Contact Form Validation and Submission
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  
  const submitBtn = document.getElementById('form-submit-btn');
  const alertBox = document.getElementById('form-alert');
  
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');
  
  // Real-time simple validation
  const validateForm = () => {
    let isValid = true;
    
    // Name validation
    if (nameInput.value.trim() === '') {
      nameError.textContent = 'Name is required';
      nameInput.style.borderColor = 'var(--error)';
      isValid = false;
    } else {
      nameError.textContent = '';
      nameInput.style.borderColor = 'var(--card-border)';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
      emailError.textContent = 'Email is required';
      emailInput.style.borderColor = 'var(--error)';
      isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      emailError.textContent = 'Please enter a valid email address';
      emailInput.style.borderColor = 'var(--error)';
      isValid = false;
    } else {
      emailError.textContent = '';
      emailInput.style.borderColor = 'var(--card-border)';
    }
    
    // Message validation
    if (messageInput.value.trim() === '') {
      messageError.textContent = 'Message is required';
      messageInput.style.borderColor = 'var(--error)';
      isValid = false;
    } else {
      messageError.textContent = '';
      messageInput.style.borderColor = 'var(--card-border)';
    }
    
    return isValid;
  };
  
  // Setup inputs touch markers
  [nameInput, emailInput, messageInput].forEach(input => {
    input.addEventListener('input', () => {
      validateForm();
    });
  });
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    // Loading state
    submitBtn.disabled = true;
    const origContent = submitBtn.innerHTML;
    submitBtn.innerHTML = `<span>Sending...</span> <i data-lucide="loader" class="animate-spin"></i>`;
    lucide.createIcons();
    
    const info = portfolioData.personalInfo;
    const accessKey = info.web3formsKey;
    
    // Check if user has set up their Web3Forms key
    if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
      // Simulate submission & warn user to update their access key
      setTimeout(() => {
        alertBox.innerHTML = `<strong>Demo Success!</strong> Thank you, ${nameInput.value}. Your message was validated.<br><small style="color:var(--text-secondary)">To receive this message directly in your personal inbox, get a free Access Key from <a href="https://web3forms.com" target="_blank" style="color:var(--secondary);text-decoration:underline">web3forms.com</a> and paste it into <code>web3formsKey</code> inside <code>portfolio-data.js</code>.</small>`;
        alertBox.className = 'form-alert success';
        alertBox.style.display = 'block';
        
        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = origContent;
        lucide.createIcons();
      }, 1000);
      return;
    }
    
    // Perform real API call to Web3Forms
    const formData = {
      access_key: accessKey,
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      subject: document.getElementById('subject').value.trim() || `Portfolio Contact from ${nameInput.value}`,
      message: messageInput.value.trim(),
      from_name: `${info.name} Portfolio`
    };
    
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(async (response) => {
      const json = await response.json();
      if (response.status === 200 && json.success) {
        alertBox.textContent = `Thank you, ${nameInput.value}! Your message has been sent successfully. I will get back to you shortly.`;
        alertBox.className = 'form-alert success';
        form.reset();
      } else {
        console.error(json);
        alertBox.textContent = json.message || 'Something went wrong. Please try again later.';
        alertBox.className = 'form-alert error';
      }
    })
    .catch((error) => {
      console.error(error);
      alertBox.textContent = 'Oops! Network error. Please check your internet connection and try again.';
      alertBox.className = 'form-alert error';
    })
    .finally(() => {
      alertBox.style.display = 'block';
      submitBtn.disabled = false;
      submitBtn.innerHTML = origContent;
      lucide.createIcons();
      
      // Hide alert box after 8 seconds
      setTimeout(() => {
        alertBox.style.display = 'none';
      }, 8000);
    });
  });
}
