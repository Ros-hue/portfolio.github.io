// Global variables
let currentTheme = localStorage.getItem('theme') || 'light';
let isLoading = true;
let typingTextIndex = 0;
let typingCharIndex = 0;
let isDeleting = false;

// Typing animation texts
const typingTexts = [
  'Full Stack Developer',
  'React Specialist', 
  'UI/UX Enthusiast',
  'Problem Solver'
];

// Projects data
const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features admin dashboard, inventory management, and real-time analytics.",
    image: "https://cdn.dribbble.com/userupload/9643919/file/original-964e7c7ed9c77cfa90cf565645804613.png?resize=1504x1128&vertical=center",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: ["react", "fullstack"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with drag-and-drop boards, real-time updates, and team communication features.",
    image: "https://cdn.dribbble.com/userupload/4382541/file/original-423d781d748f6f658adb5db64c8cfb1c.png?resize=1600x1200",
    tags: ["React", "Socket.io", "Express"],
    category: ["react", "mobile"],
    demoUrl: "",
    githubUrl: "#"
  },
  {
    title: "Weather Analytics Dashboard",
    description: "Real-time weather dashboard with historical data visualization, location-based forecasts, and severe weather alerts.",
    image: "https://cdn.dribbble.com/userupload/31731512/file/original-9918a089c6157c6bc8213f82f7d01698.png?resize=1504x1128&vertical=center",
    tags: ["Vue.js", "Chart.js", "FastAPI"],
    category: ["fullstack"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Fitness Tracker App",
    description: "Mobile-first fitness tracking application with workout logging, progress visualization, and social sharing features.",
    image: "https://cdn.dribbble.com/userupload/18494320/file/original-8a33fb8b42fffd87d02bd1644788f092.png?resize=1504x1128&vertical=center",
    tags: ["React Native", "Firebase", "Redux"],
    category: ["mobile", "react"],
    demoUrl: "#",
    githubUrl: "#"
  },
];

// Work experience data
const workExperience = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    period: "2025 - Present",
    description: "Lead development of enterprise web applications serving 100k+ users. Mentor junior developers and architect scalable solutions using modern tech stack.",
    tags: ["React", "Node.js", "Team Lead"]
  },
  {
    title: "Full Stack Developer", 
    company: "StartupXYZ",
    period: "2021- 2024",
    description: "Built and maintained multiple client projects from conception to deployment. Collaborated closely with design team to create pixel-perfect user interfaces.",
    tags: ["Vue.js", "Django", "PostgreSQL"]
  },
  {
    title: "Junior Developer",
    company: "WebAgency Pro", 
    period: "2019 - 2020",
    description: "Started my professional journey building responsive websites and learning modern development practices. Focused on front-end development and UX.",
    tags: ["HTML/CSS", "JavaScript", "Sass"]
  }
];

// Education data
const education = [
  {
    title: "Computer Science",
    institution: "Arniko Awasiya Secondary School",
    period: "2023",
    description: "Graduated Magna Cum Laude with focus on Software Engineering and Web Technologies. Active in coding clubs and hackathons.",
    tags: ["Software Engineering", "Data Structures", "Algorithms"]
  },
  {
    title: "React Developer Certification",
    institution: "Coursera,Youtube,Udemy",
    period: "2025",
    description: "Advanced certification covering React ecosystem, state management, and modern development practices.",
    tags: ["React", "Redux", "Next.js"]
  }
];

