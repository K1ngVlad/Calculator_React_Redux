import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './Body.css';
import Button from './Button/Button.jsx';
import data from './data.js';

const Body = () => {
  const dispatch = useDispatch();
  const string = useSelector((state) => state.input.arrString);

  const buttons = data.map((e) => {
    let func;
    switch (e.name) {
      case 'Delete':
        func = () => {
          dispatch({ type: 'DELETE_SYMBOL', payload: '' });
        };
        break;

      case 'Equal':
        func = () => {
          dispatch({ type: 'CALCULATE', payload: string });
        };
        break;

      default:
        func = () => {
          dispatch({ type: 'ADD_SYMBOL', payload: e.mark });
        };
        break;
    }
    return (
      <Button name={e.name} mark={e.mark} key={e.key} onClick={() => func()} />
    );
  });
  return (
    <div className="Body">
      <div className="BodyBox">{buttons}</div>
    </div>
  );
};

export default Body;
