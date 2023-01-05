import "./Heading.css";

const Heading = (props) => {
  const classes = "heading " + props.className;
  return <h3 className={classes}>&#9672; {props.children} &#9672;</h3>;
};

export default Heading;
