import React from "react";
import { FieldInputProps } from "./types";

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
