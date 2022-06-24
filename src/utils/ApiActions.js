import axios from "axios";

export const getCities = () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .catch((error) => {
      console.error(`Could not get cities: ${error}`);
    });
};

export const getAddressList = () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .catch((error) => {
      console.error(`Could not get addressList: ${error}`);
    });
};

export const addAddress = (address) => {
  return axios
    .post(`https://jsonplaceholder.typicode.com/users`, {
      address,
    })
    .catch((error) => {
      console.error(`Could not add address: ${error}`);
    });
};

export const editAddress = async (address) => {
  let res;
  try {
    res = await axios.post(`https://jsonplaceholder.typicode.com/users`, {
      address,
    });
  } catch (error) {
    console.error(`Could not get edit address: ${error}`);
  }
};

export const deleteAddress = async () => {
  let res;
  try {
    res = await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${this.state.id}`
    );
  } catch (error) {
    console.error(`Could not get delete address: ${error}`);
  }
};
