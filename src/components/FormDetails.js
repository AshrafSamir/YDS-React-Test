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

const Form = ({ handleSubmit, register, errors, cities }) => {
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
            InputLabelProps={{
              shrink: true,
            }}
          />
          {errors.name?.message}
          <TextField
            {...register("description")}
            margin="normal"
            fullWidth
            name="description"
            label="Address"
            id="description"
            InputLabelProps={{
              shrink: true,
            }}
          />
          {errors.description?.message}
          <TextField
            {...register("apartment_number")}
            margin="normal"
            fullWidth
            name="apartment_number"
            label="Apartment no."
            type="number"
            id="apartment_number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          {errors.apartment_number?.message}
          <TextField
            {...register("floor_number")}
            margin="normal"
            fullWidth
            name="floor_number"
            label="Floor no."
            type="number"
            id="floor_number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          {errors.floor_number?.message}
          <FormControl margin="normal" fullWidth>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              {...register("area")}
              defaultValue=""
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="area"
              label="City"
              InputLabelProps={{
                shrink: true,
              }}
            >
              {cities?.map((city) => (
                <MenuItem key={city.id} value={city.name}>
                  {city.name}
                </MenuItem>
              ))}
              {/* just for testing */}
              <MenuItem value="test">test</MenuItem>
            </Select>
          </FormControl>
          {errors.area?.message}
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
