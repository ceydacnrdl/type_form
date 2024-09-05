import React from "react";
import { UseFormRegister } from "react-hook-form";
import FieldTextBox from "../FieldTextBox";
import FieldPhone from "../FieldPhone";
import ComponentMapping from "../ComponentFactory";

function FieldContactInfo({
  id,
  label,
  description,
  register,
  name,
  error,
  control,
  validation,
}: FieldContactInfoProps) {
  console.log(validation);

  return (
    <div>
      <label>{label}</label>
      <p>{description}</p>

      {Object.keys(validation).map((key) => {
        const field = validation[key];
        const Component = ComponentMapping[field.type];
        return (
          <Component
            key={key}
            id={`${id}_${key}`}
            label={field.label || key}
            placeholder={field.placeholder}
            register={register}
            name={`${name}.${key}`}
            error={error?.[key]}
            validation={field}
            control={control}
            classNameLabel="bg-red"
          />
        );
      })}
    </div>
  );
}

export default FieldContactInfo;
