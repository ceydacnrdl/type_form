import React from "react";

export default function FieldSubmit({ label, isDisabled }: FieldSubmitProps) {
  return (
    <button
      className="px-4 bg-button py-2 text-lg text-white rounded-md"
      type="submit"
      disabled={isDisabled}
    >
      {label}
    </button>
  );
}
