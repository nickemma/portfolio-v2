// Tech Stack Data - Single source of truth
const techStack = [
    // Languages
    'Go', 'Python', 

    // Backend & Frameworks
    'Gin', 'FastAPI',      
    
    // Databases
    'PostgreSQL', 'MongoDB', 'Redis',  
    
    // Cloud & DevOps
    'AWS', 'GCP', 
    'Docker', 'Kubernetes', 
    'Terraform', 'Prometheus', 'Grafana',
    'GitHub Actions', 
    
    // MLOps & AI
    'Kubeflow', 'PyTorch',
    'Airflow', 'MLflow', 'TensorFlow',
    
];

// Generate slider items
function generateTechStack() {
    const sliderWrapper = document.getElementById('tech-stack-slider');
    
    techStack.forEach(tech => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="client-box">
                <h4>${tech}</h4>
            </div>
        `;
        sliderWrapper.appendChild(slide);
    });
}

// Initialize after DOM load
document.addEventListener('DOMContentLoaded', () => {
    generateTechStack();
    
    // Initialize Swiper (keep your existing config)
    new Swiper('.clients-slider', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
});
