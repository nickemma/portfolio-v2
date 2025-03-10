
const blogPosts = [
    {
        title: "Building Go Microservices at Scale",
        image: "assets/images/golang.png",
        category: "Backend Architecture",
        date: "Mar 10, 2025",
        url: "https://medium.com/@nicholasemmanuel321/building-a-scalable-backend-in-go-using-microservices-%EF%B8%8F-bddb3a2d227b",
        author: "Nicholas Emmanuel"
    },
    {
        title: "MLOps Pipeline Design Patterns",
        image: "assets/images/MLOps.png",
        category: "Machine Learning",
        date: "Mar 10, 2025",
        url: "https://medium.com/@nicholasemmanuel321/how-to-set-up-an-mlops-project-a-step-by-step-guide-for-production-ready-ml-74c66ff78617",
        author: "Nicholas Emmanuel"
    },
    {
        title: "Unleashing the Potential of AI",
        image: "assets/images/ai.webp",
        category: "Artificial Intelligence",
        date: "Mar 20, 2023",
        url: "https://medium.com/@nicholasemmanuel321/unleashing-the-potential-of-ai-transforming-industries-and-enhancing-lives-1a3a5d8a648b",
        author: "Nicholas Emmanuel"
    },
    {
        title: "The Future of API Security",
        image: "assets/images/owasp.webp",
        category: "API Security",
        date: "Mar 26, 2024",
        url: "https://medium.com/@nicholasemmanuel321/understanding-the-owasp-top-10-protecting-web-applications-from-common-threats-1f2413c3c7b7",
        author: "Nicholas Emmanuel"
    }
];

// Generate Blog Posts
function generateBlogPosts() {
    const wrapper = document.getElementById('blog-slider-wrapper');

    blogPosts.forEach(post => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="blog-post-box">
                <div class="blog-post-img">
                    <a class="blog-post-img-link" href="${post.url}" target="_blank">
                        <img src="${post.image}" alt="${post.title}">
                    </a>
                    <div class="blog-post-category">
                        <a href="#">
                            <span data-text="${post.category}">${post.category}</span>
                        </a>
                    </div>
                </div>
                <div class="mt-4">
                    <ul class="list-inline-dot sm-heading text-white mb-2">
                        <li>
                            <a class="link-hover" href="#">
                                <span data-text="by ${post.author}">by ${post.author}</span>
                            </a>
                        </li>
                        <li>
                            <a class="link-hover" href="#">
                                <span data-text="${post.date}">${post.date}</span>
                            </a>
                        </li>
                    </ul>
                    <h2 class="mb-0">
                        <a class="blog-caption" href="${post.url}" target="_blank">
                            <i class="bi bi-arrow-right"></i>
                            ${post.title}
                        </a>
                    </h2>
                </div>
            </div>
        `;
        wrapper.appendChild(slide);
    });
}

// Initialize Swiper
document.addEventListener('DOMContentLoaded', () => {
    generateBlogPosts();
    
    const blogSwiper = new Swiper('.blog-slider', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-blog-next',
            prevEl: '.swiper-blog-prev',
        },
    });
});