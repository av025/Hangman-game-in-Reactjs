function TextInput({
  label,
  inputType,
  value,
  onChangehandler,
  placeholder = "Enter your input here",
}) {
  return (
    <label>
      <span className="text-gray-700 text-lg p-2 m-4"> {label} </span>

      <input
        className="px-4 py-2 border border-gray-300 rounded-md w-full"
        type={inputType}
        value={value}
        placeholder={placeholder}
        onChange={onChangehandler}
      />
    </label>
  );
}

export default TextInput;
