import { Reducer, useReducer } from "react";

interface Iaction {
  type: string;
  payload: number;
}

const UseReducer = () => {
  const [amount, dispatch] = useReducer<Reducer<number, Iaction>>(reducer, 500);

  function reducer(state: number, action: Iaction) {
    switch (action.type) {
      case "DEPOSIT":
        return state + action.payload;

      case "WITHDRAW":
        return state - action.payload;

      default:
        return state;
    }
  }

  function deposit(amount: number) {
    dispatch({
      type: "DEPOSIT",
      payload: amount,
    });
  }

  function withdraw(amount: number) {
    dispatch({
      type: "WITHDRAW",
      payload: amount,
    });
  }

  return (
    <div className="flexcenter h-screen flex-col gap-3 bg-gray-200">
      <h1 className="text-3xl text-blue-900">{amount}</h1>
      <div className="flex gap-2">
        <button
          className="bg-blue-300 w-20 h-10 rounded-lg shadow-sm"
          onClick={() => deposit(500)}
        >
          Deposit
        </button>
        <button
          className="bg-blue-300 w-20 h-10 rounded-lg shadow-sm"
          onClick={() => withdraw(500)}
        >
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
