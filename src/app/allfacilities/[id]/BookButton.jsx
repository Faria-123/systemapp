"use client";

import { postdata } from "@/app/lib/data";
import { ArrowRight } from "@gravity-ui/icons";
import toast from "react-hot-toast";
import { useState } from "react";
import { Description } from "@heroui/react";

const BookButton = ({ user, facility }) => {
    const [loading, setLoading] = useState(false);

    const handleBooking = async () => {
        if (!user) {
            toast.error("Please login first!");
            return;
        }

        try {
            setLoading(true);

            const bookingData = {
                userName: user.name,
                userEmail: user.email,
                userId: user.id,

                facilityId: facility._id,
                facilityName: facility.facilityName,

                timeSlots: facility.availableTimeSlots,

                pricePerHour: facility.pricePerHour,
                Description: facility.description,
                bookingStatus: "pending",
            };

            const result = await postdata(bookingData);

            console.log(result);

            if (!result?.success) {
                toast.error(result?.message || "Booking failed!");
                return;
            }

            toast.success("Congratulations! You have booked!");

        } catch (error) {
            console.error(error);
            toast.error("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleBooking}
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-500 disabled:bg-gray-600 text-white font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-green-600/10 transition-all text-sm"
        >
            <span>
                {loading ? "Booking..." : "Book Now"}
            </span>

            {!loading && <ArrowRight size={18} />}
        </button>
    );
};

export default BookButton;