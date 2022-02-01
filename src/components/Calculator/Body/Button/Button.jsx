import './Button.css';

const Button = (props) => {
  return (
    <button onClick={() => props.onClick()} className="Button">
      {props.mark}
    </button>
  );
};

export default Button;
