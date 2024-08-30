import {
  UseFormRegister,
  FieldError,
  Merge,
  FieldErrorsImpl,
} from "react-hook-form";

interface FieldTextBoxProps {
  id: string;
  label: string;
  description?: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  name: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  validation?: any;
}

interface FieldSchema {
  type: "text" | "select" | "submit";
  description?: string;
  placeholder?: string;
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
  description?: string;
  options: Option[];
  validation?: any;
}

interface FormBuilderProps {
  schema: { [key: string]: FieldSchema };
  onSubmit: (data: any) => void;
  defaultValues?: any;
}
