"use client";

import { Calendar, ChevronDown, ArrowRight } from "@gravity-ui/icons";
import { DateField, Description, Label } from "@heroui/react";
import { postdata } from "@/app/lib/data";
import toast from "react-hot-toast";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

const BookButton = ({ user, facility }) => {
    const [loading, setLoading] = useState(false);
    const [bookingDate, setBookingDate] = useState(null);
    const [hours, setHours] = useState("");


    const totalPrice =
        hours && Number(hours) > 0
            ? Number(hours) * Number(facility.pricePerHour)
            : 0;

    const handleBooking = async () => {
        if (!user) {
            toast.error("Please login first!");
            return;
        }

        if (!bookingDate) {
            toast.error("Please select a booking date!");
            return;
        }

        if (!hours || Number(hours) <= 0) {
            toast.error("Please enter valid booking hours!");
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

                pricePerHour: Number(facility.pricePerHour),


                hours: Number(hours),
                totalPrice: totalPrice,

                description: facility.description,

                bookingStatus: "pending",

                // Booking date
                bookingdate: bookingDate.toString(),
            };

            console.log("Booking Data:", bookingData);
            const { token } = await authClient.token();
            const result = await postdata(bookingData, token);

            console.log(result);

            if (!result?.success) {
                toast.error(result?.message || "Booking failed!");
                return;
            }

            toast.success("Congratulations! You have booked!");

            // Optional: reset
            setHours("");
            setBookingDate(null);

        } catch (error) {
            console.error(error);
            toast.error("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-4">

            {/* Date */}
            <DateField
                className="w-full"
                name="date"
                onChange={setBookingDate}
            >
                <Label>Date</Label>

                <DateField.Group>
                    <DateField.Prefix>
                        <Calendar className="size-4 text-muted" />
                    </DateField.Prefix>

                    <DateField.Input>
                        {(segment) => (
                            <DateField.Segment segment={segment} />
                        )}
                    </DateField.Input>

                    <DateField.Suffix>
                        <ChevronDown className="size-4 text-muted" />
                    </DateField.Suffix>
                </DateField.Group>

                <Description>Enter a date</Description>
            </DateField>

            {/* Hours */}
            <div>
                <label className="block mb-1 font-medium text-sm text-white">
                    Booking Hours
                </label>

                <input
                    type="number"
                    min="1"
                    max="24"
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    placeholder="Enter hours"
                    className="w-full border rounded-xl px-4 py-2.5 outline-none text-gray-200"
                />
            </div>

            {/* Price */}
            <div className="flex justify-between items-center bg-gray-100 rounded-xl p-3">
                <span className="font-medium">
                    Total Price
                </span>

                <span className="font-bold text-green-600">
                    $ {totalPrice}
                </span>
            </div>

            {/* Book Button */}
            <button
                onClick={handleBooking}
                disabled={loading}
                type="button"
                className="w-full bg-green-600 hover:bg-green-500 disabled:bg-gray-600 text-white font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-green-600/10 transition-all text-sm"
            >
                <span>
                    {loading ? "Booking..." : "Book Now"}
                </span>

                {!loading && <ArrowRight size={18} />}
            </button>
        </div>
    );
};

export default BookButton;