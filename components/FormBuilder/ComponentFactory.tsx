import FieldSelect from "./FieldSelect";
import type { FieldSelectProps } from "./FieldSelect/types";
import FieldSubmit from "./FieldSubmit";
import type { FieldTextBoxProps } from "./FieldTextBox/types";
import FieldTextBox from "./FieldTextBox";

const ComponentMapping: {
  text: React.FC<FieldTextBoxProps>;
  select: React.FC<FieldSelectProps>;
  submit: React.FC<FieldSubmitProps>;
} = {
  text: FieldTextBox,
  select: FieldSelect,
  submit: FieldSubmit,
};

export default ComponentMapping;
