import React from "react";
import {
  UseFormRegister,
  FieldError,
  Merge,
  FieldErrorsImpl,
} from "react-hook-form";

interface Option {
  value: string;
  label: string;
}

interface FieldSelectProps {
  id: string;
  label: string;
  register: UseFormRegister<any>;
  name: string;
  options: Option[];
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  validation?: any;
}

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
