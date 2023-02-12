import React from "react";
import { Button } from "@material-tailwind/react";

const BeginScherm = ({ setShowGameStart }) => {
  return (
    <div>
      <div className="w-full flex justify-center font-sans">
        <div className="flex flex-col items-center h-fit bg-white shadow-xl mx-6 p-6   rounded-xl max-w-[400px]">
          <div className="">
            Klagen kan ze wel als ik weer eens iets niet meer weet. Maar hoe
            veel weet ze zelf ?? <br />
            <br />
            <strong className="font-bold">NOU?</strong> <br />
            <br />
            PRIJZEN:
            <br />
            <div className="text-left">
              <p className="pb-2 pt-2">
                <strong className="inline-block">🏆1.</strong> Uiteten op een
                tropisch eiland dat begint met de B en eindigt op -i naar keuze
                (100% score)
              </p>
              <p className="pb-2 pt-2">
                <strong className="inline-block">🏆2.</strong> Volledige
                bilmassage (90% score)
              </p>
              <p className="pb-2 pt-2 mb-4">
                <strong className="inline-block">🏆3.</strong> Padvinder tocht
                inclusief natte zakdoek en sinaasappel naar Bali Noord (80%
                score)
              </p>

              <div className="w-full flex justify-center">
                <Button
                  onClick={() => setShowGameStart(false)}
                  color="red"
                  className="text-3xl"
                >
                  MELDEN
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeginScherm;
