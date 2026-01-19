// Project Data
const projectsData = [
    {
        id: 0,
        title: "Jai Hind College Website",
        industry: "Education",
        duration: "3 months",
        role: "Web Developer & UX Designer",
        tech: "WordPress, Custom CSS, SEO Tools",
        link: "https://jaihindcollege.com",
        images: [
            "images/projects/jai-hind/homepage.jpg",
            "images/projects/jai-hind/courses.jpg",
            "images/projects/jai-hind/portal.jpg"
        ],
        metrics: {
            seo: 88,
            performance: 92
        },
        contribution: [
            "Restructured website architecture for improved navigation and user experience",
            "Implemented responsive design ensuring mobile compatibility across all devices",
            "Optimized page load speeds resulting in 40% faster loading times",
            "Enhanced content accessibility with proper heading structure and alt tags",
            "Integrated Google Analytics for comprehensive user behavior tracking"
        ]
    },
    {
        id: 1,
        title: "Initium Novum Canada",
        industry: "Immigration Services",
        duration: "4 months",
        role: "Digital Marketing Specialist & Web Developer",
        tech: "WordPress, Yoast SEO, Google Ads",
        link: "https://in-immigration.com/",
        images: [
            "images/projects/initium-novum/homepage.jpg",
            "images/projects/initium-novum/services.jpg",
            "images/projects/initium-novum/contact.jpg"
        ],
        metrics: {
            conversion: 38,
            seo: 85,
            performance: 89
        },
        contribution: [
            "Developed conversion-focused landing pages with clear call-to-action elements",
            "Implemented comprehensive SEO strategy targeting immigration-related keywords",
            "Created lead capture forms with automated email follow-up sequences",
            "Optimized website structure for better search engine visibility",
            "Set up Google Analytics goals to track lead generation and conversion rates"
        ]
    },
    {
        id: 2,
        title: "TruelineSpaces E-commerce",
        industry: "E-commerce",
        duration: "5 months",
        role: "E-commerce Manager & Developer",
        tech: "Shopify, Amazon Seller Central, Google Shopping",
        link: "https://truelinespaces.com/",
        images: [
            "images/projects/trueline-spaces/products.jpg",
            "images/projects/trueline-spaces/shopify.jpg",
            "images/projects/trueline-spaces/amazon.jpg"
        ],
        metrics: {
            conversion: 52,
            seo: 82,
            performance: 87
        },
        contribution: [
            "Built complete Shopify storefront with custom theme and product catalog",
            "Created optimized Amazon product listings with enhanced brand content",
            "Implemented inventory management system across multiple sales channels",
            "Developed email marketing campaigns for customer retention and upselling",
            "Set up Google Shopping ads and Facebook advertising campaigns"
        ]
    },
    {
        id: 3,
        title: "Eatheallove Brand",
        industry: "Food & Wellness",
        duration: "6 months",
        role: "Brand Manager & Content Strategist",
        tech: "WordPress, Canva, Social Media APIs",
        link: "https://eatheallove.co",
        images: [
            "images/projects/eatheallove/website.jpg",
            "images/projects/eatheallove/blog.jpg",
            "images/projects/eatheallove/social.jpg"
        ],
        metrics: {
            conversion: 67,
            seo: 79,
            performance: 84
        },
        contribution: [
            "Developed comprehensive content strategy focusing on healthy lifestyle topics",
            "Created engaging social media campaigns across Instagram, Facebook, and Pinterest",
            "Built recipe blog with SEO-optimized content and user-generated content features",
            "Implemented email newsletter system with automated drip campaigns",
            "Designed brand identity including logo, color palette, and visual guidelines"
        ]
    },
    {
        id: 4,
        title: "KindryMedia Co-founder",
        industry: "Digital Media & Consulting",
        duration: "Ongoing",
        role: "Co-founder & Strategy Lead",
        tech: "Multiple Platforms, Analytics Tools, CRM Systems",
        link: "https://kindrymedia.com",
        images: [
            "images/projects/kindry-media/agency.jpg",
        ],
        metrics: {
            conversion: 75,
            seo: 91,
            performance: 95
        },
        contribution: [
            "Co-founded digital agency serving clients across multiple industries globally",
            "Developed standardized processes for client onboarding and project management",
            "Created comprehensive service offerings including web development and digital marketing",
            "Built team of specialists in design, development, and marketing disciplines",
            "Established partnerships with technology vendors and service providers"
        ]
    },
    {
        id: 5,
        title: "TruelineScaping Website",
        industry: "Landscaping Services",
        duration: "2 months",
        role: "Web Developer & SEO Specialist",
        tech: "WordPress, Local SEO Tools, Google My Business",
        link: "https://truelinescaping.com",
        images: [
            "images/projects/trueline-scaping/homepage.jpg",
        ],
        metrics: {
            conversion: 43,
            seo: 86,
            performance: 90
        },
        contribution: [
            "Implemented local SEO strategy targeting geographic service areas",
            "Created service-specific landing pages with before/after project galleries",
            "Optimized Google My Business profile with regular posts and customer reviews",
            "Built contact forms with automated lead routing to appropriate team members",
            "Integrated scheduling system for service consultations and estimates"
        ]
    }
];

// Chart instances storage
let chartInstances = {};

// Utility Functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function changeMainImage(thumbnail) {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    // Update main image
    mainImage.src = thumbnail.src;
    
    // Update active thumbnail
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbnail.classList.add('active');
}

