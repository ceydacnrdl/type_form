import React from "react";
import { FieldSelectProps } from "./types";

export default function FieldSelect({
  id,
  label,
  register,
  name,
  options,
  error,
  validation,
}: FieldSelectProps) {
  return (
    <div className="form-control">
      <label htmlFor={id}>{label}</label>
      <select id={id} {...register(name, validation)}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && error.message && typeof error.message === "string" && (
        <p className="error">{error.message}</p>
      )}
    </div>
  );
}
