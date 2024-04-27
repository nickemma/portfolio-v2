import { BsCalendar2Date } from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css';
import CV from '../../assets/resume/CV.pdf';
import PropTypes from 'prop-types';
import './about.scss';

const About = ({ menu }) => {
  Aos.init({ duration: 1000 });
  return (
    <section className={`about ${menu && 'open'}`}>
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
                  I&apos;m Charlotte Divine Dusenge, a
                  {' '}
                  <span>Web Developer</span>
                </h3>
                <p data-aos="fade-in">
                  I&apos;m a complex problem-solver with an analytical and driven
                  mindset. Additionally, I possess strong organizational and
                  teamwork skills, making me a dedicated and cooperative team
                  worker. I am committed to achieving demanding development
                  objectives within tight schedules, while consistently
                  producing impeccable code. To enhance my skills, I enrolled in
                  a remote web development school called &apos;Microverse,&apos; where I
                  collaborate with a diverse group of developers from around the
                  world, often through pair programming. Furthermore, I expanded
                  my knowledge in Node.js by participating in a program called
                  Andela, which focuses on East African developers. During my
                  free time, I derive joy from listening to music and enjoy
                  solving problems for fun.
                </p>
              </div>
            </div>
            <div className="row" data-aos="fade-in">
              <div className="personal-info padd-15">
                <div className="row">
                  <div className="info-item padd-15" data-aos="fade-in">
                    <p>
                      Name :
                      {' '}
                      <span>Diva</span>
                    </p>
                  </div>
                  <div className="info-item padd-15" data-aos="fade-in">
                    <p>
                      Age :
                      {' '}
                      <span>As old as the Universe</span>
                    </p>
                  </div>
                  <div className="info-item padd-15" data-aos="fade-in">
                    <p>
                      Email :
                      {' '}
                      <span>divinemaina@gmail.com</span>
                    </p>
                  </div>

                  <div className="info-item padd-15" data-aos="fade-in">
                    <p>
                      Certifications :
                      {' '}
                      <span>Full Stack Developer</span>
                    </p>
                  </div>
                  <div className="info-item padd-15" data-aos="fade-in">
                    <p>
                      Phone :
                      {' '}
                      <span>+250-782-971-842</span>
                    </p>
                  </div>
                  <div className="info-item padd-15" data-aos="fade-in">
                    <p>
                      Hobbies :
                      {' '}
                      <span>Music $ praying</span>
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
                      <div className="progress-in" style={{ width: '96%' }} />
                      <div className="skill-percent">96%</div>
                    </div>
                  </div>
                  <div className="skill-item" data-aos="fade-in">
                    <h3>NodeJs</h3>
                    <div className="progress">
                      <div className="progress-in" style={{ width: '96%' }} />
                      <div className="skill-percent">96%</div>
                    </div>
                  </div>

                  <div className="skill-item" data-aos="fade-in">
                    <h3>ES6</h3>
                    <div className="progress">
                      <div className="progress-in" style={{ width: '99%' }} />
                      <div className="skill-percent">99%</div>
                    </div>
                  </div>
                  <div className="skill-item" data-aos="fade-in">
                    <h3>Tailwind</h3>
                    <div className="progress">
                      <div className="progress-in" style={{ width: '100%' }} />
                      <div className="skill-percent">100%</div>
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
                          <i>
                            {' '}
                            2023 -2024
                          </i>
                        </h3>
                        <h4 className="timeline-title">
                          Full Stack Web Development Certification at The Gym
                        </h4>
                        <p className="timeline-text">
                          - Rwanda&apos;s most intense software development
                          trainee program. where I spent 9000+ hours mastering
                          algorithms, data structures  while developing
                          projects with NodeJs, NestJs, Tailwind CSS,
                          JavaScript and React.
                        </p>
                        <p className="timeline-text">
                          - Developed skills in on-site pair-programming using
                          GitHub, industry-standard git-flow, and daily standups
                          to communicate and collaborate
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
                          <i>2022-2024</i>
                        </h3>
                        <h4 className="timeline-title">
                          Code Reviewer at Microverse
                        </h4>
                        <p className="timeline-text">
                          - Performing code reviews for HTML, React,Javascript
                          & RoR-based projects for over 100+ junior developers to
                          ensure their projects comply with style and functionality
                          guidelines and deliver the best code
                          quality.
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
                          <i>2022-2024</i>
                        </h3>
                        <h4 className="timeline-title">
                          Mentor at Microverse
                        </h4>
                        <p className="timeline-text">
                          - Mentored junior web developers, providing technical
                          support through code quality advices.

                        </p>
                        <p className="timeline-text">
                          - Used to provide advice and tips on maintaining
                          motivation to maintain longevity in the program.
                        </p>
                        <p className="timeline-text">
                          - Providing specialized technical advice and guidance
                          to multiple junior developers over 1:1 zoom calls.
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
