import { createTheme } from "@mui/material/styles";

// theme breakpoints
let theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 375,
      sm: 425,
      md: 600,
      lg: 900,
      xl: 1200,
      xxl: 1536,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#d73036",
      light: "#ffffff",
    },
    secondary: { main: "#EBF304" },
    darkBlue: { main: "#26267F" },
    maroon: { main: "#690B22" },
    teal: { main: "#096B68" },
    purple: { main: "#4F1C51" },
    pending: { main: "#B7992B", light: "#FFF6D9" },
    success: { main: "#118F54", light: "#D6F2E2" },
    failed: { main: "#D21D3D", light: "#FDE1E4" },
    background: { default: "#ffffff" },
    gray: { main: "#545454", light: "#ccc" },
    black: { main: "#000" },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "8px",
          textTransform: "none",
          boxShadow: "none",
          padding: "0.8rem 0.75rem",
          whiteSpace: "nowrap",
          fontSize: "1rem",
          color: "#FFFFFF",
          "&.Mui-disabled": {
            backgroundColor: theme.palette.primary.light,
            color: "#FFFFFF",
          },
          "&:hover": {
            boxShadow: "none",
            backgroundColor: theme.palette.primary.main,
          },
          "&.MuiButton-containedSecondary:hover": {
            backgroundColor: theme.palette.secondary.main,
          },
          "&.MuiButton-outlined:hover": {
            backgroundColor: theme.palette.secondary.main,
          },
        }),
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        popper: {
          zIndex: 999999,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem", // 14px
          lineHeight: "0.875rem", // 14px
        },
        contained: {
          margin: "4px 0 0",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          maxWidth: "1380px",
          "@media (min-width:1200px)": {
            maxWidth: "1380px",
          },
        },
      },
      defaultProps: {
        maxWidth: "xl",
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ccc",
            color: "#ccc",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ccc",
            borderRadius: "12px",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#888",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#d73036",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-error": {
            color: "#545454 !important",
          },
          "&.Mui-focused": {
            color: "#d73036 !important",
          },
        },
      },
    },
  },
});

theme.typography.body1 = {
  fontSize: "1rem",
  [theme.breakpoints.up("xxs")]: {
    fontSize: "0.875rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
  },
};

theme.typography.body2 = {
  fontSize: "0.875rem",
  [theme.breakpoints.up("xxs")]: {
    fontSize: "0.8rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "0.875rem",
  },
};

// Responsive headings (converted from 10px base → 16px base)
const headings = {
  h1: { xxs: "1.25rem", xs: "1.75rem", md: "3rem", lg: "3.75rem" },
  h2: {
    xxs: "1.125rem",
    xs: "1.5rem",
    md: "2.125rem",
    lg: "2.625rem",
  },
  h3: { sm: "1.125rem", md: "1.25rem", lg: "1.375rem" },
  h4: { sm: "1.125rem", md: "1.125rem", lg: "1.25rem" },
  h5: { sm: "1rem", md: "1.125rem", lg: "1.125rem" },
  h6: { sm: "0.631rem", md: "0.669rem", lg: "0.719rem" },
};

(
  Object.entries(headings) as [keyof typeof headings, Record<string, string>][]
).forEach(([key, sizes]) => {
  let baseFontSize = sizes.xxs || sizes.sm;
  theme.typography[key] = {
    fontWeight: 600,
    fontSize: baseFontSize,
    lineHeight: 1.3,
    ...(sizes.xs && { [theme.breakpoints.up("xs")]: { fontSize: sizes.xs } }),
    ...(sizes.sm && { [theme.breakpoints.up("sm")]: { fontSize: sizes.sm } }),
    ...(sizes.md && { [theme.breakpoints.up("md")]: { fontSize: sizes.md } }),
    ...(sizes.lg && { [theme.breakpoints.up("lg")]: { fontSize: sizes.lg } }),
  } as any;
});

export default theme;
