import React from "react";
import { Grid, Typography, TextField, Button, Paper, Box } from "@mui/material";

const Profile = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
        <Box mt={5}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Edit Profile
            </Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    required
                    label="First Name"
                    variant="outlined"
                    defaultValue="John"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    required
                    label="Last Name"
                    variant="outlined"
                    defaultValue="Doe"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    required
                    label="Email"
                    variant="outlined"
                    type="email"
                    defaultValue="johndoe@example.com"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    required
                    label="Username"
                    variant="outlined"
                    defaultValue="johndoe"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Password"
                    variant="outlined"
                    type="password"
                    helperText="Leave blank to keep the same"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Confirm Password"
                    variant="outlined"
                    type="password"
                    helperText="Leave blank to keep the same"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Save Changes
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Profile;
