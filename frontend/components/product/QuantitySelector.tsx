"use client";

import { useState } from "react";

type Props = {
  initialValue?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
};

const QuantitySelector = ({
  initialValue = 1,
  onChange,
  min = 1,
  max = 99
}: Props) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (next: number) => {
    if (next < min || next > max) return;
    setValue(next);
    if (onChange) onChange(next);
  };

  return (
    <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-1 py-1 text-xs">
      <button
        type="button"
        className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-slate-100"
        onClick={() => handleChange(value - 1)}
      >
        −
      </button>
      <span className="w-8 text-center text-sm font-medium text-slate-900">
        {value}
      </span>
      <button
        type="button"
        className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-slate-100"
        onClick={() => handleChange(value + 1)}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;

