import React from "react";
import "../App.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Logo from "../assets/Logo.jpg";

const Form = ({ handleSubmit, register, errors, watch, cities }) => {

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar alt="YDS Logo" src={Logo} />
        <Typography component="h1" variant="h5">
          Add Address
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            {...register("name")}
            margin="normal"
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoFocus
          />
          {errors.name?.message}
          <TextField
            {...register("address")}
            margin="normal"
            fullWidth
            name="address"
            label="Address"
            id="address"
          />
          {errors.address?.message}
          <TextField
            {...register("apartmentNo")}
            margin="normal"
            fullWidth
            name="apartmentNo"
            label="Apartment no."
            type="number"
            id="apartment no"
          />
          {errors.apartmentNo?.message}
          <TextField
            {...register("floorNo")}
            margin="normal"
            fullWidth
            name="floorNo"
            label="Floor no."
            type="number"
            id="floor no"
          />
          {errors.floorNo?.message}
          <FormControl margin="normal" fullWidth>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              {...register("city")}
              defaultValue=""
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="city"
              label="City"
            >
              {cities?.map((city) => (
                <MenuItem key={city.id} value={city.name}>
                  {city.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {errors.city?.message}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Form;
