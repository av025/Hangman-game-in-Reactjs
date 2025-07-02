import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputContainer() {
  const [inputType, setInputType] = useState("password");
  const [inputValue, setInputValue] = useState("");
  const [inputHint, setInputHint] = useState("");
  const navigate = useNavigate();

  function onSubmitHandler(event) {
    event.preventDefault();
    if (inputValue && inputHint) {
      setTimeout(function () {
        navigate("/play", {
          state: { wordHint: inputHint, wordSelected: inputValue },
        });
      }, 3000);
    }
  }

  function handleShowHideClick() {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  }

  function handleTextInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleHintInputChange(event) {
    setInputHint(event.target.value);
  }

  return (
    <TextInputForm
      inputValue={inputValue}
      inputType={inputType}
      inputHint={inputHint}
      onSubmitHandler={onSubmitHandler}
      handleShowHideClick={handleShowHideClick}
      handleTextInputChange={handleTextInputChange}
      handleHintInputChange={handleHintInputChange}
    />
  );
}

export default TextInputContainer;
