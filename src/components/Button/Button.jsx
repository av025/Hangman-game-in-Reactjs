import getButtonStyle from "./getButtonStyle";

function Button({
  buttonText = "Primary",
  styleType = "primary",
  buttonType = "button",
  onClickHandler
}) {
  return (
    <button
      className={`p-2 m-2 text-white rounded ${getButtonStyle(styleType)}`}
      type={buttonType}
      onClick={onClickHandler}
    >
      {buttonText}
    </button>
  );
}

export default Button;
