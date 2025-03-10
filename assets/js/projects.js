
// Portfolio Data - Single source of truth
const portfolioItems = [
    {
        title: "Talckatoo",
        image: "assets/images/talckatoo.png",
        url: "https://talckatoo.me/",
        categories: ["Communication", "Translation", "AI", "Social"],
        alt: "AI-powered communication platform"
    },
    {
        title: "Taaleem",
        image: "assets/images/taaleem.png",
        url: "https://www.taaleem.ma/",
        categories: ["EdTech", "LMS", "eLearning"],
        alt: "Educational platform with ML recommendations"
    },
    {
        title: "RentWheels",
        image: "assets/images/bookme.png",
        url: "https://github.com/NickEmma/car-rental-app",
        categories: ["AutoTech", "Microservices", "Go"],
        alt: "Car rental microservices architecture"
    }
];

// Generate portfolio items
function generatePortfolioItems() {
    const wrapper = document.getElementById('portfolio-slider-wrapper');

    portfolioItems.forEach(item => {
        const categoriesHTML = item.categories.map(category => `
            <li>
                <a class="link-hover" href="#">
                    <span data-text="${category}">${category}</span>
                </a>
            </li>
        `).join('');

        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="portfolio-box">
                <div class="portfolio-img">
                    <a href="${item.url}" target="_blank">
                        <img src="${item.image}" alt="${item.alt}">
                    </a>
                </div>
                <div class="pt-4">
                    <ul class="list-inline-dot sm-heading text-white mb-2">
                        ${categoriesHTML}
                    </ul>
                    <h2>
                        <a class="portfolio-caption" href="${item.url}" target="_blank">
                            <i class="bi bi-arrow-right"></i>
                            ${item.title}
                        </a>
                    </h2>
                </div>
            </div>
        `;
        wrapper.appendChild(slide);
    });
}

// Initialize Swiper after content load
document.addEventListener('DOMContentLoaded', () => {
    generatePortfolioItems();
    
    const portfolioSwiper = new Swiper('.portfolio-slider', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-portfolio-next',
            prevEl: '.swiper-portfolio-prev',
        },
    });
});
