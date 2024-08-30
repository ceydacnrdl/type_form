import React, { useEffect, useState } from "react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import FormBuilder from "../FormBuilder";
import type { PropType } from "./types";

const EmblaCarousel: React.FC<PropType> = ({ FORM_SCHEMA, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setCurrentIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  const handleFormSubmit = (fieldName: string, data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: data,
    }));

    if (currentIndex === Object.keys(FORM_SCHEMA).length - 1) {
      console.log("Final data:", { ...formData, [fieldName]: data });
    } else {
      onNextButtonClick();
    }
  };

  const formSlides = Object.keys(FORM_SCHEMA).map((fieldName) => ({
    title: FORM_SCHEMA[fieldName].label,
    content: (
      <FormBuilder
        schema={{ [fieldName]: FORM_SCHEMA[fieldName] }}
        onSubmit={(data) => handleFormSubmit(fieldName, data)}
      />
    ),
  }));

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container my-auto">
          {formSlides.map((slide, index) => (
            <div className="embla__slide px-3 flex" key={index}>
              <div className="embla__slide__number text-2xl">
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
