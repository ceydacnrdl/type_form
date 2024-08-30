import React from "react";

function FieldLabel({ id, label }: FieldLabelProps) {
  return <label htmlFor={id}>{label}</label>;
}

export default FieldLabel;
