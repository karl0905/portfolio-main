import './Section.css';

export default function Section(props) {
  return (
    <div id={props.number}>
      {props.children}          {/* Props.children for at kunne bruge komponenter inde i komponenter (kan ses i app.jsx)*/}
    </div>
  );
}
