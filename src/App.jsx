import { useState } from "react";
import "./index.css";
import BeginScherm from "./Tabs/BeginScherm";
import ReactTypingEffect from "react-typing-effect";
import { hot, koala, lale, lipgloss, schildpad } from "./assets";
import { Button } from "@material-tailwind/react";

function App() {
  const [showFinalResults, setShowFinalResults] = useState(false);
  const [showGameStart, setShowGameStart] = useState(true);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  //Helpers
  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowFinalResults(false);
  };

  const optionClicked = (isCorrect, e) => {
    e.target.style.backgroundColor = isCorrect ? "green" : "red";
    setTimeout(() => {
      e.target.style.backgroundColor = "";
      if (isCorrect) {
        setScore(score + 1);
      }
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowFinalResults(true);
      }
    }, 2000);
  };

  const questions = [
    {
      text: "WAAR was onze eerste date?",
      options: [
        { id: 0, text: "Amsterdam Light Festival", isCorrect: false },
        { id: 1, text: "Dierentuin Artis", isCorrect: false },
        { id: 2, text: "Wallen raam 1", isCorrect: false },
        { id: 3, text: "Skybar Loft Amsterdam", isCorrect: true },
      ],
    },
    {
      text: "WELK dier hoort er op het plaatje?",
      options: [
        { id: 0, text: "🐋", isCorrect: true },
        { id: 1, text: "🐔", isCorrect: false },
        { id: 2, text: "🐭", isCorrect: false },
        { id: 3, text: "🐧", isCorrect: false },
      ],
    },
    {
      text: "Wat is Robins lievelingseten?",
      options: [
        { id: 0, text: "Ramen", isCorrect: true },
        { id: 1, text: "Hij heeft geen lievelingseten", isCorrect: false },
        { id: 2, text: "Lale", isCorrect: false },
        { id: 3, text: "Flied lice", isCorrect: false },
      ],
    },
    {
      text: "Hoe nat is de T van Lale?",
      options: [
        { id: 0, text: "💧", isCorrect: false },
        { id: 1, text: "💧🌊💦", isCorrect: true },
        { id: 2, text: "🌊", isCorrect: false },
        { id: 3, text: "💦", isCorrect: false },
      ],
    },
    {
      text: "Wanneer is Robin jarig?",
      options: [
        { id: 0, text: "19 augustus", isCorrect: false },
        { id: 1, text: "20 augustus", isCorrect: true },
        { id: 2, text: "21 augustus", isCorrect: false },
        { id: 3, text: "22 augustus", isCorrect: false },
      ],
    },
    {
      text: "Wat is Robins lievelingswijk in Amsterdam?",
      options: [
        { id: 0, text: "de Pijp", isCorrect: false },
        {
          id: 1,
          text: "Robin heeft geen lievelingswijk hoor je me?!",
          isCorrect: true,
        },
        { id: 2, text: "Cuba", isCorrect: false },
        { id: 3, text: "Alles met grachten", isCorrect: false },
      ],
    },
    {
      text: "Hoe lang duurt het voordat Lale afhaakt bij haar zelf uitgekozen Netflix series",
      options: [
        { id: 0, text: "Half uur", isCorrect: false },
        { id: 1, text: "Uur", isCorrect: false },
        {
          id: 2,
          text: "30 seconden, maar ze zegt het pas na 10 minuten",
          isCorrect: true,
        },
        { id: 3, text: "Kwartier", isCorrect: false },
      ],
    },
    {
      text: "Op welke dag komt Robin naar Bali?",
      options: [
        { id: 0, text: "7 april", isCorrect: false },
        { id: 1, text: "8 april", isCorrect: true },
        { id: 2, text: "9 april", isCorrect: false },
        { id: 3, text: "10 april", isCorrect: false },
      ],
    },
    {
      text: "Wie wil er gelijk aan de truffels als je 1 keer naar een smartshop wijst? 🍄🍄🍄 (meerdere antwoorden goed)",
      options: [
        { id: 0, text: "Lale", isCorrect: true },
        { id: 1, text: "Lalita", isCorrect: true },
        { id: 2, text: "Layla", isCorrect: true },
        { id: 3, text: "Robin", isCorrect: false },
      ],
    },
    {
      text: "Waar leven ijsberen NIET? 🐻‍❄️",
      options: [
        { id: 0, text: "Alaska", isCorrect: false },
        { id: 1, text: "Rusland", isCorrect: false },
        { id: 2, text: "Canada", isCorrect: false },
        { id: 4, text: "Noordpool", isCorrect: false },
        { id: 6, text: "Zuidpool", isCorrect: true },
        { id: 5, text: "Groenland", isCorrect: false },
      ],
    },
    {
      text: "Pinguins kunnen goed zwemmen",
      options: [
        { id: 0, text: "Ja sgoed", isCorrect: true },
        { id: 1, text: "Nuut", isCorrect: false },
      ],
    },
    {
      text: "Pinguins hebben unieke vocale geluiden, die ze gebruiken om met elkaar te communiceren. Sommige hebben snuif geluiden, andere brallende en andere fluitende geluiden. ",
      options: [
        {
          id: 0,
          text: "Ik weet niet wat je allemaal uit je nek loopt te lullen, maar dit is goed",
          isCorrect: true,
        },
        { id: 1, text: "Nee, hou je bek", isCorrect: false },
      ],
    },
    {
      text: "Oke we dwaalden even af. Welke uitspraak past hier goed bij (BONUSVRAAG)",
      options: [
        {
          id: 0,
          text: "Dwale met Lale",
          isCorrect: true,
        },
      ],
    },
    {
      text: "Welk dier zie je hier?",
      options: [
        {
          id: 0,
          text: "🦒",
          isCorrect: false,
        },
        {
          id: 0,
          text: "🐢",
          isCorrect: true,
        },
        {
          id: 0,
          text: "🐼",
          isCorrect: false,
        },
      ],
    },
    {
      text: "WIE smeert per dag liters lipgloss op haar lippen, die ook nog eens vies afgeven op alles wat ze aanraakt, maar ontkent dit laatste tot op de dood?",
      options: [
        {
          id: 0,
          text: "Ik weet dat ik, Lale, dit zelf ben en Robin heeft altijd al gelijk gehad",
          isCorrect: true,
        },
        {
          id: 0,
          text: "Meisje die ik ken, maar ik in ieder geval niet",
          isCorrect: false,
        },
        {
          id: 0,
          text: "Robin",
          isCorrect: false,
        },
      ],
    },
    {
      text: "Welke Koala beschuldigt andere mensen onterecht van Koala activiteiten, maar is het gewoon altijd zelf?",
      options: [
        {
          id: 0,
          text: "Lale",
          isCorrect: true,
        },
      ],
    },
    {
      text: "Hoe veel sterren geeft Robin deze hete meid?",
      options: [
        {
          id: 0,
          text: "⭐",
          isCorrect: false,
        },
        {
          id: 0,
          text: "⭐⭐⭐",
          isCorrect: false,
        },
        {
          id: 0,
          text: "⭐⭐⭐⭐⭐",
          isCorrect: true,
        },
      ],
    },
  ];

  return (
    <div className="p-6 bg-blue-100 h-screen">
      <div className="mb-6 w-full flex flex-col justify-center pt-6 font-Russo text-2xl text-center">
        💰💲💳 <br />
        Lale weekend miljonairs <br />
        💸🏆💎 <br />
        <ReactTypingEffect
          text={"Valentine Edition"}
          cursorRenderer={(cursor) => <h1>{cursor}</h1>}
          displayTextRenderer={(text, i) => {
            return (
              <h1>
                {text.split("").map((char, i) => {
                  const key = `${i}`;
                  return (
                    <span key={key} style={i % 2 === 0 ? { color: "red" } : {}}>
                      {char}
                    </span>
                  );
                })}
              </h1>
            );
          }}
        />
      </div>
      {showGameStart ? (
        <BeginScherm setShowGameStart={setShowGameStart} />
      ) : (
        <div>
          {currentQuestion == 1 && (
            <div className="w-full flex justify-center mb-2">
              <img className="rounded-xl" src={lale} alt="" />
            </div>
          )}
          {currentQuestion == 9 && (
            <div className="w-full flex justify-center mb-2">
              <iframe
                src="https://giphy.com/embed/8Ay1jiHj4iYBa"
                width="480"
                height="270"
                class="giphy-embed"
                allowFullScreen
              ></iframe>
            </div>
          )}

          {currentQuestion == 7 && (
            <div className="w-full flex justify-center mb-2">
              <iframe
                src="https://giphy.com/embed/Btn42lfKKrOzS"
                width="360"
                height="240"
                class="giphy-embed"
              ></iframe>
              <p></p>
            </div>
          )}
          {currentQuestion == 13 && (
            <div className="w-full flex justify-center mb-2 h-[400px]">
              <img src={schildpad} alt="" srcset="" />
            </div>
          )}
          {currentQuestion == 14 && (
            <div className="w-full flex justify-center mb-2 h-[400px]">
              <img src={lipgloss} alt="" srcset="" />
            </div>
          )}
          {currentQuestion == 15 && (
            <div className="w-full flex justify-center mb-2 h-[400px]">
              <img src={koala} alt="" srcset="" />
            </div>
          )}
          {currentQuestion == 16 && !showFinalResults && (
            <div className="w-full flex justify-center mb-2 h-[400px]">
              <img src={hot} alt="" srcset="" />
            </div>
          )}

          {!showFinalResults ? (
            <div className="card w-full flex justify-center flex-col items-center font-sans bg-white rounded-xl p-6 shadow-xl">
              <div className="w-full text-center">
                <h2 className="font-bold mb-2">
                  Vraag {currentQuestion + 1} uit {questions.length}
                </h2>
                <h3 className="mb-6 font-bold text-pink-400">
                  {questions[currentQuestion].text}
                </h3>
                <ul className="flex flex-col gap-6 w-full justify-center items-center">
                  {questions[currentQuestion].options.map((option) => {
                    return (
                      <li
                        onClick={(e) => optionClicked(option.isCorrect, e)}
                        key={option.id}
                        className="bg-gray-300 p-2 rounded-xl max-w-[400px] min-w-[300px]"
                      >
                        {option.text}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ) : (
            <div className="result w-full flex justify-center flex-col items-center font-sans bg-gray-100 rounded-xl p-6 shadow-xl">
              <div className="w-full text-center">
                <h2 className="font-bold mb-2">RESULTAAT</h2>
                <p className="font-bold text-red-500 bg-gray-300 p-12 rounded-xl mb-4">
                  {`${score} van de ${questions.length} goed! (score = ${(
                    (score / questions.length) *
                    100
                  ).toFixed(2)}%)`}
                </p>
                <h3 className="mb-2 font-bold text-pink-400">
                  SCREENSHOT OM PRIJS TE INNEN
                </h3>
                <div className="w-full flex justify-center">
                  <Button
                    onClick={() => restartGame()}
                    color="red"
                    className="text-3xl"
                  >
                    HERSTART SPEL
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
