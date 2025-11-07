"use client";

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
import styles from "@/styles/tables/upcomingBookingsTable.module.scss";

export default function MeasurementTable() {
  const router = useRouter();
  const rows = [
    {
      id: 1,
      code: "2181",
      description: "Salwar Kameez",
      qty: 1,
      unit: "meter",
      rate: "",
      amount: 15500,
    },
    {
      id: 2,
      code: "2182",
      description: "KAPRA",
      qty: 4,
      unit: "Meter",
      rate: 900,
      amount: 8500,
    },
  ];

  const handleEdit = (id: number) => {
    router.push(`/booking/new/${id}`);
  };

  return (
    <Box className={styles.historyDashboardTable}>
      <TableContainer className={styles.tableContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>S#</TableCell>
              <TableCell>Code</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Qty</TableCell>
              <TableCell>Unit</TableCell>
              <TableCell>Rate</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.code}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.qty}</TableCell>
                <TableCell>{row.unit}</TableCell>
                <TableCell>{row.rate}</TableCell>
                <TableCell>{row.amount.toFixed(2)}</TableCell>
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
      </TableContainer>
    </Box>
  );
}
