import {
  UseFormRegister,
  FieldError,
  Merge,
  FieldErrorsImpl,
} from "react-hook-form";

interface FieldTextBoxProps {
  id: string;
  label: string | JSX.Element;
  description?: string | JSX.Element;
  placeholder?: string;
  register: UseFormRegister<any>;
  name: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  validation?: any;
  classNameLabel?: string;
}

interface FieldSchema {
  type: "text" | "select" | "submit" | "radio" | "contactInfo";
  description?: string | JSX.Element;
  placeholder?: string;
  classNameLabel?: string;
  label: string | JSX.Element;
  validation?: any;
  options?: Option[]; // For select fields
}

interface Option {
  value: string;
  label: string | JSX.Element;
}

interface SelectFieldSchema {
  label: string;
  description?: string | JSX.Element;
  options: Option[];
  validation?: any;
}

interface FormBuilderProps {
  schema: { [key: string]: FieldSchema };
  onSubmit: (data: any) => void;
  defaultValues?: any;
}
