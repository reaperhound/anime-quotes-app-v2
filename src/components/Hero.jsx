import { useEffect, useState } from "react";
import "../App.css";

const Hero = () => {
  const [quote, setQuote] = useState("ibijk");

  useEffect(() => {
    fetch("https://animechan.vercel.app/api/random")
      .then((response) => response.json())
      .then((data) => setQuote(data))
      .catch((error) => console.log(error));
  }, []);

  const handleButtonClick = () => {
    setQuote(null)
    fetch("https://animechan.vercel.app/api/random")
      .then((response) => response.json())
      .then((data) => setQuote(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="pt-[30vh]">
      {quote ? (
        <>
          <div className="flex items-center justify-start sm:min-w-[50vw] sm:min-h-[20vh] p-5 ">
            <div className="z-10 sm:mx-[200px] ">
              <p className="font-semibold text-lg ">
                {quote.quote}{console.log(quote)}
                {/* Quote Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem repellendus expedita autem omnis esse delectus enim ea
                hic! */}
              </p>
              <div className="flex justify-between mt-1">
                <span className="anime-font">
                  {quote.anime}
                  {/* animeName */}
                </span>
                <span className="anime-font">
                  {quote.character}
                  {/* animeCharacter */}
                </span>
              </div>
            </div>

            <div className="sm:ml-[900px] mb-[500px] absolute z-0">
              <img
                className="w-[250px] h-[250px] "
                src="/blobanimation.svg"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </>
      ) : (
        <div className="sm:min-w-[50vw] sm:min-h-[20vh] min-w-[50vw] min-h-[20vh] sm:mx-[50vw] relative mx-[20vw] ">
          {/* //Progress Bar */}
          <img src="./loading-bar.svg" alt="" srcset="" />
        </div>
      )}
      {/* <button onClick={handleButtonClick}>New Quote</button> */}
      <button 
      onClick={handleButtonClick}
      className="sm:ml-[220px] sm:mt-5 ml-5 mt-5 btn btn-outline btn-primary">
        New Quote
      </button>
    </div>
  );
};

export default Hero;
