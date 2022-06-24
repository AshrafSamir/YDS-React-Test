import React from "react";
import ListDetails from "./ListDetails";

const List = ({ addressList, newAddress, handleEdit, handleDelete }) => {
  return (
    <ListDetails
      addressList={addressList}
      newAddress={newAddress}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default List;
