"use client";

import { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "@/styles/newBookingForm.module.scss";

export default function SalwarKameez() {
  const [qty, setQty] = useState("");
  return (
    <Box className={styles.measurementSection}>
      {/* 🔹 Measurement Fields */}
      <Grid container spacing={3}>
        <Grid size={{ md: 4 }} sx={{ borderRight: "1px solid #bbb" }} pr={3}>
          <TextField
            label="لمبائی / Length"
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
            label="بازو / Arm "
            fullWidth
            className={styles.formInputFld}
            sx={{ mb: 2.2 }}
          />
          <TextField
            label=" گلا / Neck"
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
            label="گھیرا / ghera"
            fullWidth
            className={styles.formInputFld}
            sx={{ mb: 2.2 }}
          />
          <Box display={"flex"} sx={{ mb: 2.2 }}>
            <label className="customSeletBtn radioBtn">
              <input type="radio" name="shalwarT" defaultChecked />
              <Box className="card">شلوار</Box>
            </label>
            <label className="customSeletBtn radioBtn">
              <input type="radio" name="shalwarT" />
              <Box className="card">ٹروزر </Box>
            </label>
            <TextField label="لمبای / Length" className={styles.formInputFld} />
          </Box>
          <TextField
            label="پانچہ"
            fullWidth
            className={styles.formInputFld}
            sx={{ mb: 2.2 }}
          />
        </Grid>
        <Grid size={{ md: 8 }}>
          <Grid container spacing={2}>
            <Grid size={{ md: 6 }}>
              <TextField
                select
                label="فرنٹ پٹی کندے سے"
                fullWidth
                className={styles.formInputFld}
                sx={{ mb: 2.2 }}
                onChange={(e) => setQty(e.target.value)}
                slotProps={{
                  select: {
                    MenuProps: {
                      disablePortal: true,
                      PaperProps: {
                        sx: {
                          mt: 1,
                        },
                      },
                    },
                  },
                }}
              >
                <MenuItem value="14½">14½</MenuItem>
                <MenuItem value="15">15</MenuItem>
                <MenuItem value="15½">15½</MenuItem>
                <MenuItem value="16">16</MenuItem>
                <MenuItem value="16½">16½</MenuItem>
              </TextField>
              <TextField
                select
                label="فرنٹ پٹی بٹن"
                fullWidth
                className={styles.formInputFld}
                onChange={(e) => setQty(e.target.value)}
                sx={{ mb: 2.2 }}
                slotProps={{
                  select: {
                    MenuProps: {
                      disablePortal: true,
                      PaperProps: {
                        sx: {
                          mt: 1,
                        },
                      },
                    },
                  },
                }}
              >
                <MenuItem value="1">4</MenuItem>
                <MenuItem value="2">5</MenuItem>
                <MenuItem value="3">6</MenuItem>
              </TextField>
              <TextField
                select
                label="چاک پٹی بٹن"
                fullWidth
                className={styles.formInputFld}
                sx={{ mb: 2.2 }}
                slotProps={{
                  select: {
                    MenuProps: {
                      disablePortal: true,
                      PaperProps: {
                        sx: {
                          mt: 1,
                        },
                      },
                    },
                  },
                }}
              >
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </TextField>
              <TextField
                select
                label="فرنٹ پٹی"
                fullWidth
                className={styles.formInputFld}
                sx={{ mb: 2.2 }}
                slotProps={{
                  select: {
                    MenuProps: {
                      disablePortal: true,
                      PaperProps: {
                        sx: {
                          mt: 1,
                        },
                      },
                    },
                  },
                }}
              >
                <MenuItem value="s1">نوکدار</MenuItem>
                <MenuItem value="s2">سیدھی</MenuItem>
                <MenuItem value="s3">گول</MenuItem>
                <MenuItem value="s4">گم پٹی</MenuItem>
              </TextField>
              <TextField
                select
                label="بٹن سٹاۂل"
                fullWidth
                className={styles.formInputFld}
                sx={{ mb: 2.2 }}
                slotProps={{
                  select: {
                    MenuProps: {
                      disablePortal: true,
                      PaperProps: {
                        sx: {
                          mt: 1,
                        },
                      },
                    },
                  },
                }}
              >
                <MenuItem value="type1">سادہ</MenuItem>
                <MenuItem value="type2">فینسی</MenuItem>
                <MenuItem value="type3">سادہ میٹل</MenuItem>
              </TextField>
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
        <Grid size={{ md: 3 }}></Grid>
        <Grid size={{ md: 3 }}></Grid>
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
