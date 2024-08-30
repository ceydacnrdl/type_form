"use client";

import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { title } from "process";
import { FormSchema } from "../FormBuilder";

const OPTIONS: EmblaOptionsType = { axis: "y" };

const FORM_SCHEMA: FormSchema = {
  username: {
    type: "text",
    label: "Username",
    validation: { required: "Username is required" },
  },
  email: {
    type: "text",
    label: "Email",
    validation: { required: "Email is required" },
  },
  gender: {
    type: "select",
    label: "gender",
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
