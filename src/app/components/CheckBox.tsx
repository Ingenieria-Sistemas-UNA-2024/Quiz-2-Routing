import React from 'react';

interface CheckboxProps {
  id: string;
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, label }) => (
  <div className="flex items-center">
    <input id={id} type="checkbox" className="mr-2" />
    <label htmlFor={id} className="text-sm">{label}</label>
  </div>
);

export default Checkbox;