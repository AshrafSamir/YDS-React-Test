import axios from "axios";

export const getCities = () => {
  return axios.get(`http://127.0.0.1:8000/address/states/`).catch((error) => {
    console.error(`Could not get cities: ${error}`);
  });
};

export const getAddressList = () => {
  return axios.get(`http://127.0.0.1:8000/address/`).catch((error) => {
    console.error(`Could not get addressList: ${error}`);
  });
};

export const addAddress = (address) => {
  return axios
    .post(`http://127.0.0.1:8000/address/`, address)
    .catch((error) => {
      console.error(`Could not add address: ${error}`);
    });
};

export const editAddress = ( id, address ) => {
  axios.put(`http://127.0.0.1:8000/address/${id}/`, address).catch((error) => {
    console.error(`Could not edit address: ${error}`);
  });
};

export const deleteAddress = (id) => {
  return axios.delete(`http://127.0.0.1:8000/address/${id}/`).catch((error) => {
    console.error(`Could not delete address: ${error}`);
  });
};
