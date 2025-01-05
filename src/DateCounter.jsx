import { useState, useReducer } from "react";

const initialState = {count: 0, step: 1}

function reducer (state, action) {
    switch (action.type) {
        case "INC":
            return  {...state, count: state.count + state.step}
            break;

        case "DEC":
            return  {...state, count: state.count - state.step}
            break
        case "SET_COUNT":
            return  {...state, count: action.payload}
            break
        case "SET_STEP":
            return  {...state, step: Number(e.target.value)}
            break
        case "RESET":
            return  initialState;
            break
    
        default:
            break;
    }
}

function DateCounter() {

    const [count, dispatch] = useReducer(reducer, initialState);


  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch(
        {
            type: "DEC",
        }
    )
  };

  const inc = function () {
    dispatch(
        {
            type: "INC",
        }
    )
  };

  const defineCount = function (e) {
    dispatch({
        type: "SET_COUNT",
        payload: Number(e.target.value)
    })
  };

  const defineStep = function (e) {
    dispatch({
        action: "SET_STEP",
        payload: Number(e.target.value)
    })
    // setStep(Number(e.target.value));
  };

  const reset = function () {
    dispatch({
        type: "RESET"
    })
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={count.step}
          onChange={defineStep}
        />
        <span>{count.step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count.step} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;