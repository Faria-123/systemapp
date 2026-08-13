// import React from 'react';

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getbook } from "../lib/data";
import { Card, Button, Chip } from "@heroui/react";
import { CalendarDays, Clock, DollarSign } from "lucide-react";
import { CancelMod } from "@/components/CancelMod";
const page = async () => {
    const userData = await auth.api.getSession({
        headers: await headers(),
    });
    const data = userData?.user;
    // console.log(data.id);
    const d = await getbook(data.id);
    console.log(d);
    return (
        <div >
            {
                d.map((booking) =>


                    <Card key={booking._id} className="bg-slate-900 border border-slate-800 text-white p-5 w-full">

                        {/* Header */}
                        <div className="mb-5">
                            <p className="text-sm text-green-400 font-medium">
                                Your Booking
                            </p>

                            <h2 className="text-xl font-bold mt-1">
                                {booking.facilityName}
                            </h2>
                        </div>

                        {/* Booking Date */}
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2 text-gray-400">
                                <CalendarDays
                                    size={18}
                                    className="text-green-400"
                                />
                                <span>Booking Date</span>
                            </div>

                            <span className="text-gray-200">
                                {booking.bookingDate || "Not selected"}
                            </span>
                        </div>

                        {/* Time Slot */}
                        <div className="mb-4">
                            <div className="flex items-center gap-2 text-gray-400 mb-2">
                                <Clock
                                    size={18}
                                    className="text-blue-400"
                                />
                                <span>Time Slot</span>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {booking.timeSlots?.map((slot) => (
                                    <Chip
                                        key={slot}
                                        size="sm"
                                        variant="flat"
                                        color="primary"
                                        className="text-amber-800"
                                    >
                                        {slot}
                                    </Chip>
                                ))}
                            </div>
                        </div>

                        {/* Price */}
                        <div className="flex justify-between items-center border-t border-slate-800 pt-4 mb-4">
                            <div className="flex items-center gap-2 text-gray-400">
                                <DollarSign
                                    size={18}
                                    className="text-green-400"
                                />
                                <span>Price</span>
                            </div>

                            <span className="text-xl font-bold text-green-400">
                                ৳{booking.pricePerHour}
                                <span className="text-xs text-gray-500 ml-1">
                                    / hour
                                </span>
                            </span>
                        </div>

                        {/* Status */}
                        <div className="flex justify-between items-center mb-5">
                            <span className="text-gray-400">
                                Status
                            </span>

                            <Chip
                                size="sm"
                                variant="flat"
                                color={
                                    booking.bookingStatus === "confirmed"
                                        ? "success"
                                        : booking.bookingStatus === "cancelled"
                                            ? "danger"
                                            : "warning"
                                }
                            >
                                {booking.bookingStatus}
                            </Chip>
                        </div>

                        {/* Cancel */}
                        {/* <Button variant="danger" className='p-5'>Cancel Booking</Button> */}
                        <CancelMod booking={booking} />

                    </Card>


                )
            }
        </div>
    );
};

export default page;