import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  getCities,
  getAddressList,
  deleteAddress,
  addAddress,
  editAddress,
} from "./utils/ApiActions";
import { fetchData } from "./utils/ApiMockup";
import "./App.css";

const schema = yup.object().shape({
  name: yup.string().required("Name field required"),
  description: yup.string().required("Address field required"),
  apartment_number: yup
    .number()
    .typeError("Apartment no. field required")
    .min(0)
    .integer()
    .required(),
  floor_number: yup
    .number()
    .typeError("Floor no. field required")
    .min(0)
    .integer()
    .required(),
  area: yup.string().required("City field required"),
});

const App = () => {
  const [cities, setCities] = useState([]);
  const [addressList, setAddressList] = useState([]);
  const [editAddressValue, setEditAddressValue] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    handleNewAddress(data);
    reset();
  };

  const handleNewAddress = (newAddress) => {
    if (editAddressValue !== null) {
      fetchData("editAddress", newAddress, editAddressValue.id).then((res) => {
        setAddressList(res);
        setEditAddressValue(null);
      });
    } else {
      fetchData("addAddress", newAddress).then((res) => {
        setAddressList(res);
      });
    }
  };

  const handleEdit = (address) => {
    setEditAddressValue(address);

    setValue("name", address?.name);
    setValue("description", address?.description);
    setValue("apartment_number", address?.apartment_number);
    setValue("floor_number", address?.floor_number);
    setValue("area", address?.area);
  };

  const handleDelete = (deletedAddress) => {
    let newList = addressList.filter(
      (address) => deletedAddress.id !== address.id
    );
    fetchData("deleteAddress", deletedAddress).then(() => {
      setAddressList(newList);
    });
  };

  useEffect(() => {
    /*     getCities().then((res) => {
      setCities(res.data);
    }); */
    fetchData("addressList").then((res) => {
      setAddressList(res);
    });
  }, [editAddressValue, addressList]);

  return (
    <div className="App">
      <Form
        cities={cities}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
      />

      <div className="divider" />
      <List
        addressList={addressList}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default App;
