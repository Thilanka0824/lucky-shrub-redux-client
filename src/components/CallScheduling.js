import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addScheduledCall } from "../redux/callSchedulingSlice";

const CallScheduling = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const phone = event.target.phone.value;
    const date = event.target.date.value;
    const time = event.target.time.value;

    const callData = { name, phone, date, time };
    dispatch(addScheduledCall(callData));

    console.log("Call scheduled:", callData);
    handleClose();
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        sx={{
          backgroundColor: theme.palette.grey[800],
          color: theme.palette.common.white,
          borderRadius: 2,
          minWidth: "18rem",
          minHeight: "3.5rem",
          marginBottom: theme.spacing(1),
        }}
        onClick={handleClickOpen}
      >
        Schedule a Call
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Schedule a Call</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Your Name"
              type="text"
              fullWidth
              required
            />
            <TextField
              margin="dense"
              id="phone"
              label="Phone Number"
              type="tel"
              fullWidth
              required
            />
            <TextField
              margin="dense"
              id="date"
              label="Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              required
            />
            <TextField
              margin="dense"
              id="time"
              label="Time"
              type="time"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              required
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" color="primary">
              Schedule
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default CallScheduling;
