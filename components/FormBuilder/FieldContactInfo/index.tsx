import React from "react";
import { UseFormRegister } from "react-hook-form";
import FieldTextBox from "../FieldTextBox";

function FieldContactInfo({
  id,
  label,
  description,
  register,
  name,
  error,
  validation,
  classNameLabel,
}: FieldContactInfoProps) {
  return (
    <div>
      <label>{label}</label>
      <p>{description}</p>
      <FieldTextBox
        id={`${id}_firstName`}
        label="First Name"
        placeholder="Enter your first name"
        register={register}
        name={`${name}.firstName`}
        error={error?.firstName}
        validation={validation?.firstName}
        classNameLabel="bg-red"
      />
      <FieldTextBox
        id={`${id}_lastName`}
        label="Last Name"
        placeholder="Enter your last name"
        register={register}
        name={`${name}.lastName`}
        error={error?.lastName}
        validation={validation?.lastName}
        classNameLabel="bg-red"
      />
    </div>
  );
}

export default FieldContactInfo;
