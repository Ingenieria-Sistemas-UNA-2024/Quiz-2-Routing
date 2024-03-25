import React from "react";

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean
}

const Checkbox: React.FC<CheckboxProps> = ({ id, label, checked}) => (
  <div className="flex items-center">
    <input id={id} type="checkbox" className="mr-2" checked={checked}/>
    <label htmlFor={id} className="text-sm">
      {label}
    </label>
  </div>
);

export default Checkbox;
