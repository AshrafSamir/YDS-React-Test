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

const Form = ({ handleSubmit, register, errors }) => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
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
            {...register("name", { required: true })}
            margin="normal"
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoFocus
          />
          <TextField
            {...register("address", { required: true })}
            margin="normal"
            fullWidth
            name="address"
            label="Address"
            id="address"
          />

          <TextField
            {...register("apartmentNo", { required: true })}
            margin="normal"
            fullWidth
            name="apartment no"
            label="Apartment no"
            type="number"
            id="apartment no"
          />

          <TextField
            {...register("floorNo", { required: true })}
            margin="normal"
            fullWidth
            name="floor no"
            label="Floor no"
            type="number"
            id="floor no"
          />

          <FormControl margin="normal" fullWidth>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              {...register("city", { required: true })}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="city"
              label="City"
            >
              <MenuItem>Ten</MenuItem>
              <MenuItem>Twenty</MenuItem>
              <MenuItem>Thirty</MenuItem>
            </Select>
          </FormControl>
          {errors.email && <span>This field is required</span>}
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
