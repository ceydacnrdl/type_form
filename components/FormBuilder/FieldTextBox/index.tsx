import React from "react";
import type { FieldTextBoxProps } from "./types";
import clsx from "clsx";

export default function FieldTextBox({
  id,
  label,
  placeholder,
  description,
  register,
  name,
  error,
  validation,
  classNameLabel,
}: FieldTextBoxProps) {
  return (
    <div className="form-control">
      <label className={clsx("block mb-2", classNameLabel)} htmlFor={id}>
        {label}
      </label>
      <label className="block my-5 text-gray-500" htmlFor={id}>
        {description}
      </label>
      <input
        className="block w-full bg-transparent shadow-md !border-0"
        type="text"
        id={id}
        placeholder={placeholder}
        {...register(name, validation)}
      />
      {error && error.message && typeof error.message === "string" && (
        <p className="error text-base mt-2">{error.message}</p>
      )}
    </div>
  );
}
