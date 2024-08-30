import React from "react";
import { UseFormRegister, FieldError } from "react-hook-form";

interface FieldInputProps {
  id: string;
  name: string;
  register: UseFormRegister<any>;
  validation?: any;
  error?: FieldError;
}

function FieldInput({
  id,
  name,
  register,
  validation,
  error,
}: FieldInputProps) {
  return (
    <div>
      <input type="text" id={id} {...register(name, validation)} />
      {error && <p className="error">{error.message}</p>}
    </div>
  );
}

export default FieldInput;
