import {
  Box,
  Chip,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  styled,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import * as React from "react";
import { GREY } from "../../../Constants";
import CircleIcon from "@mui/icons-material/Circle";
import AdjustIcon from "@mui/icons-material/Adjust";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { display } from "@mui/system";

type ServiceStatusProps = {
  //
};

const ServiceBoxNull = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  border: `1px solid #fff`,
  width: "20%",
}));

const ServiceBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  border: `1px solid #2e7d32`,
  width: "20%",
}));

const ServiceBoxWarn = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  border: `1px solid #ed6c02`,
  width: "20%",
}));

const ServiceBoxError = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  border: `1px solid #d32f2f`,
  width: "20%",
  // height: 60,
}));

const classes: SxProps<Theme> | any = {
  icon: {
    marginLeft: "10",
    fontSize: "1rem",
    color: "#2e7d32",
  },
  typography: {
    variant: "h6",
    paddingLeft: 2,
    color: "#2e7d32",
    fontSize: "0.7rem",
    textAlign: "left",
  },
  iconWarn: {
    marginLeft: "10",
    fontSize: "1rem",
    color: "#ed6c02",
  },
  typographyWarn: {
    variant: "h6",
    paddingLeft: 2,
    color: "#ed6c02",
    fontSize: "0.7rem",
    textAlign: "left",
  },
  iconError: {
    marginLeft: "10",
    fontSize: "1rem",
    color: "#d32f2f",
  },
  typographyError: {
    variant: "h6",
    paddingLeft: 2,
    color: "#d32f2f",
    fontSize: "0.7rem",
    textAlign: "left",
  },
};

const ServiceStatus: React.FC<any> = () => {
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
          <Grid item xs={2} fontWeight={700}>
            Service Status
          </Grid>
          <Grid item xs={10}>
            <Stack direction="row" spacing={1}>
              <Chip
                label="Running"
                color="success"
                icon={<CheckCircleOutlineIcon />}
                sx={{ padding: 1 }}
              />
              <Chip
                label="Warning"
                color="warning"
                icon={<WarningAmberIcon />}
                sx={{ padding: 1 }}
              />
              <Chip
                label="Stopped"
                color="error"
                icon={<ErrorOutlineIcon />}
                sx={{ padding: 1 }}
              />
            </Stack>
          </Grid>
        </Grid>
        <Grid container rowSpacing={1} spacing={2} padding={2}>
          <Grid item xs={12}>
            <Stack direction="row" spacing={2} paddingBottom={2}>
              <ServiceBox>
                <IconButton>
                  <CheckCircleOutlineIcon sx={classes.icon} />
                  <Typography sx={classes.typography}>
                    Payment Web App
                  </Typography>
                </IconButton>
              </ServiceBox>
              <ServiceBox>
                <IconButton>
                  <CheckCircleOutlineIcon sx={classes.icon} />
                  <Typography sx={classes.typography}>API Gateway</Typography>
                </IconButton>
              </ServiceBox>
              <ServiceBox>
                <IconButton>
                  <CheckCircleOutlineIcon sx={classes.icon} />
                  <Typography sx={classes.typography}>
                    Payment Manager
                  </Typography>
                </IconButton>
              </ServiceBox>
              <ServiceBox>
                <IconButton>
                  <CheckCircleOutlineIcon sx={classes.icon} />
                  <Typography sx={classes.typography}>
                    Partner Topup Service
                  </Typography>
                </IconButton>
              </ServiceBox>
              <ServiceBox>
                <IconButton>
                  <CheckCircleOutlineIcon sx={classes.icon} />
                  <Typography sx={classes.typography}>
                    Merchant Topup Service
                  </Typography>
                </IconButton>
              </ServiceBox>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" spacing={2} paddingBottom={2}>
              <ServiceBox>
                <IconButton>
                  <CheckCircleOutlineIcon sx={classes.icon} />
                  <Typography sx={classes.typography}>
                    Merchant Bill Service
                  </Typography>
                </IconButton>
              </ServiceBox>
              <ServiceBoxWarn>
                <IconButton>
                  <WarningAmberIcon sx={classes.iconWarn} />
                  <Typography sx={classes.typographyWarn}>
                    Credit Transfer Service
                  </Typography>
                </IconButton>
              </ServiceBoxWarn>
              <ServiceBoxError>
                <IconButton>
                  <ErrorOutlineIcon sx={classes.iconError} />
                  <Typography sx={classes.typographyError}>
                    Notification Gateway Service
                  </Typography>
                </IconButton>
              </ServiceBoxError>
              <ServiceBox>
                <IconButton>
                  <CheckCircleOutlineIcon sx={classes.icon} />
                  <Typography sx={classes.typography}>
                    AS400 Connector Service
                  </Typography>
                </IconButton>
              </ServiceBox>
              <ServiceBox>
                <IconButton>
                  <CheckCircleOutlineIcon sx={classes.icon} />
                  <Typography sx={classes.typography}>
                    Reconcile Service
                  </Typography>
                </IconButton>
              </ServiceBox>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" spacing={2} paddingBottom={2}>
              <ServiceBox>
                <IconButton>
                  <CheckCircleOutlineIcon sx={classes.icon} />
                  <Typography sx={classes.typography}>Partner</Typography>
                </IconButton>
              </ServiceBox>
              <ServiceBox>
                <IconButton>
                  <CheckCircleOutlineIcon sx={classes.icon} />
                  <Typography sx={classes.typography}>AS400 (CBS)</Typography>
                </IconButton>
              </ServiceBox>
              <ServiceBox>
                <IconButton>
                  <CheckCircleOutlineIcon sx={classes.icon} />
                  <Typography sx={classes.typography}>BAS</Typography>
                </IconButton>
              </ServiceBox>
              <ServiceBox>
                <IconButton>
                  <CheckCircleOutlineIcon sx={classes.icon} />
                  <Typography sx={classes.typography}>
                    Temp File Server
                  </Typography>
                </IconButton>
              </ServiceBox>
              <ServiceBoxNull></ServiceBoxNull>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ServiceStatus;
