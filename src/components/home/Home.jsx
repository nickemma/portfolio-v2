import { useRef, useEffect } from "react";
import { AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { FaGithub, FaMedium } from "react-icons/fa";
import Typed from "typed.js";
import "./home.scss";
import logo from "../../assets/images/techie3.png";
import BgCanvas from "../bg-canvas/BgCanvas";
import PropTypes from "prop-types";

const Home = ({ menu }) => {
  const mouseDown = useRef(false);
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Software Engineer",
        "Penetration Tester",
        "Golang Developer",
        "CyberSecurity Enthusiast",
      ], // Strings to display
      // Speed settings, try different values until you get good results
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <BgCanvas mouseDown={mouseDown} />
      <section className={`home-section ${menu && "open"}`}>
        <ul className="social-links">
          <li>
            <a
              target="_blank"
              href="https://github.com/nickemma"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/techieemma/"
              rel="noreferrer"
            >
              <AiOutlineLinkedin />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://medium.com/@nicholasemmanuel321"
              rel="noreferrer"
            >
              <FaMedium />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://twitter.com/techieEmma"
              rel="noreferrer"
            >
              <AiOutlineTwitter />
            </a>
          </li>
        </ul>
        <div className="container">
          <div className="row">
            <div className="home-info padd-15">
              <h3 className="hello">
                Hey there, I&apos;m{" "}
                <span className="name">Nicholas Emmanuel</span>
              </h3>
              <h3 className="my-profession">
                I&apos;m a <span className="typing" ref={el} />
              </h3>
              <p>
                I&apos;m passionate about crafting digital experiences that make
                a difference. Take a look at some of my projects and expertise.
                I&apos;m here to bring your ideas to life! If you&apos;re
                looking for a dedicated software developer to collaborate on
                your next project, let&apos;s connect and create something
                amazing together.
              </p>

              <button
                type="button"
                className="btn hire-me"
                onTouchStart={() => {
                  mouseDown.current = !mouseDown.current;
                }}
                onMouseDown={() => {
                  mouseDown.current = true;
                }}
                onMouseUp={() => {
                  mouseDown.current = false;
                }}
              >
                Warp
              </button>
            </div>
            <div className="home-img padd-15">
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Home.propTypes = {
  menu: PropTypes.bool.isRequired,
};

export default Home;
