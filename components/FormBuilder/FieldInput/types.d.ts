import { UseFormRegister, FieldError } from "react-hook-form";

interface FieldInputProps {
  id: string;
  name: string;
  register: UseFormRegister<any>;
  validation?: any;
  error?: FieldError;
}
