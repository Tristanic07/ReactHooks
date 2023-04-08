import { useState, createContext } from "react";
import Child1 from "./Child1";

export const CountContext = createContext(0);

const Parent = () => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={count}>
      <div className="flex flex-col justify-center items-center h-screen gap-2 bg-gray-100 ">
        <h1 className="text-4xl font-bold text-blue-700">useContext</h1>
        <Child1 />
        <h1 className="text-xl text-blue-950">{count}</h1>
        <button
          className="bg-blue-300 w-20 h-10 rounded-lg shadow-sm"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Count
        </button>
      </div>
    </CountContext.Provider>
  );
};

export default Parent;
