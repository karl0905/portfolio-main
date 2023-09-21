import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHub from "@mui/icons-material/GitHub";
import "./Some.css";

export default function Some() {
  return (
    <div className="some__container">
      <a
        href="https://www.linkedin.com/in/karl-gustav-løvendahl-35ab2324a/"
        className="some__container-flex inter"
        target="_blank"
      >
        <LinkedInIcon className="some" /> <p>/&nbsp;&nbsp;Karl Løvendahl</p>
      </a>
      <a
        href="https://github.com/karl0905"
        className="some__container-flex inter"
        target="_blank"
      >
        <GitHub className="some" /> <p>/&nbsp;&nbsp;karl0905</p>
      </a>
      <a
        href="mailto: kalle44@live.dk"
        className="some__container-flex inter"
        target="_blank"
      >
        <EmailIcon className="some" /> <p>/&nbsp;&nbsp;kalle44@live.dk</p>
      </a>
    </div>
  );
}
