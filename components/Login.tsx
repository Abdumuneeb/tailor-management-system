"use client";
import { useState } from "react";
import { useRouter } from "nextjs-toploader/app";
import { icons } from "./../lib/icons";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import styles from "@/styles/login.module.scss";

function Login() {
  const router = useRouter();
  const [showPin, setShowPin] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    pin: "",
  });

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box className={styles.loginContainer}>
      <Box className={styles.leftSide}>
        <Box>
          <Typography variant="h4" fontWeight={700}>
            Sign in your account
          </Typography>

          {/* wrapping form helps disable autofill in some browsers */}
          <Box component="form" className={styles.formOuter} autoComplete="off">
            <Box mb={3}>
              <TextField
                label="Username"
                fullWidth
                name="username"
                type="text"
                className={styles.formInputFld}
                value={formData.username}
                onChange={handleChange}
                autoComplete="new-username"
                inputProps={{
                  autoComplete: "off",
                  form: { autoComplete: "off" },
                }}
              />
            </Box>

            <Box mb={2}>
              <TextField
                label="Create PIN"
                fullWidth
                name="pin"
                className={styles.formInputFld}
                type={showPin ? "text" : "password"}
                value={formData.pin}
                onChange={handleChange}
                inputProps={{
                  maxLength: 6,
                  inputMode: "numeric",
                  autoComplete: "new-password",
                  form: { autoComplete: "off" },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPin(!showPin)}
                        edge="end"
                        className={styles.visibilityIcon}
                        tabIndex={-1}
                      >
                        {showPin ? icons.visibilityOff() : icons.visibilityOn()}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box textAlign={"left"}>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "#d73036",
                      "&.Mui-checked": {
                        color: "#d73036",
                      },
                    }}
                  />
                }
                label="Remember my preference"
              />
            </Box>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              sx={{ mt: 2 }}
              onClick={handleSignIn}
            >
              SIGN IN
            </Button>
          </Box>
        </Box>
      </Box>

      <Box className={styles.rightSide}>
        <img src="/logo.jpg" alt="logo" />
      </Box>
    </Box>
  );
}

export default Login;
