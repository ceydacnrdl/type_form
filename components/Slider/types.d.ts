import { EmblaOptionsType } from "embla-carousel";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

interface SlideType {
  title: string;
  content: React.ReactNode;
}

interface PropType {
  FORM_SCHEMA: any;
  options?: EmblaOptionsType;
}
