import levelOne from "../../assets/images/1.svg";
import levelTwo from "../../assets/images/2.svg";
import levelThree from "../../assets/images/3.svg";
import levelFour from "../../assets/images/4.svg";
import levelFive from "../../assets/images/5.svg";
import levelSix from "../../assets/images/6.svg";
import levelSeven from "../../assets/images/7.svg";
import levelEight from "../../assets/images/8.svg";

function Hangman({ steps }) {
  const img = [
    levelOne,
    levelTwo,
    levelThree,
    levelFour,
    levelFive,
    levelSix,
    levelSeven,
    levelEight,
  ];

  return (
    <div className="w-[300px] h-[300px]">
      <img
        src={steps >= img.length ? img[img - 1] : img[steps]}
        alt="hangman steps"
      />
    </div>
  );
}

export default Hangman;
