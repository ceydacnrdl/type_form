"use client";

import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { title } from "process";
import { FormSchema } from "../FormBuilder";

const OPTIONS: EmblaOptionsType = { axis: "y" };

const FORM_SCHEMA: FormSchema = {
  radioAsk: {
    type: "radio",
    label: (
      <label
        dangerouslySetInnerHTML={{
          __html:
            "Please be aware of our investment criteria: We focus on early stage investments in scalable business models of any kind, typically investing up to €2m initially.<br/><br/>Do you fit in here?",
        }}
      />
    ),
    description: (
      <label
        dangerouslySetInnerHTML={{
          __html:
            'If the answer is "Yes" we\'d love to hear from you. If the answer is "No" you\'re welcome to continue but we may not be a good match.',
        }}
      />
    ),
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    validation: { required: "Oops! Please make a selection" },
  },
  name: {
    type: "text",
    placeholder: "Type your answer here...",
    description: "",
    label:
      "Alright, here we go. What’s your full name? This question is required.*",
    validation: { required: "Please fill this in" },
  },
  company: {
    type: "text",
    placeholder: "Type your answer here...",
    description:
      "(The trade name is enough. e.g. “GREAT” instead of “GREAT Group Holdings Ltd”.",
    label: "What’s the name of your company?",
    validation: { required: "Please fill this in" },
  },
  year: {
    type: "text",
    placeholder: "Type your answer here...",
    description: "",
    label:
      "In which year was your company established? This question is required.*",
    validation: { required: "Please fill this in" },
  },
  linkedin: {
    type: "text",
    placeholder: "https://",
    description: "",
    label:
      "Please kindly provide the URL of the LinkedIn profile of one of the founders of your startup. This question is required.*",
    validation: { required: "Please fill this in" },
  },
  gender: {
    type: "select",
    description: "Please enter your select description",
    label: "Gender",
    options: [
      { value: "mr", label: "mr" },
      { value: "mrs", label: "mrs" },
    ],
    validation: { required: "gender is required" },
  },
};

export default function Slider() {
  return <EmblaCarousel FORM_SCHEMA={FORM_SCHEMA} options={OPTIONS} />;
}
