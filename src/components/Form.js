import React from "react";
import FormDetails from "./FormDetails";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addAddress } from "../utils/ApiActions";

const schema = yup.object().shape({
  name: yup.string().required("Name field required"),
  address: yup.string().required("Address field required"),
  apartmentNo: yup
    .number()
    .typeError("Apartment no. field required")
    .min(0)
    .integer()
    .required(),
  floorNo: yup
    .number()
    .typeError("Floor no. field required")
    .min(0)
    .integer()
    .required(),
  city: yup.string().required("City field required"),
});

export default function Form({ cities, handleNewAddress }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    handleNewAddress(data);
    // addAddress(data);
    console.log(data, "data");
  };

  return (
    <FormDetails
      register={register}
      errors={errors}
      handleSubmit={handleSubmit(onSubmit)}
      watch={watch}
      cities={cities}
    />
  );
}
