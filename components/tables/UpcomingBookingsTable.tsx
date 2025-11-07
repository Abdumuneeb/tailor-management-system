"use client";

import { useState } from "react";
import { useRouter } from "nextjs-toploader/app";
import { icons } from "@/lib/icons";
import TableContainer from "@mui/material/TableContainer";
import Typography from "@mui/material/Typography";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import Box from "@mui/material/Box";
import TablePagination from "@mui/material/TablePagination";
import styles from "@/styles/tables/upcomingBookingsTable.module.scss";

type BookingItem = {
  id: number;
  date: string;
  refNo: string;
  code: string;
  customer: string;
  phone: string;
  total: string;
  cash: string;
  balance: string;
};

type UpcomingBookingsTableProps = {
  pagination?: boolean;
  limit?: number;
};

// 🔹 Generate dummy bookings
const generateBookings = (): BookingItem[] => {
  const data: BookingItem[] = [];
  for (let i = 1; i <= 25; i++) {
    data.push({
      id: i,
      date: `2025-10-${(i % 30) + 1} 12:00:00`,
      refNo: `${9000 + i}`,
      code: `CODE-${i}`,
      customer: `Customer ${i}`,
      phone: `03${Math.floor(100000000 + Math.random() * 900000000)}`,
      total: `${(Math.random() * 50000).toFixed(2)}`,
      cash: `${(Math.random() * 50000).toFixed(2)}`,
      balance: `${(Math.random() * 50000).toFixed(2)}`,
    });
  }
  return data;
};

export default function UpcomingBookingsTable({
  pagination = true,
  limit,
}: UpcomingBookingsTableProps) {
  const [bookings] = useState<BookingItem[]>(generateBookings());
  const router = useRouter();

  // 🔹 Apply limit if provided
  const limitedBookings = limit ? bookings.slice(0, limit) : bookings;

  // 🔹 Pagination State
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEdit = (id: number) => {
    router.push(`/booking/new/${id}`);
  };

  // 🔹 Apply pagination logic
  const paginatedBookings =
    pagination && !limit
      ? limitedBookings.slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage
        )
      : limitedBookings;

  const showPagination = pagination && limitedBookings.length > 10 && !limit;

  return (
    <Box className={styles.historyDashboardTable}>
      <TableContainer className={styles.tableContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Refno</TableCell>
              <TableCell>Code</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Cash</TableCell>
              <TableCell>Balance</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedBookings.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.refNo}</TableCell>
                <TableCell>{row.code}</TableCell>
                <TableCell>{row.customer}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.total}</TableCell>
                <TableCell>{row.cash}</TableCell>
                <TableCell>{row.balance}</TableCell>
                <TableCell>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    startIcon={icons.edit()}
                    onClick={() => handleEdit(row.id)}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* 🔹 Show pagination only if needed */}
        {showPagination && (
          <TablePagination
            component="div"
            count={limitedBookings.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        )}
      </TableContainer>
    </Box>
  );
}
