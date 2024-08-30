"use client";

import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { title } from "process";

const OPTIONS: EmblaOptionsType = { axis: "y" };

const slides = [
  {
    title:
      "Please be aware of our investment criteria: We focus on early stage investments in scalable business models of any kind, typically investing up to €2m initially. Do you fit in here? This question is required.*",
    content:
      "If the answer is Yes we'd love to hear from you. If the answer is No you're welcome to continue but we may not be a good match.",
  },
  {
    title:
      "Alright, here we go. What’s your full name? This question is required.*",
    content: "",
  },
  {
    title: "What’s the name of your company? This question is required.*",
    content:
      "(The trade name is enough. e.g. “GREAT” instead of “GREAT Group Holdings Ltd”.",
  },
  {
    title:
      "In which year was your company established? This question is required.*",
    content: "",
  },
  {
    title:
      "Please kindly provide the URL of the LinkedIn profile of one of the founders of your startup. This question is required.*",
    content: "",
  },
];

export default function Slider() {
  return <EmblaCarousel slides={slides} options={OPTIONS} />;
}
