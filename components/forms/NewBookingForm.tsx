"use client";

import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import MeasurementTable from "../tables/MeasurementTable";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "@/styles/newBookingForm.module.scss";

dayjs.extend(customParseFormat);

function NewBookingForm() {
  const [fromDate, setFromDate] = useState<Dayjs | null>(null);

  return (
    <>
      <Grid container columnSpacing={2} mb={3}>
        <Grid size={{ md: 4 }}>
          <TextField
            label="Customer Name"
            fullWidth
            name="Customer"
            type="text"
            className={styles.formInputFld}
          />
        </Grid>
        <Grid size={{ md: 4 }}>
          <TextField
            label="Phone Number"
            fullWidth
            name="number"
            type="text"
            className={styles.formInputFld}
          />
        </Grid>
        <Grid size={{ md: 4 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Delivery Date"
              value={fromDate}
              className={styles.formInputFld}
              onChange={(newValue) => setFromDate(newValue)}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
      <Grid container>
        <Grid size={{ md: 8 }}>
          <Box className="customSeletBtn">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox1"
              defaultChecked
            />
            <Box className="card">Urgent</Box>
          </Box>
          <Box className="customSeletBtn">
            <input type="checkbox" name="checkbox" id="checkbox2" />
            <Box className="card">After Eid</Box>
          </Box>
          <Box className="customSeletBtn radioBtn">
            <input type="radio" name="radio" id="radio1" defaultChecked />
            <Box className="card">Urgent</Box>
          </Box>
          <Box className="customSeletBtn radioBtn">
            <input type="radio" name="radio" id="radio2" />
            <Box className="card">After Eid</Box>
          </Box>
        </Grid>
      </Grid>

      <Box className={styles.measurementTable}>
        <MeasurementTable />
      </Box>

      <Grid container columnSpacing={2} mb={3}>
        <Grid size={{ md: 4 }}>
          <TextField
            label="Total Balance"
            fullWidth
            name="Customer"
            type="text"
            className={styles.formInputFld}
          />
        </Grid>
        <Grid size={{ md: 4 }}>
          <TextField
            label="Paid Balance"
            fullWidth
            name="number"
            type="text"
            className={styles.formInputFld}
          />
        </Grid>
        <Grid size={{ md: 4 }}>
          <TextField
            label="Remaining Balance"
            fullWidth
            name="number"
            type="text"
            className={styles.formInputFld}
          />
        </Grid>
      </Grid>

      <Box display={"flex"} justifyContent={"flex-end"}>
        <Button
          variant="contained"
          color="primary"
          style={{ width: "190px", fontSize: "18px" }}
        >
          Save
        </Button>
      </Box>
    </>
  );
}

export default NewBookingForm;
