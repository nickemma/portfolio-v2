document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('data/projects.json');
    const { projects } = await response.json();
    const container = document.getElementById('projects-container');

    const projectHTML = projects.map(project => `
      <div class="swiper-slide">
        <div class="project-card">
          <div class="project-img">
            <img src="${project.image}" alt="${project.title}">
            <ul class="p-icon-link">
                        <li>
                          <a href="${project.links.demo}"  target="_blank"><i class="my-icon icon-eye"></i></a>
                        </li>
                        <li>
                         <a href="${project.links.github}" target="_blank"><i class="fa-brands fa-github"></i></a>
                        </li>
            </ul>
          </div>
          <div class="project-content">
            <h4 class="text-4 text-bold text-capital">
              <a href="#">${project.title}</a>
            </h4>
            <p class="text-para-2">${project.tech}</p>
          </div>
        </div>
      </div>
    `).join('');

     container.innerHTML = projectHTML;
    
    // Initialize Swiper with proper timing
    setTimeout(() => {
      new Swiper('.slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: '.project-pagination',
          clickable: true,
        },
        breakpoints: {
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 }
        }
      });
    }, 150);

  } catch (error) {
    console.error('Error loading projects:', error);
    document.getElementById('projects-container').innerHTML = `
      <div class="swiper-slide">
        <div class="error-message">
          <i class="fas fa-exclamation-triangle"></i>
          Projects currently unavailable
        </div>
      </div>
    `;
  }
});
