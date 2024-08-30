import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import FormBuilder, { FormSchema } from "../FormBuilder"; // Import FormSchema type from FormBuilder

interface SlideType {
  title: string;
  content: React.ReactNode;
}

interface PropType {
  slides: SlideType[];
  options?: EmblaOptionsType;
}

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // Define the FORM_SCHEMA with each field
  const FORM_SCHEMA: FormSchema = {
    username: {
      label: "Username",
      validation: { required: "Username is required" },
    },
    email: {
      label: "Email",
      validation: { required: "Email is required" },
    },
    channel: {
      label: "Channel",
      options: [
        { value: "tech", label: "Tech" },
        { value: "sports", label: "Sports" },
        { value: "news", label: "News" },
      ],
      validation: { required: "Channel is required" },
    },
  };

  // Prepare each field for individual slides
  const formSlides = Object.keys(FORM_SCHEMA).map((fieldName) => ({
    title: FORM_SCHEMA[fieldName].label,
    content: (
      <FormBuilder
        schema={{ [fieldName]: FORM_SCHEMA[fieldName] }}
        onSubmit={(data) => {
          onNextButtonClick();
          console.log("butona tıklandı:", data);
        }}
      />
    ),
  }));

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container my-auto">
          {formSlides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number text-2xl mt-48">
                {slide.title}
              </div>
              <div className="embla__slide__content text-2xl text-gray-600 mt-4">
                {slide.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
