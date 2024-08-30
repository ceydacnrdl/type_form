import React from "react";
import { useForm, UseFormRegister } from "react-hook-form";
import FieldTextBox from "./FieldTextBox";
import FieldSubmit from "./FieldSubmit";
import FieldSelect from "./FieldSelect";

interface FieldSchema {
  label: string;
  validation?: any;
  options?: Option[]; // For select fields
}

interface Option {
  value: string;
  label: string;
}

interface SelectFieldSchema {
  label: string;
  options: Option[];
  validation?: any;
}

export interface FormSchema {
  [key: string]: FieldSchema;
}

interface FormBuilderProps {
  schema: FormSchema;
  onSubmit: (data: any) => void;
  defaultValues?: any;
}

export default function FormBuilder({
  schema,
  onSubmit,
  defaultValues = {},
}: FormBuilderProps) {
  const { register, handleSubmit, formState } = useForm({ defaultValues });
  const { errors } = formState;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {Object.keys(schema).map((fieldName) => {
          const field = schema[fieldName];
          if ("options" in field) {
            // If options are present, render FieldSelect
            const selectField = field as SelectFieldSchema;
            return (
              <FieldSelect
                key={fieldName}
                id={fieldName}
                label={selectField.label}
                register={register as UseFormRegister<any>}
                name={fieldName}
                options={selectField.options}
                error={errors[fieldName]}
                validation={selectField.validation}
              />
            );
          } else {
            return (
              <FieldTextBox
                key={fieldName}
                id={fieldName}
                label={field.label}
                register={register as UseFormRegister<any>}
                name={fieldName}
                error={errors[fieldName]}
                validation={field.validation}
              />
            );
          }
        })}

        <FieldSubmit label="Submit" isDisabled={false} />
      </form>
    </div>
  );
}
