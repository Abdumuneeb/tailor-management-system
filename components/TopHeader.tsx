"use client";

import { useRouter } from "nextjs-toploader/app";
import { usePathname } from "next/navigation";
import { icons } from "@/lib/icons";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import styles from "@/styles/dashboardLayout.module.scss";

type TopHeaderProps = {
  customTitle?: string;
};

function TopHeader({ customTitle }: TopHeaderProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogOut = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/login");
  };

  // Derive title from the active route
  const getTitleFromRoute = () => {
    if (customTitle) return customTitle;

    if (pathname === "/dashboard") return "Dashboard";
    if (pathname === "/booking") return "Bookings";
    if (pathname.startsWith("/booking/new")) return "New Booking";
    if (pathname === "/belivery") return "Delivery";

    return "Dashboard";
  };

  const pageTitle = getTitleFromRoute();

  return (
    <Box className={styles.topHeaderContainer}>
      <Box>
        <Typography variant="h3" fontWeight={500}>
          {pageTitle}
        </Typography>
      </Box>

      <Box className={styles.searchBox}>
        <Box className={styles.searchField}>
          <TextField
            fullWidth
            label="Search"
            id="fullWidth"
            className={styles.formInputFld}
          />
          <Box className={styles.searchIcon}>{icons.search()}</Box>
        </Box>
      </Box>

      <Box>
        <Typography
          variant="h5"
          className={styles.logOut}
          fontWeight={500}
          onClick={handleLogOut}
        >
          {icons.logout()} Logout
        </Typography>
      </Box>
    </Box>
  );
}

export default TopHeader;
