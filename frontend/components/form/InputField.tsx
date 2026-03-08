import React from "react";

type Props = {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputField = ({
  label,
  name,
  type = "text",
  autoComplete,
  required,
  ...rest
}: Props) => {
  return (
    <label className="flex flex-col gap-1 text-sm text-slate-700">
      <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
        {label}
      </span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="h-10 rounded-full border border-slate-200 bg-white px-4 text-sm outline-none ring-brand focus:ring-1"
        {...rest}
      />
    </label>
  );
};

export default InputField;

