import { useContext } from "react";
import { CountContext } from "./Parent";

const Child5 = () => {
  const count = useContext(CountContext);
  return <div className="box5 flex justify-center items-center">{count}</div>;
};

export default Child5;
