const delay = (timeout) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

let data = [
  {
    id: 0,
    name: "ashraf",
    description: "any desctription",
    apartment_number: 1,
    floor_number: 2,
    area: "cairo",
  },
  {
    id: 1,
    name: "yds",
    description: "any desctription",
    apartment_number: 1,
    floor_number: 2,
    area: "cairo",
  },
];

export const fetchData = (request, newAddress, id) =>
  delay(1000).then(() => {
    switch (request) {
      case "addressList":
        return data;
      case "addAddress":
        data = [...data, { id: Date.now(), ...newAddress }];
        return data;
      case "editAddress":
        data = data.map((address) => {
          if (address.id === id) {
            return { id, ...newAddress };
          } else {
            return address;
          }
        });
        return data;
      case "deleteAddress":
        data = data.filter((address) => address.id !== newAddress.id);
        return data;
      default:
        return data;
    }
  });
