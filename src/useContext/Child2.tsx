import { CountContext } from "./Parent";
import Child3 from "./Child3";
import { useContext } from "react";
const Child2 = () => {
  const count = useContext(CountContext);
  return (
    <div className="box2 text-center">
      <Child3 />
      <h1 className="text-xl text-white">{count}</h1>
    </div>
  );
};

export default Child2;
