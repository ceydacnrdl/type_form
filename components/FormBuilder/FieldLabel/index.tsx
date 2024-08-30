import React from "react";

interface FieldLabelProps {
  id: string;
  label: string;
}

function FieldLabel({ id, label }: FieldLabelProps) {
  return <label htmlFor={id}>{label}</label>;
}

export default FieldLabel;