// Modal Functions
function openProjectModal(projectId) {
    const project = projectsData[projectId];
    const modal = document.getElementById('projectModal');
    
    // Update modal content
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalLink').href = project.link;
    document.getElementById('modalIndustry').textContent = project.industry;
    document.getElementById('modalDuration').textContent = project.duration;
    document.getElementById('modalRole').textContent = project.role;
    document.getElementById('modalTech').textContent = project.tech;
    
    // Update images
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    mainImage.src = project.images[0];
    thumbnails.forEach((thumb, index) => {
        if (project.images[index]) {
            thumb.src = project.images[index];
            thumb.style.display = 'block';
            thumb.classList.toggle('active', index === 0);
        } else {
            thumb.style.display = 'none';
        }
    });
    
    // Update contribution list
    const contributionList = document.getElementById('modalContribution');
    contributionList.innerHTML = project.contribution
        .map(item => `<li>${item}</li>`)
        .join('');
    
    // Update progress bars
    updateProgressBars(project.metrics);
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Create charts after modal is visible
    setTimeout(() => {
        createCharts(project);
    }, 100);
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Destroy existing charts
    Object.values(chartInstances).forEach(chart => {
        if (chart) chart.destroy();
    });
    chartInstances = {};
}

function updateProgressBars(metrics) {
    // Animate progress bars
    setTimeout(() => {
    
        document.getElementById('progressSEO').style.width = `${metrics.seo}%`;
        document.getElementById('seoValue').textContent = `${metrics.seo}%`;
        
        document.getElementById('progressPerf').style.width = `${metrics.performance}%`;
        document.getElementById('perfValue').textContent = `${metrics.performance}%`;
    }, 300);
}

function createCharts(project) {
    // Destroy existing charts
    Object.values(chartInstances).forEach(chart => {
        if (chart) chart.destroy();
    });
    
    // Chart colors
    const primaryColor = '#6366f1';
    const secondaryColor = '#8b5cf6';
    const gradientPrimary = 'rgba(99, 102, 241, 0.1)';
    const gradientSecondary = 'rgba(139, 92, 246, 0.1)';
    
    // User Growth Chart (Line Chart)
    const growthCtx = document.getElementById('chartGrowth');
    if (growthCtx) {
        const growthGradient = growthCtx.getContext('2d').createLinearGradient(0, 0, 0, 200);
        growthGradient.addColorStop(0, gradientPrimary);
        growthGradient.addColorStop(1, 'rgba(99, 102, 241, 0)');
        
        chartInstances.growth = new Chart(growthCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Users',
                    data: [1200, 1900, 3000, 5000, 7200, 9500],
                    borderColor: primaryColor,
                    backgroundColor: growthGradient,
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: primaryColor,
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            color: '#6b7280'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#6b7280'
                        }
                    }
                }
            }
        });
    }
    
    // Traffic Analytics Chart (Bar Chart)
    const trafficCtx = document.getElementById('chartTraffic');
    if (trafficCtx) {
        chartInstances.traffic = new Chart(trafficCtx, {
            type: 'bar',
            data: {
                labels: ['Organic', 'Direct', 'Social', 'Referral', 'Paid'],
                datasets: [{
                    label: 'Traffic Sources',
                    data: [45, 25, 15, 10, 5],
                    backgroundColor: [
                        primaryColor,
                        secondaryColor,
                        '#10b981',
                        '#f59e0b',
                        '#ef4444'
                    ],
                    borderRadius: 8,
                    borderSkipped: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            color: '#6b7280',
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#6b7280'
                        }
                    }
                }
            }
        });
    }
    
    // Client Satisfaction Chart (Doughnut Chart)
    const satisfactionCtx = document.getElementById('chartSatisfaction');
    if (satisfactionCtx) {
        chartInstances.satisfaction = new Chart(satisfactionCtx, {
            type: 'doughnut',
            data: {
                labels: ['Excellent', 'Good', 'Average'],
                datasets: [{
                    data: [75, 20, 5],
                    backgroundColor: [
                        primaryColor,
                        secondaryColor,
                        '#e5e7eb'
                    ],
                    borderWidth: 0,
                    cutout: '70%'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true,
                            color: '#6b7280'
                        }
                    }
                }
            }
        });
    }
}

// Navigation Functions
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
    
    // Active navigation highlighting
    function updateActiveNav() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
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
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call
}

// Mobile Menu Functions
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });
    }
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.project-card, .skill-category, .contact-item').forEach(el => {
        observer.observe(el);
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation
    initNavigation();
    initMobileMenu();
    initScrollAnimations();
    
    // Modal event listeners
    document.addEventListener('click', (e) => {
        const modal = document.getElementById('projectModal');
        if (e.target === modal) {
            closeProjectModal();
        }
    });
    
    // Keyboard navigation for modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProjectModal();
        }
    });
    
    // Navbar scroll effect
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Add loading animation to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// Performance optimization
window.addEventListener('load', () => {
    // Preload modal images
    projectsData.forEach(project => {
        project.images.forEach(imageSrc => {
            const img = new Image();
            img.src = imageSrc;
        });
    });
});

// Add CSS animation classes
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: slideInUp 0.6s ease-out forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .project-card {
        opacity: 0;
        transform: translateY(30px);
        animation: slideInUp 0.6s ease-out forwards;
    }
`;
document.head.appendChild(style);