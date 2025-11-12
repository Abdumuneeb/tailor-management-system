import UpcomingBookingsTable from "@/components/tables/UpcomingBookingsTable";
import Link from "next/link";

function page() {
  return (
    <div>
      <h2 className="innerPageTitle">
        Bookings
        <Link href={"/booking/new"}>Add New Booking</Link>
      </h2>
      <UpcomingBookingsTable />
    </div>
  );
}

export default page;
