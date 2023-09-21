import React from "react";
import "./Cardprojects.css";
import Aos from "aos";
import "aos/dist/aos.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";

export default function Cardprojects(props) {
  Aos.init();

  // Definer en style der enten viser eller skjuler knapperne
  const buttonStyle = {
    display: props.hideButtons ? "none" : "block",
  };

  return (
    <div
      className="cardprojects"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-delay={props.delay}
    >
      <p className="cardprojects__para">{props.description}</p>
      <div className="cardprojects__img-container">
        <a href={props.link}>
          <img
            className="cardprojects__img"
            src={`${props.img}`}
            alt={props.alt}
          />
        </a>
      </div>
      <div className="some__container">
        <a href={props.github_link} className="some__container-flex" target="_blank" style={buttonStyle}>
          <GitHubIcon className="some" /> / Github repo
        </a>
        <a href={props.link} className="some__container-flex" target="_blank" style={buttonStyle}>
          <WebIcon className="some" /> / Live demo
        </a>
      </div>
    </div>
  );
}
