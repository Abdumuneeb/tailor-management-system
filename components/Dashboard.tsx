"use client";

import { Box } from "@mui/material";
import UpcomingBookingsTable from "@/components/tables/UpcomingBookingsTable";
import styles from "@/styles/dashboardLayout.module.scss";
import Cards from "@/components/Cards";

function Dashboard() {
  return (
    <Box>
      <Cards />
      <Box mt={3}>
        <div>
          <h2>Upcoming Bookings</h2>
        </div>
        <UpcomingBookingsTable pagination={true} limit={8} />
      </Box>
    </Box>
  );
}

export default Dashboard;
