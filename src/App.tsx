import Bar from "./context/Bar";
import Parent from "./useContext/Parent";
import UseEffectPractice from "./useEffect/UseEffectPractice";
import UseReducer from "./useReducer/UseReducer";

function App() {
  return (
    <div className="">
      <UseEffectPractice />
      <Bar />
      <Parent />
      <UseReducer />
    </div>
  );
}

export default App;
