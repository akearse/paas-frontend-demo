import * as React from "react";
import {
  ThemeProvider,
  createTheme,
  styled,
  useTheme,
} from "@mui/material/styles";
import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";

import Header from "./components/layouts/Header";
import Menu from "./components/layouts/Menu";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";

import { purple, blueGrey, blue } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { RootReducers } from "./reducers";
import * as loginActions from "./actions/login.action";
import PublicRoutes from "./router/public.routes";
import ProtectedRoutes from "./router/protected.routes";
import { useAppDispatch } from ".";
import DashBoardPage from "./components/pages/DashBoardPage";
import ManageUserPage from "./components/pages/ManageUserPage";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          // backgroundImage:
          //   "url(" + `${process.env.PUBLIC_URL}/images/bg-menu.jpg` + ")",
          // width: drawerWidth,
        },
      },
    },
  },
  typography: {
    fontFamily: "Prompt",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
  spacing: 8,
  palette: {
    // primary: process.env.REACT_APP_IS_PRODUCTION == "0" ? blue : blueGrey,
    background: {
      default: "#EEF3F9",
    },
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function App() {
  const [open, setOpen] = React.useState(true);
  const loginReducer = useSelector((state: RootReducers) => state.loginReducer);

  const dispatch = useDispatch<any>();
  // const dispatch = useAppDispatch();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    dispatch(loginActions.restoreLogin());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {loginReducer.result && (
          <Header open={open} onDrawerOpen={handleDrawerOpen} />
        )}
        {loginReducer.result && (
          <Menu open={open} onDrawerClose={handleDrawerClose} />
        )}

        <Main
          open={open}
          sx={
            {
              // backgroundImage:
              //   "url(" + `${process.env.PUBLIC_URL}/images/bg-login.png` + ")",
              // height: "100vh",
              // backgroundPosition: "center",
              // backgroundRepeat: "cover",
              // backgroundSize: "cover",
            }
          }
        >
          <DrawerHeader />
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<PublicRoutes />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            {/* Protected routes */}
            <Route path="/" element={<ProtectedRoutes />}>
              <Route path="/dashboard" element={<DashBoardPage />} />
              <Route path="/manage/user" element={<ManageUserPage />} />
            </Route>
          </Routes>
        </Main>
      </Box>
    </ThemeProvider>
  );
}

const NotFound = () => (
  <div>
    <h1>404 - Not Found!</h1>
    <Link to="/">Go Home</Link>
  </div>
);
