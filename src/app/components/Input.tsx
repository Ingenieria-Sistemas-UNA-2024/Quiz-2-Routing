const Input = ({ id, type, value, onChange}) => (
  <input
    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    id={id}
    type={type}
    value={value}
    onChange={onChange}
  />
);
export default Input;
