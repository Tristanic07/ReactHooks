import { useState } from "react";
const Bar = () => {
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState(false);

  function buttonHandleClick(buttonValue: string) {
    switch (buttonValue) {
      case "AddBar":
        if (count < 6) setCount(count + 1);
        break;

      case "MinusBar":
        if (count > 0) setCount(count - 1);
        break;
    }
  }

  function renderBars(): React.ReactNode {
    let bars = [];

    for (let i: number = 0; i < count; i++) {
      bars.push(<div className="h-full w-1/6 bg-violet-700"></div>);
    }

    return bars;
  }
  console.log(count);
  return (
    <div className="flex flex-col gap-10 justify-center items-center h-full px-5 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700">useState</h1>
      <div className="h-56 w-600 border-2 border-gray-700 flex">
        {renderBars()}
      </div>
      <div className="flex gap-5">
        <button
          className="bg-blue-300 w-20 h-10 rounded-lg border-2 border-blue-700"
          onClick={() => {
            buttonHandleClick("AddBar");
          }}
        >
          AddBar
        </button>
        <button
          key="2"
          className="bg-blue-300 w-20 h-10 rounded-lg border-2 border-blue-700"
          onClick={() => {
            buttonHandleClick("MinusBar");
          }}
        >
          MinusBar
        </button>
      </div>
    </div>
  );
};

export default Bar;
