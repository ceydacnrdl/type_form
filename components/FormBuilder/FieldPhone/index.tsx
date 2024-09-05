import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FieldPhoneProps } from "./types";
import { Controller } from "react-hook-form";

export default function FieldPhone({
  id,
  label,
  register,
  description,
  name,
  error,
  control,
  validation,
}: FieldPhoneProps) {
  return (
    <div className="form-control">
      <label className="block mb-2" htmlFor={id}>
        {label}

        <Controller
          control={control}
          name="phone"
          rules={{ required: true }}
          render={({ field: { ref, ...field } }) => (
            <PhoneInput
              {...field}
              inputProps={{
                ref,
                required: true,
                autoFocus: true,
              }}
              country={"tr"}
              regions={["america", "europe", "asia", "oceania", "africa"]}
              countryCodeEditable={true}
              specialLabel={"Player Mobile Number"}
              inputStyle={{
                width: "100%",
                display: "block",
                backgroundColor: "transparent",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                border: "0",
              }}
            />
          )}
        />
      </label>
    </div>
  );
}
