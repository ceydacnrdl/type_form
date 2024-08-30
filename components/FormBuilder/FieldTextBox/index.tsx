import React from "react";
import type { FieldTextBoxProps } from "./types";

export default function FieldTextBox({
  id,
  label,
  register,
  name,
  error,
  validation,
}: FieldTextBoxProps) {
  return (
    <div className="form-control">
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...register(name, validation)} />
      {error && error.message && typeof error.message === "string" && (
        <p className="error">{error.message}</p>
      )}
    </div>
  );
}
