import React from "react";
import { FieldSelectProps } from "./types";

export default function FieldSelect({
  id,
  label,
  register,
  description,
  name,
  options,
  error,
  validation,
}: FieldSelectProps) {
  return (
    <div className="form-control">
      <label className="block mb-2" htmlFor={id}>
        {label}
      </label>
      <label className="block my-5 text-gray-500" htmlFor={id}>
        {description}
      </label>
      <select
        className="block w-full bg-transparent shadow-md !border-0"
        id={id}
        {...register(name, validation)}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && error.message && typeof error.message === "string" && (
        <p className="error text-base mt-2">{error.message}</p>
      )}
    </div>
  );
}
