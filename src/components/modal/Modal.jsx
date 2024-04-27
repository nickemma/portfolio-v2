import { AiOutlineClose, AiOutlineGithub } from 'react-icons/ai';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { useSpring, animated } from '@react-spring/web';
import PropTypes from 'prop-types';
import './modal.scss';

const Modal = ({ showModal, setShowModal, currentProject }) => {
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? 'translateY(0%)' : 'translateY(30%)',
    display: 'flex',
    justifyContent: 'center',
  });

  return showModal ? (
    <div className="modal-background">
      <animated.div style={animation}>
        <div className="modal-wrapper">
          <button
            type="button"
            onClick={() => {
              setShowModal(false);
            }}
            className="modal-close"
          >
            <AiOutlineClose />
          </button>
          <div className="inner-wrapper">
            <div className="modal-image">
              <img src={currentProject.image} alt="project screenshot" />
            </div>
            <div className="modal-content">
              <h3>{currentProject.name}</h3>
              <ul>
                {currentProject.techs.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <p>{currentProject.description}</p>

              <div className="modal-links">
                <a
                  target="_blank"
                  className="btn"
                  href={currentProject.linkToLiveVersion}
                  rel="noreferrer"
                >
                  See Live
                  {' '}
                  <HiOutlineExternalLink className="live-link" />
                </a>
                {currentProject.linkToSource ? (
                  <a
                    target="_blank"
                    className="btn"
                    href={currentProject.linkToSource}
                    rel="noreferrer"
                  >
                    See Source
                    {' '}
                    <AiOutlineGithub className="live-link" />
                  </a>
                ) : (
                  <a
                    target="_blank"
                    className="btn"
                    href={currentProject.linkToBackend}
                    rel="noreferrer"
                  >
                    See backend hosted  Api
                    {' '}
                    <AiOutlineGithub className="live-link" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  ) : null;
};

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  currentProject: PropTypes.shape({
    name: PropTypes.string,
    techs: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    image: PropTypes.string,
    linkToLiveVersion: PropTypes.string,
    linkToSource: PropTypes.string,
    linkToBackend: PropTypes.string,
  }).isRequired,
};

export default Modal;
