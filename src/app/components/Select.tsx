const Select = ({ id, options }) => (
  <select
    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    id={id}
  >
    {options.map((option, index) => (
      <option key={index}>{option}</option>
    ))}
  </select>
);
export default Select;
