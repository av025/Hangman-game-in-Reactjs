import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({
  onSubmitHandler,
  handleHintInputChange,
  handleTextInputChange,
  handleShowHideClick,
  inputType,
  inputValue,
  inputHint
}) {
  return (
    <form onSubmit={onSubmitHandler}>
      <h1 className="text-4xl m-4 text-orange-600">Hangman Game</h1>
      <div>
        <TextInput
          label="Enter Hint for our Word and Phrase"
          onChangehandler={handleHintInputChange}
          value={inputHint}
        />
      </div>
      <div>
        <TextInput
          inputType={inputType}
          label={"Enter Word and Phrase"}
          placeholder="Enter your word and Phrase here..."
          onChangehandler={handleTextInputChange}
          value={inputValue}
        />
      </div>
      <div>
        <Button
          buttonText={inputType === "password" ? "Show" : "Hide"}
          styleType="warning"
          onClickHandler={handleShowHideClick}
        />
        <Button buttonText="Submit" buttonType="submit" />
      </div>
    </form>
  );
}

export default TextInputForm;
