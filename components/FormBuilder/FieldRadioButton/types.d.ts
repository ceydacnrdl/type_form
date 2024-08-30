export interface FieldRadioProps {
  id: string;

  label: string | JSX.Element;
  register: any;
  description?: string | JSX.Element;
  name: string;
  options: {
    label: string | JSX.Element;
    value: string;
  }[];
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  validation?: any;
}
