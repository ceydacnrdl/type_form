// FieldRadio/index.tsx
import React from "react";
import type { FieldRadioProps } from "./types";

export default function FieldRadio({
  id,
  label,
  register,
  description,
  name,
  options,
  error,
  validation,
}: FieldRadioProps) {
  return (
    <div className="form-control">
      <label className="block mb-2" htmlFor={id}>
        {label}
      </label>
      {description && (
        <label className="block mb-5 text-gray-500 text-lg" htmlFor={id}>
          {description}
        </label>
      )}
      <div>
        {options.map((option) => (
          <label key={option.value} className="block text-lg">
            <input
              type="radio"
              id={`${id}-${option.value}`}
              {...register(name, validation)}
              value={option.value}
              className="mr-2"
            />
            {option.label}
          </label>
        ))}
      </div>
      {error && error.message && typeof error.message === "string" && (
        <p className="error text-base mt-2">{error.message}</p>
      )}
    </div>
  );
}