// Blog posts data
const blogPosts = [
  {
    title: "hackethon 2024",
    excerpt: "winner of the hackethon with team .",
    image: "https://scontent.fmaa12-3.fna.fbcdn.net/v/t39.30808-6/516802633_656461514108913_4643561548159519915_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=JybSVgxdvnoQ7kNvwEedlJC&_nc_oc=AdmmcJJfwnPAoBU-UKqg6gaArwzg8U6kj6VwWFqO5wUyRwHnrmfHXyf-97IPuvaKwBQ&_nc_zt=23&_nc_ht=scontent.fmaa12-3.fna&_nc_gid=gtKV3mb5_bIBO_yEcKP3sg&oh=00_Afb6aghEJR6rvPYkdHjY3LlwJuAXTZp9VZviCC77PuZBbg&oe=68CB7700",
    category: "React",
    readTime: "24 hrs ",
    date: "Dec 15, 2025",
    slug: "building-scalable-react-applications"
  },
  {
    title: "hackethon 2024",
    excerpt: "winner of the hackethon with team .",
    image: "https://scontent.fblr25-1.fna.fbcdn.net/v/t39.30808-6/508282534_641094395645625_5676518788411806997_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=WeDPL0I-MwwQ7kNvwHdKQGa&_nc_oc=Adm8pnKm2NS2v9ybT79jjolNJb9SSb9E1JCszszSN0Uj8JOmFXwXvVstXlloDQdgI-Q&_nc_zt=23&_nc_ht=scontent.fblr25-1.fna&_nc_gid=QzlimAciEncdRynUoXmWtA&oh=00_AfbZ6VAvy6S_v7a8IuvCvwl7c7C9Tn3TIpN-H_VFnODPMA&oe=68CB67D5",
    category: "React",
    readTime: "24 hrs ",
    date: "Dec 15, 2025",
    slug: "building-scalable-react-applications"
  },
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

// Initialize application
function initializeApp() {
  // Set initial theme
  applyTheme(currentTheme);
  
  // Initialize components
  setupEventListeners();
  setupScrollEffects();
  startTypingAnimation();
  renderProjects();
  renderWorkExperience();
  renderEducation();
  renderBlogPosts();
  animateSkillBars();
  
  // Hide loading screen after delay
  setTimeout(() => {
    hideLoadingScreen();
  }, 1500);
}

// Event Listeners
function setupEventListeners() {
  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      const icon = document.getElementById('menu-icon');
      if (icon) {
        icon.className = mobileMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
      }
    });
  }
  
  // Navigation links
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      scrollToSection(targetId);
      
      // Close mobile menu if open
      if (mobileMenu) {
        mobileMenu.classList.remove('active');
        const icon = document.getElementById('menu-icon');
        if (icon) {
          icon.className = 'fas fa-bars';
        }
      }
    });
  });
  
  // Project filters
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      filterProjects(filter);
      
      // Update active filter
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
  
  // Contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactForm);
  }
  
  // Scroll to top button
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// Scroll Effects
function setupScrollEffects() {
  // Scroll progress indicator
  window.addEventListener('scroll', updateScrollProgress);
  
  // Scroll to top button visibility
  window.addEventListener('scroll', toggleScrollToTopButton);
  
  // Active navigation highlighting
  window.addEventListener('scroll', updateActiveNavigation);
  
  // Animate elements on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    });
  }, { threshold: 0.1 });
  
  // Observe all sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    observer.observe(section);
  });
}

// Theme Functions
function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(currentTheme);
  localStorage.setItem('theme', currentTheme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
  }
}

// Loading Screen
function hideLoadingScreen() {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    loadingScreen.classList.add('hidden');
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
  }
}

// Typing Animation
function startTypingAnimation() {
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return;
  
  function typeText() {
    const currentText = typingTexts[typingTextIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, typingCharIndex - 1);
      typingCharIndex--;
    } else {
      typingElement.textContent = currentText.substring(0, typingCharIndex + 1);
      typingCharIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && typingCharIndex === currentText.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && typingCharIndex === 0) {
      isDeleting = false;
      typingTextIndex = (typingTextIndex + 1) % typingTexts.length;
      typeSpeed = 500;
    }
    
    setTimeout(typeText, typeSpeed);
  }
  
  // Start after a delay
  setTimeout(typeText, 1000);
}

// Scroll Functions
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}

function updateScrollProgress() {
  const scrollTop = window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  
  const progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    progressBar.style.width = `${scrollPercent}%`;
  }
}

function toggleScrollToTopButton() {
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  if (scrollToTopBtn) {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  }
}

function updateActiveNavigation() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop <= 100) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// Skills Animation
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skillBar = entry.target;
        const percent = skillBar.getAttribute('data-percent');
        setTimeout(() => {
          skillBar.style.width = `${percent}%`;
        }, 200);
        observer.unobserve(skillBar);
      }
    });
  }, { threshold: 0.5 });
  
  skillBars.forEach(bar => {
    observer.observe(bar);
  });
}

