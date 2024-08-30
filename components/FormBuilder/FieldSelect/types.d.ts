import {
  UseFormRegister,
  FieldError,
  Merge,
  FieldErrorsImpl,
} from "react-hook-form";

interface Option {
  value: string;
  label: string;
}

interface FieldSelectProps {
  id: string;

  label: string | JSX.Element;
  description;
  string;
  register: UseFormRegister<any>;
  name: string;
  options: Option[];
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  validation?: any;
}
