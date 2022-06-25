import React from "react";
import FormDetails from "./FormDetails";

export default function Form({
  cities,
  register,
  errors,
  onSubmit,
  handleSubmit,
}) {
  return (
    <FormDetails
      register={register}
      errors={errors}
      handleSubmit={handleSubmit(onSubmit)}
      cities={cities}
    />
  );
}
