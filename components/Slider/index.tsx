"use client";

import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { title } from "process";
import { FormSchema } from "../FormBuilder";
import { useFetchAllComponents } from "@/hooks/useFetchAllComponents";

const OPTIONS: EmblaOptionsType = { axis: "y" };

const FORM_SCHEMA: FormSchema = {
  email: {
    type: "text",
    placeholder: "Type your answer here.aOSDGVpğIKASDOPgvujs<ıofuj..",
    description: "",
    label:
      "Alright, here we go. What’s your full name? This question is required.*",
    validation: { required: "Please fill this in" },
  },
  phone: {
    type: "phone",
    label: "Phone Number",
    description: "Please provide your phone number.",
    validation: { required: "Phone number is required" },
  },
  contactInfo: {
    type: "contactInfo",
    label: "Contact Information",
    description: "Please provide your contact information.",
    classNameLabel: "bg-yellow-500",
    validation: {
      firstName: {
        type: "text",
        label: "First Name",
        placeholder: "Jane",
        required: "First name is required",
      },
      lastName: {
        type: "text",
        label: "Last Name",
        placeholder: "Smith",
        required: "Last name is required",
      },
      phone: {
        type: "phone",
        label: "Phone Number",
        required: "Phone number is required",
      },
    },
  },
  radioAsk: {
    type: "radio",
    label: "Radio section label value?",
    description: "Please select one of the options below.",
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

console.log("FORM_SCHEMA", FORM_SCHEMA);
export default function Slider() {
  const { data, isLoading } = useFetchAllComponents();
  const schema = data ? data : FORM_SCHEMA;

  return <EmblaCarousel FORM_SCHEMA={schema} options={OPTIONS} />;
}
