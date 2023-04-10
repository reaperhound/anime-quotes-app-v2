import { useEffect, useState } from "react";
import "../App.css";

const Hero = () => {
  const [quote, setQuote] = useState(null);

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
                "{quote.quote}"
              </p>
              <div className="flex justify-between mt-1">
                <span className="anime-font">
                  {quote.anime}
                </span>
                <span className="anime-font">
                  {quote.character}
                </span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="sm:min-w-[50vw] sm:min-h-[20vh] min-w-[50vw] min-h-[20vh] sm:mx-[50vw] relative mx-[20vw] ">
          {/* //Progress Bar */}
          <img src="./loading-bar.svg" alt="Loading..." />
        </div>
      )}
      <button 
      onClick={handleButtonClick}
      className="mt-5 ml-[220px] btn btn-outline btn-primary">
        New Quote
      </button>
    </div>
  );
};

export default Hero;