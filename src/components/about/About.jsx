import { BsCalendar2Date } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import CV from "../../assets/resume/Nicholas.pdf";
import PropTypes from "prop-types";
import "./about.scss";

const About = ({ menu }) => {
  Aos.init({ duration: 1000 });
  return (
    <section className={`about ${menu && "open"}`}>
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text">
                <h3 data-aos="fade-in">
                  I&apos;m Nicholas Emmanuel C, A <span>Software Engineer</span>
                </h3>
                <p data-aos="fade-in">
                  I&apos;m a resourceful problem-solver with a keen analytical
                  mindset and a drive for excellence. Additionally, I possess
                  strong organizational and teamwork skills, making me a
                  dedicated and cooperative team player. I have experience in
                  building web products from idea to launch. To further hone my
                  skills, I enrolled in Microverse, a renowned remote web
                  development school, where I collaborated with talented
                  developers worldwide, often engaging in pair programming
                  sessions. Additionally, I&apos;m pursuing a degree in Computer
                  Science and CyberSecurity at the University of the people.
                </p>
                <p data-aos="fade-in">
                  I am currently open to new opportunities 🌎 and ready to
                  collaborate on new projects either remotely or on site.
                </p>
              </div>
            </div>
            <div className="row" data-aos="fade-in">
              <div className="personal-info padd-15">
                <div className="row">
                  <div className="info-item padd-15" data-aos="fade-in">
                    <p>
                      Name : <span>Nicholas Emmanuel</span>
                    </p>
                  </div>
                  <div className="info-item padd-15" data-aos="fade-in">
                    <p>
                      Age : <span>As old as the Universe</span>
                    </p>
                  </div>
                  <div className="info-item padd-15" data-aos="fade-in">
                    <p>
                      Email :{" "}
                      <span>
                        nicholasemmanuel321 <br /> @gmail.com
                      </span>
                    </p>
                  </div>

                  <div className="info-item padd-15" data-aos="fade-in">
                    <p>
                      Certifications :{" "}
                      <span>
                        Full Stack Software
                        <br />
                        Developer
                      </span>
                    </p>
                  </div>
                  <div className="info-item padd-15" data-aos="fade-in">
                    <p>
                      Phone : <span>+234-916-319-8026</span>
                    </p>
                  </div>
                  <div className="info-item padd-15" data-aos="fade-in">
                    <p>
                      Hobbies : <span>Music $ Praying </span>
                    </p>
                  </div>
                </div>
                <div className="row" data-aos="fade-in">
                  <div className="buttons">
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
              </div>
              <div className="skills padd-15">
                <div className="row">
                  <div className="skill-item" data-aos="fade-in">
                    <h3>React</h3>
                    <div className="progress">
                      <div className="progress-in" style={{ width: "93%" }} />
                      <div className="skill-percent">93%</div>
                    </div>
                  </div>
                  <div className="skill-item" data-aos="fade-in">
                    <h3>MERN Stack</h3>
                    <div className="progress">
                      <div className="progress-in" style={{ width: "90%" }} />
                      <div className="skill-percent">90%</div>
                    </div>
                  </div>

                  <div className="skill-item" data-aos="fade-in">
                    <h3>Golang</h3>
                    <div className="progress">
                      <div className="progress-in" style={{ width: "82%" }} />
                      <div className="skill-percent">82%</div>
                    </div>
                  </div>
                  <div className="skill-item" data-aos="fade-in">
                    <h3>Penetration/API testing</h3>
                    <div className="progress">
                      <div className="progress-in" style={{ width: "75%" }} />
                      <div className="skill-percent">75%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="education padd-15" data-aos="fade-in">
                <h3 className="title">Education</h3>
                <div className="row">
                  <div className="timeline-box">
                    <div className="timeline shadow-dark">
                      <div className="timeline-item">
                        <div className="circle-dot" />
                        <h3 className="timeline-date">
                          <BsCalendar2Date className="fa fa-calendar" />
                          <i> 2023 - 2026</i>
                        </h3>
                        <h4 className="timeline-title">
                          BSc in Computer Science and CyberSecurity
                        </h4>
                        <p className="timeline-text">
                          - Currently pursuing a degree in Computer Science and
                          CyberSecurity at the University of the People. I have
                          gained a solid foundation in computer science,
                          cybersecurity, and programming languages like Python,
                          Java, and C++. I have also developed skills in network
                          security, cryptography, and ethical hacking. I am
                          currently working on a project that involves building
                          a secure restAPI web services using the Golang and
                          implementing API security measures to protect user
                          data and prevent cyber attacks.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="experience padd-15" data-aos="fade-in">
                <h3 className="title">Experience</h3>
                <div className="row">
                  <div className="timeline-box">
                    <div className="timeline shadow-dark">
                      <div className="timeline-item">
                        <div className="circle-dot" />
                        <h3 className="timeline-date">
                          <BsCalendar2Date className="fa fa-calendar" />
                          <i>2023 - 2024</i>
                        </h3>
                        <h4 className="timeline-title">Full stack developer</h4>
                        <p className="timeline-text">
                          - These experiences have equipped me with the skills
                          and mindset needed to contribute effectively to a
                          dynamic and innovative work environment, where
                          collaboration, innovation, and adaptability are
                          paramount.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="education padd-15" data-aos="fade-in">
                <div className="row">
                  <div className="timeline-box">
                    <div className="timeline shadow-dark">
                      <div className="timeline-item">
                        <div className="circle-dot" />
                        <h3 className="timeline-date">
                          <BsCalendar2Date className="fa fa-calendar" />
                          <i>2022-2023</i>
                        </h3>
                        <h4 className="timeline-title">
                          Full Stack Web Development Certification at Microverse
                        </h4>
                        <p className="timeline-text">
                          - Spent 2500+ hours mastering algorithms, data
                          structures, and full-stack development while
                          simultaneously developing projects with NodeJs,Ruby,
                          Rails, JavaScript, React, and Redux.
                        </p>
                        <p className="timeline-text">
                          - Developed skills in remote pair-programming using
                          GitHub, industry-standard git-flow, and daily standups
                          to communicate and collaborate with international
                          ,local remote developers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="experience padd-15" data-aos="fade-in">
                <div className="row">
                  <div className="timeline-box">
                    <div className="timeline shadow-dark">
                      <div className="timeline-item">
                        <div className="circle-dot" />
                        <h3 className="timeline-date">
                          <BsCalendar2Date className="fa fa-calendar" />
                          <i>2022-2023</i>
                        </h3>
                        <h4 className="timeline-title">
                          Front-End Developer Intern
                        </h4>
                        <p className="timeline-text">
                          - Collaborated with a dynamic team of developers to
                          create innovative web applications.
                        </p>
                        <p className="timeline-text">
                          - Contributed to the development of XOOMMIT’s custom
                          software, ensuring seamless user experiences.
                        </p>
                        <p className="timeline-text">
                          - Gained practical experience in agile development
                          methodologies and version control (e.g., Git).
                        </p>
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
