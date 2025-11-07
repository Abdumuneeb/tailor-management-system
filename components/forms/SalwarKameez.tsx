"use client";

import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  MenuItem,
} from "@mui/material";
import styles from "@/styles/newBookingForm.module.scss";

export default function SalwarKameez() {
  return (
    <Box className={styles.measurementSection}>
      {/* 🔹 Measurement Fields */}
      <Grid container spacing={2}>
        <Grid size={{ md: 4 }}>
          <Typography variant="body1" sx={{ mb: 1.5 }}>
            General
          </Typography>
          <TextField
            label="لمبای / Length"
            fullWidth
            className={styles.formInputFld}
            sx={{ mb: 2.2 }}
          />
          <TextField
            label="تیرا / Shoulder"
            fullWidth
            className={styles.formInputFld}
            sx={{ mb: 2.2 }}
          />
          <TextField
            label="چھاتی / Chest"
            fullWidth
            className={styles.formInputFld}
            sx={{ mb: 2.2 }}
          />
          <TextField
            label="کمر / Waist"
            fullWidth
            className={styles.formInputFld}
            sx={{ mb: 2.2 }}
          />
          <TextField
            label="فرنٹ / Front"
            fullWidth
            className={styles.formInputFld}
            sx={{ mb: 2.2 }}
          />
          <TextField
            label="دامن / Daman"
            fullWidth
            className={styles.formInputFld}
            sx={{ mb: 2.2 }}
          />
          <TextField
            label="کالر / Collar"
            fullWidth
            className={styles.formInputFld}
            sx={{ mb: 2.2 }}
          />
          <TextField
            label="شلور لمبای / Shalwar Length"
            fullWidth
            className={styles.formInputFld}
            sx={{ mb: 2.2 }}
          />
          <TextField
            label="پائچہ / Pancha"
            fullWidth
            className={styles.formInputFld}
            sx={{ mb: 2.2 }}
          />
          <TextField
            label="آسن / Aasan"
            fullWidth
            className={styles.formInputFld}
            sx={{ mb: 2.2 }}
          />
          <TextField
            label="گھیرا / ghera"
            fullWidth
            className={styles.formInputFld}
            sx={{ mb: 2.2 }}
          />
        </Grid>
        <Grid size={{ md: 8 }}>
          <Grid container spacing={2}>
            <Grid size={{ md: 6 }}>
              <Typography variant="body1" sx={{ mb: 1.5 }}>
                Arm Size 1
              </Typography>
              <TextField
                label="بازو / Arm 1"
                fullWidth
                className={styles.formInputFld}
                sx={{ mb: 2.2 }}
              />
              <TextField
                label="کف / Cuff 1"
                fullWidth
                className={styles.formInputFld}
                sx={{ mb: 2.2 }}
              />
              <TextField
                label="بٹن پٹی / Btn Patti 1"
                fullWidth
                className={styles.formInputFld}
                sx={{ mb: 2.2 }}
              />
              <TextField
                label="جیب / Pocket 1"
                fullWidth
                className={styles.formInputFld}
                sx={{ mb: 2.2 }}
              />
            </Grid>
            <Grid size={{ md: 6 }}>
              <Typography variant="body1" sx={{ mb: 1.5 }}>
                Arm Size 2
              </Typography>
              <TextField
                label="بازو / Arm 2"
                fullWidth
                className={styles.formInputFld}
                sx={{ mb: 2.2 }}
              />
              <TextField
                label="کف / Cuff 2"
                fullWidth
                className={styles.formInputFld}
                sx={{ mb: 2.2 }}
              />
              <TextField
                label="بٹن پٹی / Btn Patti 2"
                fullWidth
                className={styles.formInputFld}
                sx={{ mb: 2.2 }}
              />
              <TextField
                label="جیب / Pocket 2"
                fullWidth
                className={styles.formInputFld}
                sx={{ mb: 2.2 }}
              />
            </Grid>
          </Grid>
          <Grid size={{ md: 12 }}>
            <Box display="flex" flexWrap="wrap">
              {[
                "Nokdar Tera",
                "Kaf Dbl Kaj",
                "Patti Dbl Bukram",
                "No Lbl",
                "Kaj Patti",
              ].map((label, i) => (
                <label key={i} className="customSeletBtn">
                  <input type="checkbox" />
                  <Box className="card">{label}</Box>
                </label>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Grid>

      {/* 🔹 Checkbox Options */}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid size={{ md: 12 }}>
          <Box display="flex" flexWrap="wrap" gap={2}>
            {[
              "Nokdar Tera",
              "Kaf Dbl Kaj",
              "Patti Dbl Bukram",
              "No Lbl",
              "Shoulder Patti",
              "Kaj Patti",
            ].map((label, i) => (
              <label key={i} className="customSeletBtn">
                <input type="checkbox" />
                <Box className="card">{label}</Box>
              </label>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* 🔹 Button Qty & Extras */}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid size={{ md: 3 }}>
          <TextField
            select
            label="Button Qty"
            fullWidth
            className={styles.formInputFld}
          >
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
          </TextField>
        </Grid>
        <Grid size={{ md: 3 }}>
          <TextField
            select
            label="Button Type"
            fullWidth
            className={styles.formInputFld}
          >
            <MenuItem value="metal">Metal</MenuItem>
            <MenuItem value="plastic">Plastic</MenuItem>
          </TextField>
        </Grid>
        <Grid size={{ md: 3 }}>
          <TextField
            select
            label="Extras"
            fullWidth
            className={styles.formInputFld}
          >
            <MenuItem value="extra1">Extra 1</MenuItem>
            <MenuItem value="extra2">Extra 2</MenuItem>
          </TextField>
        </Grid>
        <Grid size={{ md: 3 }}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ height: "56px" }}
          >
            Shalwar ZIP Image
          </Button>
        </Grid>
      </Grid>

      {/* 🔹 Radio Options */}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid size={{ md: 12 }}>
          <Box display="flex" flexWrap="wrap" gap={2}>
            {[
              "1 Shalwar Zip",
              "2 Shalwar Zip",
              "6 Darz",
              "2 Darz",
              "1 Side Pocket",
              "2 Side Pocket",
            ].map((label, i) => (
              <label key={i} className="customSeletBtn radioBtn">
                <input type="radio" name="radioGroup" />
                <Box className="card">{label}</Box>
              </label>
            ))}
          </Box>

          <Box display="flex" flexWrap="wrap" gap={2} mt={2}>
            {[
              "Gol Bain",
              "Sida Bain",
              "Half Bain",
              "Half Bain Gol",
              "Gol Gala",
              "None",
            ].map((label, i) => (
              <label key={i} className="customSeletBtn radioBtn">
                <input type="radio" name="bainGroup" />
                <Box className="card">{label}</Box>
              </label>
            ))}
          </Box>

          <Box display="flex" flexWrap="wrap" gap={2} mt={2}>
            {["Kurta", "Sida Daman", "Gol Daman", "None"].map((label, i) => (
              <label key={i} className="customSeletBtn radioBtn">
                <input type="radio" name="damanGroup" />
                <Box className="card">{label}</Box>
              </label>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* 🔹 Bain Size Field */}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid size={{ md: 3 }}>
          <TextField
            label="Bain Size"
            fullWidth
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
    </Box>
  );
}
