import { Box, Grid, Paper, styled, Typography } from "@mui/material";
import * as React from "react";
import { GREY } from "../../../Constants";
import "./Welcome.css";

type WelcomeProps = {
  //
};

// now .. not use
const ItemTest = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: "center",
  color: theme.palette.text.secondary,
}));
// now .. not use

const Welcome: React.FC<any> = () => {
  return (
    <>
      <Box
        sx={{
          width: "auto",
          p: 1,
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "#fff",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          border: "1px solid",
          borderColor: (theme) =>
            theme.palette.mode === "dark" ? "grey.800" : "grey.300",
          borderRadius: 2,
          fontSize: "0.875rem",
          boxShadow: `1px 2px 1px ${GREY}`,
        }}
      >
        <Grid container rowSpacing={1} spacing={2} padding={2}>
          <Grid item xs={12} fontWeight={700}>
            Good Afternoon, <span className="welcome-text-primary"> EOD </span>{" "}
            !
            <hr className="welcome-hr" />
          </Grid>

          <Grid item xs={12}>
            Today's Transaction
          </Grid>
          <Grid item xs={3}>
            Total Transaction
          </Grid>
          <Grid item xs={9}>
            Total Amount
          </Grid>
          <Grid item xs={3} className="welcome-text-success">
            1,500
          </Grid>
          <Grid item xs={9} className="welcome-text-success">
            250,000
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Welcome;
