import React from "react";

export default function FieldSubmit({ label, isDisabled }: FieldSubmitProps) {
  return (
    <button type="submit" disabled={isDisabled}>
      {label}
    </button>
  );
}
