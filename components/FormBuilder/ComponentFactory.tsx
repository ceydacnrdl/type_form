import FieldSelect from "./FieldSelect";
import type { FieldSelectProps } from "./FieldSelect/types";
import FieldSubmit from "./FieldSubmit";
import type { FieldTextBoxProps } from "./FieldTextBox/types";
import FieldTextBox from "./FieldTextBox";
import FieldRadio from "./FieldRadioButton";
import { FieldRadioProps } from "./FieldRadioButton/types";
import FieldContactInfo from "./FieldContactInfo";

const ComponentMapping: { [key: string]: React.FC<any> } = {
  text: FieldTextBox,
  select: FieldSelect,
  submit: FieldSubmit,
  radio: FieldRadio,
  contactInfo: FieldContactInfo,
};

export default ComponentMapping;
