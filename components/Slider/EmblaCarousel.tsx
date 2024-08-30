import React from "react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import FormBuilder, { FormSchema } from "../FormBuilder";
import type { PropType } from "./types";

const EmblaCarousel: React.FC<PropType> = ({ FORM_SCHEMA, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

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

  console.log("formSlides", formSlides);

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
