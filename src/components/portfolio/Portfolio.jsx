import { useState, useRef } from "react";
import "./portfolio.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import js from "../../assets/images/jsreal1.png";
import meals from "../../assets/images/mealswbst.png";
import space from "../../assets/images/spacetravel.png";
import moni from "../../assets/images/moni.png";
import bookme from "../../assets/images/bookme.png";
import ecommerce from "../../assets/images/ecommerce.png";
import Modal from "../modal/Modal";
import PropTypes from "prop-types";

const Portfolio = ({ menu }) => {
  const [currentFilter, setCurrentFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const currentProjectRef = useRef(undefined);
  Aos.init({ duration: 1000 });

  const projects = useRef([
    {
      name: "RentMe",
      description:
        "'RentMe' is a car rental agencies which serves people who require a temporary vehicle, It allow users to create an account,and book a car for a specific period of time. view all available Options, and view all bookings made by a specific user.",

      techs: [
        "React & Redux",
        "TailwindCss",
        "Ruby on Rails",
        "Framer Motion",
        "SwiperJs",
      ],
      image: bookme,
      linkToLiveVersion: "https://car-rental-1pl5awonj-nickemma.vercel.app/",
      linkToSource: "https://github.com/nickemma/car-rental-app",
    },
    {
      name: "Destructors E-commerce",
      description:
        "Welcome to our E-commerce website, where shopping meets convenience and affordability. ensuring the safety and security of your personal and payment information using the latest security measures and encryption technology to safeguard your data and protect your privacy and we offers a seamless shopping experience.",

      techs: ["React & Redux", "Typescript", "GraphQL", "Firebase", "Sass"],
      image: ecommerce,
      linkToLiveVersion: "https://multi-crown-clothing.netlify.app/",
      linkToSource: "https://github.com/nickemma/multi-clothing-shop",
    },

    {
      name: "Space Travellers",
      description:
        '"Space Travelers" is a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
      techs: ["React & Redux", "TailwindCss", "Unit Testing"],
      image: space,
      linkToLiveVersion: "https://microverse-space-hub.netlify.app/",
      linkToSource: "https://github.com/nickemma/space-hub",
    },
    {
      name: "Monishare frontend / Monishare backend ",
      description:
        '"Monishare frontend"  this was a team project for the car booking app for a renter and a rentee at the same time / "Monishare backend" where we created APIs to be consumed in  Monishare front-end',
      techs: [
        "React",
        "Tailwind CSS",
        "TypeScript ",
        "NestJs",
        "NodeJs",
        "Docker",
      ],
      image: moni,
      linkToLiveVersion:
        "http://staging.violet.monishare.ojemba.s3-website.eu-central-1.amazonaws.com/",
      linkToBackend: "http://3.66.182.10:3000/api",
    },
    {
      name: "Get the best meals",
      description:
        "`Get the best meals` is a simple Vanilla JS website for reserving meals where a user can make reservations, add comments & likes or just get details about meals that they like",
      techs: ["HTML", "CSS3", "JavaScript", "MealDB API"],
      image: meals,
      linkToLiveVersion:
        "https://divinecharlotte.github.io/javascript-capstone/",
      linkToSource: "https://github.com/divinecharlotte/javascript-capstone",
    },
    {
      name: "Summer BootCamp",
      description:
        "`Summer BootCamp` is based on an annually organized boot camp for students to learn and improve their coding skills. It is a simple website that allows students to register for the boot camp, view the boot camp schedule, and get more information about the boot camp.",
      techs: ["CSS", "HTML", "JavaScript"],
      image: js,
      linkToLiveVersion: "https://nickemma.github.io/capstone-project-1/",
      linkToSource: "https://github.com/nickemma/capstone-project-1",
    },
  ]);

  const setFilter = (e) => {
    setCurrentFilter(e.target.textContent);
  };

  const openModal = (current) => {
    currentProjectRef.current = current;
    setShowModal(true);
  };

  let filtered = [];

  if (currentFilter === "All") {
    filtered = projects.current;
  } else {
    filtered = projects.current.filter((project) =>
      project.techs.includes(currentFilter)
    );
  }

  return (
    <>
      <section className={`portfolio ${menu && "open"}`}>
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-heading padd-15">
              <h2>My Latest Projects: </h2>
            </div>
          </div>
          <div className="projects">
            <div className="project-filter">
              <button
                type="button"
                className={`${
                  currentFilter === "All" ? "filter-active" : "list-item"
                }`}
                onClick={setFilter}
              >
                All
              </button>
              <button
                type="button"
                className={`${
                  currentFilter === "Ruby on Rails"
                    ? "filter-active"
                    : "list-item"
                }`}
                onClick={setFilter}
              >
                Ruby on Rails
              </button>
              <button
                type="button"
                className={`${
                  currentFilter === "NodeJs" ? "filter-active" : "list-item"
                }`}
                onClick={setFilter}
              >
                NodeJs
              </button>
              <button
                type="button"
                className={`${
                  currentFilter === "React" ? "filter-active" : "list-item"
                }`}
                onClick={setFilter}
              >
                React
              </button>
              <button
                type="button"
                className={`${
                  currentFilter === "React & Redux"
                    ? "filter-active"
                    : "list-item"
                }`}
                onClick={setFilter}
              >
                React & Redux
              </button>
              <button
                type="button"
                className={`${
                  currentFilter === "JavaScript" ? "filter-active" : "list-item"
                }`}
                onClick={setFilter}
              >
                JavaScript
              </button>
            </div>
            <div className="projects-row">
              {filtered?.map((pro) => (
                <div key={pro.name} className="portfolio-item padd-15">
                  <div
                    data-aos="fade-right"
                    className="portfolio-item-inner shadow-dark"
                  >
                    <div className="portfolio-img">
                      <img src={pro.image} alt="" />
                    </div>
                    <h3>{pro.name}</h3>
                    <ul className="techs">
                      {pro.techs.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      onClick={() => {
                        openModal(pro);
                      }}
                      className="btn project-button"
                    >
                      See Project
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        currentProject={currentProjectRef.current}
      />
    </>
  );
};

Portfolio.propTypes = {
  menu: PropTypes.bool.isRequired,
};

export default Portfolio;
