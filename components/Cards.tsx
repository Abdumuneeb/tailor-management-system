import { Box } from "@mui/material";
import styles from "@/styles/cards.module.scss";
import Link from "next/link";

function Cards() {
  return (
    <Box className={styles.cardsContainer}>
      <Box>
        <Link href={"/"} className={styles.card}>
          <img src="/booking-icon.png" alt="booking icon" />
          <span>Book Now</span>
        </Link>
      </Box>
    </Box>
  );
}

export default Cards;
