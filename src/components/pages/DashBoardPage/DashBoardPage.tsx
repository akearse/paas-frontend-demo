import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import axios from "axios";
import { imageUrl } from "../../../Constants";
import { Box } from "@mui/material";
import Welcome from "../../layouts/Welcome";
import ServiceStatus from "../../layouts/ServiceStatus";

export default function DashBoardPage() {
  return (
    <>
      <Welcome />
      <div style={{ paddingBottom: 10 }}></div>
      <ServiceStatus />
    </>
  );
}
