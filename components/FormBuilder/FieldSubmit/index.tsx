import React from "react";

interface FieldSubmitProps {
  label: string;
  isDisabled: boolean;
}

export default function FieldSubmit({ label, isDisabled }: FieldSubmitProps) {
  return (
    <button type="submit" disabled={isDisabled}>
      {label}
    </button>
  );
}
