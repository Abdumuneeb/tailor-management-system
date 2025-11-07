import { Box, List, ListItem } from "@mui/material";
import Link from "next/link";
import { icons } from "@/lib/icons";
import styles from "@/styles/sidebar.module.scss";
function SideBar() {
  return (
    <Box>
      <List className={styles.sideBarList}>
        <ListItem>
          <Link href={"/dashboard"}>{icons.dashboard()} Dashboard</Link>
        </ListItem>
        <ListItem>
          <Link href={"/booking"}>{icons.cart()} Bookings</Link>
        </ListItem>
        <ListItem>
          <Link href={"/"}>{icons.dashboard()} Delivery</Link>
        </ListItem>
      </List>
    </Box>
  );
}

export default SideBar;
