"use client";

import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { title } from "process";
import { FormSchema } from "../FormBuilder";

const OPTIONS: EmblaOptionsType = { axis: "y" };

const FORM_SCHEMA: FormSchema = {
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
  username: {
    type: "text",
    placeholder: "Enter your username",
    description: "Please enter your description",
    label:
      "Please be aware of our investment criteria: We focus on early stage investments in scalable business models of any kind, typically investing up to €2m initially.",
    validation: { required: "Oops! Please make a selection" },
  },
  email: {
    type: "text",
    placeholder: "Enter your email",
    description: "Please enter your email description",
    label: "Email",
    validation: { required: "Email is required" },
  },
};

export default function Slider() {
  return <EmblaCarousel FORM_SCHEMA={FORM_SCHEMA} options={OPTIONS} />;
}
