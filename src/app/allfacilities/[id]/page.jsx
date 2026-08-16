// // import React from 'react';
// // "use client"
// import { getdatabyId, postdata } from "@/app/lib/data";
// import Link from "next/link";
// // import Image from "next/image";
// import { ArrowRight, LocationArrow, StarFill } from "@gravity-ui/icons";
// import Image from "next/image";
// import { authClient } from "@/lib/auth-client";
// import { auth } from "@/lib/auth";
// import { headers } from "next/headers";
// import toast from "react-hot-toast";

// const page = async ({ params }) => {
//     const { id } = await params;
//     const d = await getdatabyId(id);
//     // const userData = await authClient.useSession();
//     // const user=userData
//     // const { data, error } = await authClient.getSession();
//     const userData = await auth.api.getSession({
//         headers: await headers(),
//     });
//     // console.log(userData?.user);
//     const user = userData?.user;
//     const handlebooking = async () => {
//         const bookingData = {
//             userName: user.name,
//             userEmail: user.email,
//             userId: user.id,
//             facilityId: d._id,
//             facilityName: d.name,
//             Timeslots: d.availableTimeSlots,
//             PriceperHour: d.pricePerHour,
//             BookingStatus: d.facilityType
//         }
//         const data = await postdata(bookingData);
//         toast.success("Congratulations! you have booked!!");
//     }
//     // console.log(data)
//     return (
//         <div
//             key={d._id}
//             className="container m-auto bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-xl rounded-2xl"
//         >
//             {/* Image & Badge Header */}
//             <div className="relative m-auto h-48 sm:h-52 overflow-hidden">
//                 <Image
//                     src={d.image}
//                     alt={d.facilityName || "Facility Image"}
//                     fill
//                     unoptimized={true} // Add this temporarily to test
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                     className="object-cover group-hover:scale-105 transition-transform duration-500"
//                 />

//                 {/* Category Chip */}
//                 <div className="absolute top-3 left-3 z-10">
//                     <span className="inline-flex items-center bg-slate-950/80 backdrop-blur-md text-green-400 border border-green-800/40 text-xs font-medium px-3 py-1 rounded-full">
//                         {d.facilityType}
//                     </span>
//                 </div>

//                 {/* Rating Badge */}
//                 <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-800 text-xs font-semibold text-amber-400">
//                     <StarFill size={12} className="text-amber-400" />
//                     <span>{d.rating || "4.8"}</span>
//                 </div>
//             </div>

//             {/* Card Content Body */}
//             <div className="p-5 flex flex-col gap-3 flex-1">
//                 <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors line-clamp-1">
//                     {d.facilityName}
//                 </h3>

//                 {/* Location */}
//                 <div className="flex items-center gap-2 text-slate-400 text-sm">
//                     <LocationArrow size={16} className="text-slate-500 shrink-0" />
//                     <span className="line-clamp-1">{d.location}</span>
//                 </div>

//                 {/* Price */}
//                 <div className="pt-2 flex items-baseline gap-1 border-t border-slate-800/60 mt-auto">
//                     <span className="text-xl font-extrabold text-green-400">
//                         ${d.pricePerHour}
//                     </span>
//                     <span className="text-xs text-slate-500 font-normal">/ hour</span>
//                 </div>
//                 <div className="flex justify-between">
//                     <div className="flex flex-col">
//                         <p className=" text-gray-400 text-[0.8rem]">capacity: {d.capacity} </p>
//                         <p className=" text-gray-400 text-[0.8rem]">Ower Email: {d.ownerEmail}</p>
//                     </div>
//                     <div className="flex flex-col">
//                         {
//                             d["availableTimeSlots"].map(a => <div key={d["availableTimeSlots"].indexOf(a)} className="text-gray-200 text-[0.80rem]">
//                                 {a}
//                             </div>)
//                         }
//                     </div>
//                 </div>

//             </div>

//             {/* Action Link Button */}
//             <div className="px-5 pb-5 pt-0">
//                 <div className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-green-600/10 transition-all text-sm">
//                     <button onClick={handlebooking}><span>Book Now</span></button>
//                     <ArrowRight size={18} /></div>

//             </div>
//         </div>
//     );
// };

// export default page;

import { getdatabyId } from "@/app/lib/data";
import { ArrowRight, LocationArrow, StarFill } from "@gravity-ui/icons";
import Image from "next/image";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import BookButton from "./BookButton";

const Page = async ({ params }) => {
    const { id } = await params;
    const { token } = await auth.api.getToken({
        headers: await headers(),
    });
    const d = await getdatabyId(id, token);

    const userData = await auth.api.getSession({
        headers: await headers(),
    });

    const user = userData?.user;

    // console.log(token);


    return (
        <div className="container m-auto bg-slate-900 border border-slate-800 shadow-xl rounded-2xl">

            {/* Image */}
            <div className="relative h-48 sm:h-52 overflow-hidden">

                <Image
                    src={d?.image}
                    alt={d?.facilityName || "Facility Image"}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                />

                {/* Category */}
                <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center bg-slate-950/80 text-green-400 border border-green-800/40 text-xs font-medium px-3 py-1 rounded-full">
                        {d.facilityType}
                    </span>
                </div>

                {/* Rating */}
                <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-slate-950/80 px-2.5 py-1 rounded-full border border-slate-800 text-xs font-semibold text-amber-400">

                    <StarFill size={12} />

                    <span>
                        4.8
                    </span>

                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-3">

                <h3 className="text-lg font-bold text-white">
                    {d.facilityName}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-2 text-slate-400 text-sm">

                    <LocationArrow
                        size={16}
                        className="text-slate-500"
                    />

                    <span>
                        {d.location}
                    </span>

                </div>

                {/* Price */}
                <div className="pt-2 flex items-baseline gap-1 border-t border-slate-800/60">

                    <span className="text-xl font-extrabold text-green-400">
                        ${d.pricePerHour}
                    </span>

                    <span className="text-xs text-slate-500">
                        / hour
                    </span>

                </div>

                {/* Details */}
                <div className="flex justify-between">

                    <div className="flex flex-col">

                        <p className="text-gray-400 text-[0.8rem]">
                            Capacity: {d.capacity}
                        </p>

                        <p className="text-gray-400 text-[0.8rem]">
                            Owner Email: {d.ownerEmail}
                        </p>

                    </div>

                    {/* <div className="flex flex-col">

                        {d.availableTimeSlots?.map((slot) => (
                            <div
                                key={slot}
                                className="text-gray-200 text-[0.80rem]"
                            >
                                {slot}
                            </div>
                        ))} */}

                    <div className="flex flex-wrap gap-2">
                        {Array.isArray(d.availableTimeSlots) &&
                            d.availableTimeSlots.map((slot) => (
                                <span
                                    key={slot}
                                    className="text-sm text-gray-200 bg-slate-800 px-3 py-2 rounded-lg"
                                >
                                    {slot}
                                </span>
                            ))}
                    </div>

                    {/* </div> */}

                </div>

            </div>


            <div className="px-5 pb-5">

                <BookButton
                    user={user}
                    facility={d}
                />

            </div>

        </div >
    );
};

export default Page;