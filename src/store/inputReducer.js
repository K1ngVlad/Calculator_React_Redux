const defaultState = {
  arrString: [],
  mode: 'whole',
  operations: [],
};

const inputReducer = (state = defaultState, action) => {
  let newArr = state.arrString;
  switch (action.type) {
    case 'ADD_SYMBOL':
      newArr.push(action.payload);
      return { ...state, arrString: newArr };
    case 'DELETE_SYMBOL':
      newArr.pop();
      return { ...state, arrString: newArr };
    case 'CALCULATE':
      function factorial(n) {
        return n !== 1 ? n * factorial(n - 1) : 1;
      }
      let searchMode = false;
      let changeMode = false;
      newArr = state.arrString.map((e, i, arr) => {
        let num;
        switch (e) {
          case '!':
            num = 'factorial';
            if (arr[i + 1] !== '(') {
              num += '(';
              searchMode = true;
            } else {
              changeMode = true;
            }
            break;

          case '÷':
            num = '/';
            break;

          case 'log':
            num = 'Math.log10';
            if (arr[i + 1] !== '(') {
              num += '(';
              searchMode = true;
            } else {
              changeMode = true;
            }
            break;

          case 'ln':
            num = 'Math.log';
            if (arr[i + 1] !== '(') {
              num += '(';
              searchMode = true;
            } else {
              changeMode = true;
            }
            break;

          case '×':
            num = '*';
            break;

          case '√':
            num = 'Math.sqrt';
            if (arr[i + 1] !== '(') {
              num += '(';
              searchMode = true;
            } else {
              changeMode = true;
            }
            break;
          case '^':
            num = '**';
            changeMode = true;
            break;
          default:
            num = e;
            break;
        }

        if (searchMode) {
          if (isNaN(parseInt(arr[i + 1])) && arr[i + 1] !== '.') {
            num += ')';
            searchMode = false;

            if (
              arr[i + 1] !== '-' &&
              arr[i + 1] !== '+' &&
              arr[i + 1] !== '×' &&
              arr[i + 1] !== '÷' &&
              arr[i + 1] !== '^' &&
              arr[i + 1] !== '%' &&
              arr[i + 1] !== undefined
            ) {
              num += '*';
            }
          }
        } else {
          if (
            !changeMode &&
            e !== '(' &&
            arr[i + 1] !== '-' &&
            arr[i + 1] !== '+' &&
            arr[i + 1] !== '×' &&
            arr[i + 1] !== '÷' &&
            arr[i + 1] !== '^' &&
            arr[i + 1] !== '%' &&
            arr[i + 1] !== ')' &&
            arr[i + 1] !== '.' &&
            isNaN(parseInt(arr[i + 1])) &&
            arr[i + 1] !== undefined
          ) {
            num += '*';
          } else if (e === ')' && !isNaN(parseInt(arr[i + 1]))) {
            num += '*';
          }
          changeMode = false;
        }

        return num;
      });
      console.log(newArr);
      console.log(newArr.join(''));
      console.log(eval(newArr.join('')));
      return {
        ...state,
        arrString: eval(newArr.join('')).toFixed(2).split(''),
        //arrString: eval(`try{${newArr.join('')}} catch{'ERROR!'}`)
        //.toFixed(2)
        //.split(''),
      };
    default:
      return state;
  }
};

export default inputReducer;
