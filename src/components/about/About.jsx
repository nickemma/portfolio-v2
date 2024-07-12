import { BsCalendar2Date } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import CV from "../../assets/resume/Nicholas.pdf";
import { GoArrowUpRight } from "react-icons/go";
import PropTypes from "prop-types";
import "./about.scss";

const About = ({ menu }) => {
  Aos.init({ duration: 1000 });
  return (
    <section className={`about ${menu && "open"}`}>
      <div className="container">
        <div className="row">
          <div data-aos="zoom-in" className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text">
                <h3 data-aos="fade-in">
                  I&apos;m Nicholas Emmanuel. A{" "}
                  <span>Software Engineer Nerd</span>
                </h3>
                <p data-aos="fade-up">
                  I&apos;m passionate introvert and software engineer nerd who
                  loves building things with code.
                </p>
                <p data-aos="fade-right">
                  My first experience with programming was in mid 2021, but I
                  didn&apos;t last long: I was a big fan of computer-animated TV
                  shows, games and graphics, so I decided I wanted to do
                  “Computer Programming”. I started learning Python and
                  JavaScript on my own and it was fun but inscrutable at the
                  same time.
                </p>
                <p data-aos="fade-up">
                  A year later, I decided to try a coding Bootcamp. It was a
                  radically different experience. I distinctly remember the
                  moment it clicked; I was watching The Social Dilemma, and they
                  were talking about how the algorithms were designed to keep
                  us, the users, engaged. I thought to myself: statistically,
                  what was their best move? So I started to think about the
                  algorithms and the logic behind them. I was hooked.
                </p>
                <p data-aos="fade-right">
                  Since then, I&apos;ve been honing my skills and learning
                  Javascript. I recently graduated from Microverse a 10-month
                  intensive Web Development Bootcamp program, where I
                  collaborated with talented developers worldwide, often
                  engaging in pair programming sessions. I&apos;m seeking a
                  full-time role where I can contribute to achieving a
                  company&apos;s 🌎 goals.
                </p>
              </div>
              <div data-aos="flip-up" className="buttons">
                <a
                  href={CV}
                  download
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Resume
                </a>
              </div>
            </div>
            {/* =============== Skills ===============  */}
            <div className="my-skills">
              <h2 data-aos="fade-up" data-aos-duration="2000">
                My Skills
              </h2>
              <p data-aos="fade-right">
                Apart from the courses included in my degree, I&apos;ve taken a
                number of online courses such as{" "}
                <strong>
                  You Don&apos;t Know JS, The Joy Of React, 100 Days Of Python,
                </strong>{" "}
                and I&apos;m currently Learning{" "}
                <strong>Java/Spring Boot, DSA, and System Design.</strong>
              </p>
            </div>
            <div className="skills padd-15">
              <div className="row-skill">
                <div
                  className="skill-item"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="skillsIcon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                  </svg>
                  <h3>Javascript</h3>
                </div>
                <div
                  className="skill-item"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="skillsIcon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                  </svg>
                  <h3>React.JS</h3>
                </div>
                <div
                  className="skill-item"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="skillsIcon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                  </svg>
                  <h3>Python</h3>
                </div>

                <div
                  className="skill-item"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="skillsIcon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                  </svg>
                  <h3>Express.js</h3>
                </div>
                <div
                  className="skill-item"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="skillsIcon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                  </svg>
                  <h3>SpringBoot</h3>
                </div>
              </div>
              <div className="row-skill">
                <div
                  className="skill-item"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="skillsIcon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                  </svg>
                  <h3>Typescript</h3>
                </div>
                <div
                  className="skill-item"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="skillsIcon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                  </svg>
                  <h3>MongoDB</h3>
                </div>
                <div
                  className="skill-item"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="skillsIcon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                  </svg>
                  <h3>NextJS</h3>
                </div>

                <div
                  className="skill-item"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="skillsIcon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                  </svg>
                  <h3>PostgreSQL</h3>
                </div>
                <div
                  className="skill-item"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="skillsIcon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                  </svg>
                  <h3>Git / Github</h3>
                </div>
              </div>
            </div>
            {/* =============== Skills ===============  */}
            <div className="my-experience">
              <h2 data-aos="fade-right" data-aos-duration="1500">
                My <span>Experience</span> As A Software Engineer
              </h2>
              <p data-aos="fade-left" data-aos-duration="1000">
                A display of my growth as a Software Engineer”, showcasing the
                <br /> progress I have achieved and the valuable experience
                I&apos;ve acquired
              </p>
            </div>

            <div className="row">
              <div
                className="experience padd-15"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <div className="row">
                  <div className="timeline-box">
                    <div className="timeline shadow-dark">
                      <div className="timeline-item">
                        <div className="circle-dot" />
                        <div className="expert">
                          <h4>Atop Technologies</h4>
                          <h3 className="timeline-date">
                            <BsCalendar2Date className="fa fa-calendar" />
                            <i>May 2023 - June 2024</i>
                          </h3>
                        </div>
                        <h4 className="timeline-title">
                          Software Engineer Intern
                        </h4>
                        <p className="timeline-text">
                          <span>-</span> Implemented 10+ serverless workflows
                          using Firebase Cloud Functions, seamlessly integrating
                          REST APIs and conducting rigorous testing, which led
                          to a 70% reduction in execution time and improved
                          operational efficiency.
                        </p>
                        <p className="timeline-text">
                          <span>-</span> Collaborated closely with a team of 2
                          developers and a team lead to ensure the seamless
                          operation and continuous improvement of Scorebox,
                          facilitating a significant decrease in development
                          cycle time.
                        </p>
                        <a
                          target="_blank"
                          className="link"
                          href="https://www.atopwebtech.com/"
                          rel="noreferrer"
                        >
                          Company Website{" "}
                          <GoArrowUpRight className="live-link" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="experience padd-15"
                data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <div className="row">
                  <div className="timeline-box">
                    <div className="timeline shadow-dark">
                      <div className="timeline-item">
                        <div className="circle-dot" />
                        <div className="expert">
                          <h4>TaaleemGate</h4>
                          <h3 className="timeline-date">
                            <BsCalendar2Date className="fa fa-calendar" />
                            <i>June 2022 - Sep 2023</i>
                          </h3>
                        </div>
                        <h4 className="timeline-title">Frontend Engineer</h4>
                        <p className="timeline-text">
                          <span>-</span> Designed and implemented a
                          comprehensive educational system using Next.js and
                          Nest.js, seamlessly integrated into the company&apso;s
                          website, resulting in a 20% increase in educational
                          participation due to its intuitive and accessible
                          design. .
                        </p>
                        <p className="timeline-text">
                          <span>-</span> Utilized auto-grading tools to automate
                          quizzes and assessments, providing students with
                          real-time feedback and contributing to a transparent
                          and error-free learning experience.
                        </p>
                        <a
                          target="_blank"
                          className="link"
                          href="https://www.taaleem.ma/"
                          rel="noreferrer"
                        >
                          Company Website{" "}
                          <GoArrowUpRight className="live-link" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="education padd-15"
                data-aos="zoom-in-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1500"
              >
                <div className="row">
                  <div className="timeline-box">
                    <div className="timeline shadow-dark">
                      <div className="timeline-item">
                        <div className="circle-dot" />
                        <div className="expert">
                          <h4>Xoommit</h4>
                          <h3 className="timeline-date">
                            <BsCalendar2Date className="fa fa-calendar" />
                            <i> Nov 2021 - June 2022</i>
                          </h3>
                        </div>
                        <h4 className="timeline-title">
                          Frontend Developer Intern
                        </h4>
                        <p className="timeline-text">
                          <span>-</span> Improved the company&apos;s search
                          engine rankings by using SeoClarity Search Engine
                          Optimization (SEO) techniques, resulting to Extensive
                          suite of SEO analysis tools and Generative AI
                          assistant
                        </p>
                        <p className="timeline-text">
                          <span>-</span> Worked with more than 3 departments
                          across the company, including marketers, DevOps team
                          and project manager, in developing new ideas,
                          initiatives, products, and services leveraging NextJs,
                          Graphql and wordpress.
                        </p>
                        <a
                          target="_blank"
                          className="link"
                          href="https://www.atopwebtech.com/"
                          rel="noreferrer"
                        >
                          Company Website{" "}
                          <GoArrowUpRight className="live-link" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
About.propTypes = {
  menu: PropTypes.bool.isRequired,
};

export default About;
