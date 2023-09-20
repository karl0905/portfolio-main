import "./Cardprojects.css";
import Aos from "aos";
import "aos/dist/aos.css";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Cardprojects(props) {
  Aos.init();

  return (
    <div
      className="cardprojects"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-delay={props.delay}
    >
      <p className="cardprojects__para">{props.description}</p>
      <a href={props.link}>
        <img
          className="cardprojects__img"
          src={`${props.img}`}
          alt={props.alt}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/karl-gustav-løvendahl-35ab2324a/"
        className="some__container-flex"
      >
        <GitHubIcon className="some" /> / Github repo
      </a>
    </div>
  );
}
