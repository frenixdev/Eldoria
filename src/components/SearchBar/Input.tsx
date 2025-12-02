import React, { useState } from "react";
type props = {
  label?: string;
  type?: string;
  children: string;
  className: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  children,
  type = "text",
  className,
  ...rest
}: props) {
  const [value, setValue] = useState("");
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <div className={className}>
      <input
        type={type}
        placeholder={children}
        value={value}
        onChange={handleChange}
        {...rest}
        className="inline-block w-full outline-none placeholder:text-sm placeholder:italic placeholder:font-mono "

      />
    </div>
  );
}
