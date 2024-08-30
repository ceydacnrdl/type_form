import React from "react";
import { useForm, UseFormRegister } from "react-hook-form";
import FieldSubmit from "./FieldSubmit";
import type { FieldSchema, FormBuilderProps } from "./FieldTextBox/types";
import ComponentMapping from "./ComponentFactory";

export interface FormSchema {
  [key: string]: FieldSchema;
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
          const Component = ComponentMapping[field.type];
          return (
            <Component
              key={fieldName}
              id={fieldName}
              label={field.label}
              description={field.description}
              placeholder={field.placeholder}
              register={register as UseFormRegister<any>}
              name={fieldName}
              error={errors[fieldName]}
              options={field.options ?? []}
              validation={field.validation}
              isDisabled={formState.isSubmitting}
            />
          );
        })}

        <FieldSubmit label="Submit" isDisabled={false} />
      </form>
    </div>
  );
}