// Projects Functions
function renderProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) return;
  
  projectsGrid.innerHTML = projects.map(project => `
    <div class="project-card" data-category="${project.category.join(' ')}">
      <img src="${project.image}" alt="${project.title}" class="project-image">
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        <div class="project-actions">
          <a href="${project.demoUrl}" class="project-btn primary" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-external-link-alt"></i>
            View Demo
          </a>
          <a href="${project.githubUrl}" class="project-btn secondary" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i>
            GitHub
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

function filterProjects(filter) {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    const categories = card.getAttribute('data-category');
    if (filter === 'all' || categories.includes(filter)) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// Resume Functions
function renderWorkExperience() {
  const workExperienceContainer = document.getElementById('work-experience');
  if (!workExperienceContainer) return;
  
  workExperienceContainer.innerHTML = workExperience.map(job => `
    <div class="experience-item">
      <div class="experience-header">
        <div class="experience-info">
          <h4>${job.title}</h4>
          <p class="company">${job.company}</p>
        </div>
        <span class="experience-period">${job.period}</span>
      </div>
      <p class="experience-description">${job.description}</p>
      <div class="experience-tags">
        ${job.tags.map(tag => `<span class="experience-tag">${tag}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderEducation() {
  const educationContainer = document.getElementById('education-list');
  if (!educationContainer) return;
  
  educationContainer.innerHTML = education.map(edu => `
    <div class="education-item">
      <div class="education-header">
        <div class="education-info">
          <h4>${edu.title}</h4>
          <p class="institution">${edu.institution}</p>
        </div>
        <span class="education-period">${edu.period}</span>
      </div>
      <p class="education-description">${edu.description}</p>
      <div class="education-tags">
        ${edu.tags.map(tag => `<span class="education-tag">${tag}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// Blog Functions
function renderBlogPosts() {
  const blogGrid = document.getElementById('blog-grid');
  if (!blogGrid) return;
  
  blogGrid.innerHTML = blogPosts.map(post => `
    <article class="blog-card">
      <img src="${post.image}" alt="${post.title}" class="blog-image">
      <div class="blog-content">
        <div class="blog-meta">
          <span class="blog-category ${post.category.toLowerCase()}">${post.category}</span>
          <span class="blog-read-time">${post.readTime}</span>
        </div>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.excerpt}</p>
        <div class="blog-footer">
          <div class="blog-author">
            <div class="blog-avatar">YV</div>
            <div class="blog-author-info">
              <h5>Yuvraj Yadav</h5>
              <p class="blog-date">${post.date}</p>
            </div>
          </div>
          <i class="fas fa-arrow-right blog-arrow"></i>
        </div>
      </div>
    </article>
  `).join('');
}

// Contact Form
function handleContactForm(e) {
  e.preventDefault();
  
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  const formData = new FormData(form);
  
  // Basic validation
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  
  if (!name || !email || !message) {
    showToast('Please fill in all required fields', 'error');
    return;
  }
  
  if (!isValidEmail(email)) {
    showToast('Please enter a valid email address', 'error');
    return;
  }
  
  // Show loading state
  btn.classList.add('loading');
  btn.disabled = true;
  
  // Simulate form submission
  setTimeout(() => {
    // Reset form
    form.reset();
    btn.classList.remove('loading');
    btn.disabled = false;
    
    // Show success message
    showToast('Message sent successfully! Thank you for your message.', 'success');
  }, 2000);
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Resume Download
function downloadResume() {
  // Create a link to download the resume PDF
  const link = document.createElement('a');
  link.href = 'resume1.pdf';
  link.download = 'resume1.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast('Resume download started', 'success');
}

// Toast Notifications
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  const icon = toast.querySelector('.toast-icon');
  const messageEl = toast.querySelector('.toast-message');
  
  // Set content
  messageEl.textContent = message;
  
  // Set icon based on type
  if (type === 'success') {
    icon.className = 'toast-icon fas fa-check-circle';
    toast.className = 'toast success';
  } else {
    icon.className = 'toast-icon fas fa-exclamation-circle';
    toast.className = 'toast error';
  }
  
  // Show toast
  toast.classList.add('show');
  
  // Hide after 4 seconds
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Add smooth scrolling for hash links
window.addEventListener('hashchange', function() {
  const hash = window.location.hash;
  if (hash) {
    const targetId = hash.substring(1);
    scrollToSection(targetId);
  }
});

// Initialize Lucide icons
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}

// Performance optimization - debounce scroll events
window.addEventListener('scroll', debounce(() => {
  updateScrollProgress();
  toggleScrollToTopButton();
  updateActiveNavigation();
}, 16));

console.log('Portfolio website loaded successfully! 🚀');