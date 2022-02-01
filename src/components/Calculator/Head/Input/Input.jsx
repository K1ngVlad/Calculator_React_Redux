import { useSelector } from 'react-redux';
import './Input.css';

const Input = () => {
  const string = useSelector((state) => {
    return state.input.arrString.join('');
  });

  return (
    <div className="DivInput">
      <span className="Input">{string}</span>
    </div>
  );
};

export default Input;
