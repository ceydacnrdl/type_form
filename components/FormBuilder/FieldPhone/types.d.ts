export interface FieldPhoneProps {
  id: string;
  label: string;
  register: any;
  description?: string;
  name: string;
  control: any;
  error?: {
    message?: string;
  };
  validation?: any;
}
