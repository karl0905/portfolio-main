import './Section.css';

export default function Section(props) {
  return (
    <div id={props.number}>
      {props.children}
    </div>
  );
}
