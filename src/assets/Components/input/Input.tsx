import React, { useState } from "react";
type props = {
  label?: string;
  type?: string;
  children: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
export default function Input({ children, type = "text", ...rest }: props) {
  const [value, setValue] = useState("");
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }
  return (
    <div className="input-wrapper">
      <input
        type={type}
        placeholder={children}
        value={value}
        onChange={handleChange}
        {...rest}
      />
    </div>
  );
}
