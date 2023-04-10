import { useEffect, useState } from "react";
import axios from "axios";

const UseEffectPractice = () => {
  const [showStatement, setShowStatement] = useState(false);
  const [boxPick, setBoxPick] = useState(0);
  const [image, setImage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setShowStatement(true);
    }, 2000);
  }, []);

  const fetchImage = async (boxId: number) => {
    let response;
    switch (boxId) {
      case 1:
        response = await axios.get(
          "https://randomfox.ca/floof/?ref=apilist.fun"
        );
        setImage(response.data.image);
        console.log(response);
        break;
      case 2:
        response = await axios.get(
          "https://aws.random.cat/meow?ref=apilist.fun"
        );
        setImage(response.data.file);
        console.log(response);
        break;
      case 3:
        response = await axios.get("https://dog.ceo/api/breeds/image/random");
        setImage(response.data.message);
        break;
    }
  };

  useEffect(() => {
    if (boxPick === 0) {
      setImage("");
    } else {
      fetchImage(boxPick);
    }
  }, [boxPick]);

  return (
    <div className="flexcenter flex-col h-screen mt-10 font-bold">
      {showStatement === true && (
        <>
          <h1 className="scary-text text-center text-5xl">Pick a Box</h1>
          <div className="flexcenter gap-10 h-1/2">
            {["A", "B", "C"].map((value, index) => (
              <div
                className="h-32 w-32 bg-slate-500 flexcenter"
                id={`${index + 1}`}
                onClick={(e) =>
                  setBoxPick(parseInt((e.target as HTMLElement).id))
                }
              >
                <h1 className="text-xl scary-text font-semibold">{value}</h1>
              </div>
            ))}
          </div>
        </>
      )}
      {image && <img src={image} className="h-32 w-48" />}
    </div>
  );
};

export default UseEffectPractice;
