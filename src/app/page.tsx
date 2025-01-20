"use client";
import { useEffect, useState } from "react";
import snoopy from "./../../public/snoopy.png";
import heart from "./../../public/heart2.png";
import cake from "./../../public/cake.png";
import Image from "next/image";
import fondo10 from "./../../public/fondo10.png";
import fondo20 from "./../../public/fondo20.png";
import fondo30 from "./../../public/fondo30.png";
import fondo40 from "./../../public/fondo40.png";
import fondo50 from "./../../public/fondo50.png";
import fondo60 from "./../../public/fondo60.png";
import fondo70 from "./../../public/fondo70.png";
import fondo80 from "./../../public/fondo80.png";
import fondo90 from "./../../public/fondo90.png";
import fondo100 from "./../../public/fondo100.png";

const Page = () => {
  const [isClient, setIsClient] = useState(false);
  const [showText, setShowText] = useState(0);
  const [cursorVisible, setCursorVisible] = useState([true, true, true, true]);
  const images = [fondo10, fondo20, fondo30, fondo40, fondo50, fondo60, fondo70,
    fondo80, fondo90, fondo100
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };




  const [timeElapsed, setTimeElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const startDate = new Date("2024-10-23T21:28:00");

  useEffect(() => {
    setIsClient(true);
    setTimeout(() => setShowText(1), 3000);
    setTimeout(() => setShowText(2), 6000);
    setTimeout(() => setShowText(3), 8900);
    setTimeout(() => setShowText(4), 11200);

    setTimeout(() => setCursorVisible([false, true, true, true]), 6000);
    setTimeout(() => setCursorVisible([false, false, true, true]), 8900);
    setTimeout(() => setCursorVisible([false, false, false, true]), 11800);
    setTimeout(() => setCursorVisible([false, false, false, false]), 14000);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      const seconds = Math.floor(diff / 1000) % 60;
      const minutes = Math.floor(diff / 60000) % 60;
      const hours = Math.floor(diff / 3600000) % 24;
      const days = Math.floor(diff / 86400000);

      setTimeElapsed({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-start justify-center h-full px-4 md:px-20">
        {showText >= 0 && (
          <h1 className={`typing-animation text-xl font-bold mt-10 ${!cursorVisible[0] ? "no-cursor" : ""}`}>
            Hey Bonita ...
          </h1>
        )}
      </div>

      <div className="flex justify-center items-center h-full px-4">
        {showText >= 1 && (
          <h1 className="fade-in text-4xl sm:text-5xl md:text-6xl text-white font-black text-center mt-10 md:mt-20">
            FELIZ CUMPLEAÑOS!!!
          </h1>
        )}
      </div>

      <div className="flex justify-center items-center mt-10 font-bold text-center">
        {showText >= 2 && (
          <p className={`typing-animation text-center max-w-full break-words ${!cursorVisible[1] ? "no-cursor" : ""}`}>
            Hice esta página porque te quiero mucho
          </p>
        )}
      </div>
      <div className="flex justify-center items-center font-bold text-center">
        {showText >= 3 && (
          <p className={`typing-animation text-center max-w-full break-words ${!cursorVisible[2] ? "no-cursor" : ""}`}>
            y quise darte un regalo un tanto
          </p>
        )}
      </div>
      <div className="flex justify-center items-center font-bold text-center">
        {showText >= 4 && (
          <p className={`typing-animation text-center max-w-full break-words ${!cursorVisible[3] ? "no-cursor" : ""}`}>
            diferente...
          </p>
        )}
      </div>
      <div className="mt-10 flex justify-center items-center">
        <Image
          src={snoopy}
          alt="snoopy"
          width={250}
          height={250}
        />
      </div>
      {showText >= 2 && (
        <div>
          <div className="flex justify-center items-center mt-20 font-black text-center">
            <h1 className={`text-xl font-bold mt-20`}>
              Han pasado exactamente:
            </h1>
          </div>
          <div className="text-white flex justify-center items-center mt-10 text-4xl">
            <div className="flex space-x-2">
              <div className="text-white font-black flex flex-col items-center space-y-5">
                <div className="min-w-[80px]">{timeElapsed.days}</div>
                <div className="min-w-[80px]">{timeElapsed.hours}</div>
                <div className="min-w-[80px]">{timeElapsed.minutes}</div>
                <div className="min-w-[80px]">{timeElapsed.seconds}</div>
              </div>
              <div className="text-white font-black flex flex-col space-y-5">
                <div className="min-w-[100px]">Días</div>
                <div className="min-w-[100px]">Horas</div>
                <div className="min-w-[100px]">Minutos</div>
                <div className="min-w-[100px]">Segundos</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center font-black text-center">
            <p className={`mb-2 mt-3 text-center max-w-full break-words font-bold text-lg ml-5 mr-5`}>
              Desde el momento en el que te conocí ✨
            </p>
          </div>
          <div className="mt-1 flex justify-center items-center">
            <Image
              src={heart}
              alt="corazon"
              width={250}
              height={250}
            />
          </div>
          <div className="flex justify-center items-center font-black text-center">
            <p className={`mt-3 text-center max-w-full break-words font-bold text-lg ml-5 mr-5`}>
              Desde que me cambiaste la vida para bien y desde que conocí a una persona
              por la que yo estoy dispuesto a darlo todo ❤️
            </p>
          </div>
          <div className="mt-1 flex justify-center items-center">
            <Image
              src={cake}
              alt="torta"
              width={200}
              height={200}
            />
          </div>
          <div className="flex justify-center items-center font-black text-center">
            <p className={`mt-3 text-center max-w-full break-words font-bold  ml-5 mr-5`}>
              Espero que en este día tan especial la pases muy bonito y se te cumplan todos tus deseos
              porque tu te mereces todo lo bonito del mundo y más 🩷
            </p>
          </div>
          <div className="relative w-full max-w-lg mx-auto mt-10 mb-20 flex justify-center">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="transition-all duration-700 ease-in-out"
                width={300}
              />
            </div>

            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 p-2 rounded-full shadow-md hover:bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 p-2 rounded-full shadow-md hover:bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-1 h-1 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-300'
                    }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
          <div className="text-white font-black">
            <div className="min-w-[100px] text-2xl mb-5 ml-4">Quiero que sepas que...</div>
            <div className="flex flex-col font-black text-center">
              <p className="text-black max-w-full break-words font-bold ml-5 mr-5 mb-7 w-1/2 self-start">
                Si necesitas hablar... Yo estoy para ti
              </p>
              <p className="text-black max-w-full break-words font-bold ml-5 mr-5 mb-7  w-1/2 self-end">
                Si necesitas llorar... Yo estoy para ti
              </p>
              <p className="text-black max-w-full break-words font-bold ml-5 mr-5 mb-7  w-1/2 self-start">
                Si no puedes dormir... Yo estoy para ti
              </p>
              <p className="text-black max-w-full break-words font-bold ml-5 mr-5 mb-7  w-1/2 self-end">
                Si nadie está ahí para ti, yo estaré siempre para ti ❤️
              </p>
              <p className="text-black max-w-full break-words font-bold ml-5 mr-5 mb-7  w-1/2 self-start">
                Quiero que seas feliz porque tu te lo mereces
              </p>
              <p className="text-black max-w-full break-words font-bold ml-5 mr-5 mb-7  w-1/2 self-end">
                Quiero que seas feliz porque me hace feliz verte, como siempre debiste ser
              </p>
              <p className="text-black max-w-full break-words font-bold ml-5 mr-5 mb-7  w-1/2 self-start">
                Si pudiera, absorbería tu dolor y te lo devolvería como amor
              </p>
              <p className="text-black max-w-full break-words font-bold ml-5 mr-5 mb-7  w-1/2 self-end">
                Siempre tendrás un hogar en mi corazón ❤️
              </p>
            </div>
          </div>
        </div>
      )}
      <style jsx global>{`
        .typing-animation {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid #fff;
          width: 0;
          animation: typing 3s steps(30) 1s forwards, blink 0.75s step-end infinite;
        }

        .typing-animation.no-cursor {
          border-right: none;
        }

        @keyframes typing {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }

        .fade-in {
          opacity: 0;
          animation: fadeIn 3s forwards;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .typing-animation p {
          max-width: 90%;
          word-wrap: break-word;
          overflow-wrap: break-word;
          white-space: normal;
        }
      `}</style>
    </div>
  );
};

export default Page;
