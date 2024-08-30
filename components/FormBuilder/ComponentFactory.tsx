import FieldSelect from "./FieldSelect";
import type { FieldSelectProps } from "./FieldSelect/types";
import FieldSubmit from "./FieldSubmit";
import type { FieldTextBoxProps } from "./FieldTextBox/types";
import FieldTextBox from "./FieldTextBox";
import FieldRadio from "./FieldRadioButton";
import { FieldRadioProps } from "./FieldRadioButton/types";

const ComponentMapping: {
  text: React.FC<FieldTextBoxProps>;
  select: React.FC<FieldSelectProps>;
  submit: React.FC<FieldSubmitProps>;
  radio: React.FC<FieldRadioProps>;
} = {
  text: FieldTextBox,
  select: FieldSelect,
  submit: FieldSubmit,
  radio: FieldRadio,
};

export default ComponentMapping;
