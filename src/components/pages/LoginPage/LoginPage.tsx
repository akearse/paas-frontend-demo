import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, FormikProps } from "formik";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  SxProps,
  TextField,
  Theme,
  Typography,
  Paper,
} from "@mui/material";
import { User } from "../../../types/user.type";
import { useDispatch, useSelector } from "react-redux";
import { RootReducers } from "../../../reducers";
import * as loginActions from "../../../actions/login.action";
import { useAppDispatch } from "../../..";
import { GREY } from "../../../Constants";

type LoginPageProps = {
  //
};

const LoginPage: React.FC<any> = () => {
  const loginReducer = useSelector((state: RootReducers) => state.loginReducer);

  const dispatch = useDispatch<any>();
  //const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const classes: SxProps<Theme> | any = {
    root: {
      display: "flex",
      justifyContent: "center",
    },
    card: {
      maxWidth: 400,
      padding: 1,
      borderRadius: 4,
      boxShadow: `1px 2px 1px ${GREY}`,
    },
    background: {
      backgroundImage:
        "url(" + `${process.env.PUBLIC_URL}/images/bg-login.png` + ")",
      height: "100vh",
      backgroundPosition: "center",
      backgroundRepeat: "cover",
      backgroundSize: "cover",
    },
    logo: {
      backgroundImage:
        "url(" + `${process.env.PUBLIC_URL}/images/lh_logo.png` + ")",
      height: 50,

      backgroundPosition: "left",
      backgroundRepeat: "no-repeat",
    },

    name: {
      fontSize: "1rem",
    },
    buttons: { marginTop: 2 },
    versions: {
      marginTop: 4,
      justifyContent: "center",
      textAlign: "center",
      fontSize: "0.8rem",
    },
  };

  const showForm = ({
    handleSubmit,
    handleChange,
    isSubmitting,
    values,
  }: FormikProps<User>) => {
    return (
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          onChange={handleChange}
          value={values.username}
          autoComplete="email"
          autoFocus
        />

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          onChange={handleChange}
          value={values.password}
          type="password"
        />
        <br />

        {loginReducer.isError && <Alert severity="error">Login failed</Alert>}

        <Stack direction="row" spacing={2} sx={classes.buttons}>
          {/* <Button
            onClick={() => navigate("/register")}
            type="button"
            fullWidth
            variant="outlined"
          >
            Register
          </Button> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={loginReducer.isFetching}
          >
            Sign In
          </Button>
        </Stack>
        <Stack direction="row" spacing={2} sx={classes.versions}>
          Copyright © 2022 LHFG <br /> Version 0.1
        </Stack>
      </form>
    );
  };

  const initialValues: User = { username: "", password: "", encodebase64: "" };

  return (
    <>
      {/* <Box sx={classes.background}></Box> */}
      <Box sx={classes.root}>
        <Card sx={classes.card}>
          <CardContent>
            <Typography sx={classes.logo}></Typography>
            <div style={{ paddingBottom: 20 }}></div>
            <Typography sx={classes.name}>Payment As A Service</Typography>
            <Formik
              onSubmit={(values, {}) => {
                dispatch(loginActions.login(values, navigate));
              }}
              initialValues={initialValues}
            >
              {(props) => showForm(props)}
            </Formik>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
export default LoginPage;
