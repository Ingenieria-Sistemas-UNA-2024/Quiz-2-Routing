

const Button: React.FC<{
  id: string;
  color: string;
  onClick?: () => void;
  children: string;
}> = ({ id, color, children, onClick }) => {
 
  return (
    <button
      className={`px-4 py-2 rounded block w-full text-white bg-${color}-500 hover:bg-${color}-600`}
      id={id}
      onClick={(e) => {{onClick ? onClick() : null} e.preventDefault()}}
    >
      {children}
    </button>
  );
};
export default Button;
