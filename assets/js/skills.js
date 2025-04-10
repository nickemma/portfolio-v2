// Tech Stack Data - Single source of truth
const techStack = [
    // Languages
    'Go', 'Python', 'Java', 

    // Backend & Frameworks
    'Gin', 'spring-boot', 'gRPC', 'FastAPI',      
    'GraphQL', 'RabbitMQ',         
    
    // Databases
    'PostgreSQL', 'MongoDB', 'DynamoDB', 'Redis',  
    
    // Cloud & DevOps
    'AWS', 'GCP', 
    'Docker', 'Kubernetes', 
    'Terraform', 'Prometheus', 'Grafana',
    'GitHub Actions', 'Helm', 
    
    // MLOps & AI
    'HIPPA', 'Kong API Gateway',
    'WebRTC', 'Elasticsearch', 'TensorFlow',
    
    // Frontend (minimal, since backend/MLOps is your focus)
    'React', 'Next.js', 'TypeScript'  
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
