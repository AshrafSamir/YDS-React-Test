import React, { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Button from "@mui/material/Button";

function Row({ address, handleEdit, handleDelete }) {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {address?.name}
        </TableCell>
        <TableCell align="right">{address?.description}</TableCell>
        <TableCell align="right">{address?.apartment_number}</TableCell>
        <TableCell align="right">{address?.floor_number}</TableCell>
        <TableCell align="right">{address?.area}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box display="flex" justifyContent="flex-end" sx={{ margin: 1 }}>
              <Button
                sx={{ margin: 1 }}
                align="right"
                variant="contained"
                onClick={() => handleEdit(address)}
              >
                Edit
              </Button>
              <Button
                sx={{ margin: 1 }}
                align="right"
                variant="contained"
                color="error"
                onClick={() => handleDelete(address)}
              >
                Delete
              </Button>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
}

export default function ListDetails({ addressList, handleEdit, handleDelete }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Appartment no.</TableCell>
            <TableCell align="right">Floor no.</TableCell>
            <TableCell align="right">City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {addressList.map((address) => {
            return (
              <Row
                key={address.id}
                address={address}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
