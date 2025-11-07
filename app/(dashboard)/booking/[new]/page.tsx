import NewBookingForm from "@/components/forms/NewBookingForm";
import Link from "next/link";

function page() {
  return (
    <>
      <h3 className="innerPageTitle">
        Booking Detail
        <Link href={"/booking/new"}>Measurements / ناپ</Link>
      </h3>
      <NewBookingForm />
    </>
  );
}

export default page;
