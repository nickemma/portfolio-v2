const data = {
    awards: [
        {
            title: "Community Star Award",
            year: "2023",
            description: "Recognized for mentoring 100+ developers in cloud architecture and distributed systems"
        },
        {
            title: "Tech Leadership Excellence",
            year: "2024",
            description: "Recognized for leading 3+ workshops on backend best practices (Go microservices, Kubernetes) and CI/CD pipelines used by 500+ developers."
        }
    ],
    experience: [
        {
            title: "CTO & Co-Founder @indextek",
            year: "Mar 2024 - Present",
            description: "Led development of AI-driven SaaS platform for 10k+ users | Managed team of 5 developers and 3 designers | Raised $500k in seed funding from Y Combinator"},
        {
            title: "Software Engineer @Atop Web Technologies",
            year: "May 2023 – June 2024",
            description: "Architected Firebase Cloud Functions reducing data latency by 25% | Implemented real-time dashboard with React/Redux boosting user engagement by 40% | Optimized REST APIs handling 10k+ RPM"
        },
        {
            title: "Backend Engineer @Taaleem(Contractor)",
            year: "June 2022 - Oct 2023",
            description: "Led development of Next.js educational platform with PostgreSQL | Reduced manual tasks by 35% through admin panel design | Integrated analytics improving course completion by 20%"
        },
        {
            title: "Frontend Developer Intern @Xoommit",
            year: "Aug 2022 - Dec 2022",
            description: "Developed responsive web app with React/Redux | Increased user retention by 25% through A/B testing | Enhanced SEO ranking by 40%"}
    ],
    education: [
        // {
        //     title: "BSc Computer Science",
        //     year: "2022-2024",
        //     description: "San Francisco Bay University | GPA: 3.92/4.0 | Focus: AI/ML, Cloud Computing"
        // },
        {
            title: "MLOps Specialization",
            year: "2024",
            description: "Stanford Online | Courses: Distributed Systems, Model Deployment, Kubernetes for ML"
        },
        {
            title: "AWS Certified Developer",
            year: "2024",
            description: "Amazon Web Services | Validation ID: AWS-1234-ABCD"
        },
         {
        title: "API Security Certification",
        year: "2024",
        description: "APIsec University 2024"
      },
        {
        title: "Software Development", 
        year: "2021-2022",
        description: "MICROVERSE" 
      }
    ]

  };

function displayCards(category, element) {
    const container = document.getElementById("cards-container");
    container.innerHTML = ""; // Clear existing cards

    if (!data[category]) return; // Prevent errors

    data[category].forEach(item => {
        const card = document.createElement("div");
        card.className = "col-12 col-md-6";

        card.innerHTML = `
            <div class="fancy-box">
                <h4>${item.title}</h4>
                <h6 class="sm-heading text-white-04 mb-2">${item.year}</h6>
                <p>${item.description}</p>
            </div>
        `;

        container.appendChild(card);
    });

    // Remove "active" class from all titles
    document.querySelectorAll("h1.selectable").forEach(title => title.classList.remove("active"));

    // Add "active" class to the clicked title
    element.classList.add("active");
}

// Display Awards data by default when the page loads
document.addEventListener("DOMContentLoaded", () => {
    const defaultTitle = document.querySelector("h1.selectable");
    if (defaultTitle) {
        defaultTitle.classList.add("active"); // Set "Awards" as active
        displayCards('awards', defaultTitle); // Load "Awards" by default
    }
});