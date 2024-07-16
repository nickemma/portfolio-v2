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
        "Software Engineer Nerd",
        "CS/AL Student",
        "Passionate Coder",
        "Minimalist Developer",
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
              aria-label="GitHub profile"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/techieemma/"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <AiOutlineLinkedin />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://medium.com/@nicholasemmanuel321"
              rel="noreferrer"
              aria-label="Medium profile"
            >
              <FaMedium />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://twitter.com/techieEmma"
              rel="noreferrer"
              aria-label="Twitter profile"
            >
              <AiOutlineTwitter />
            </a>
          </li>
        </ul>
        <div className="container">
          <div className="row">
            <div className="home-info padd-15">
              <h3 className="hello">
                Hi there, I&apos;m{" "}
                <span className="name">Nicholas Emmanuel.</span>
              </h3>
              <h3 className="my-profession">
                A <span className="typing" ref={el} />
              </h3>
              <p>
                I&apos;m a student at University of the people currently
                studying computer science and Artificial Intelligence.
              </p>
              <p>
                As I&apos;ve grown as a developer, I&apos;ve worked alongside
                senior designers and developers who have raised my standards for
                what&apos;s expected of any web application.
              </p>
              <p>
                Through these experiences, i&apos;ve had the opportunity to
                create memorable products that are not only enjoyable to use,
                but are written in code that&apos;s maintainable, scalable and
                easy to understand.
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
              <img src={logo} alt="Techie Emma" loading="lazy" />
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
