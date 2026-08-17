// // import React from 'react';

// const page = () => {
//     return (
//         <div>
//             from manage-facilirty
//         </div>
//     );
// };

// export default page;
import DeleteButton from "@/components/DeleteButton";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

const ManageFacilities = async () => {

    // Get logged-in user
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user;

    // If not logged in
    if (!user) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-white">
                        Please login first
                    </h1>

                    <Link
                        href="/login"
                        className="inline-block mt-4 bg-green-600 text-white px-5 py-2 rounded-lg"
                    >
                        Login
                    </Link>
                </div>
            </div>
        );
    }
    const tokenData = await auth.api.getToken({
        headers: await headers(),
    });

    const token = tokenData?.token;
    // Get facilities owned by this user
    const response = await fetch(
        `http://localhost:8000/myfacilities/${user.email}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            cache: "no-store",
        }
    );

    const facilities = await response.json();

    return (
        <div className="max-w-6xl mx-auto p-6">

            <h1 className="text-3xl font-bold text-white mb-8">
                Manage My Facilities
            </h1>

            {facilities.length === 0 ? (
                <div className="text-center py-20">
                    <p className="text-gray-400">
                        You haven't added any facilities yet.
                    </p>

                    <Link
                        href="/add-facility"
                        className="inline-block mt-5 bg-green-600 text-white px-5 py-2 rounded-lg"
                    >
                        Add Facility
                    </Link>
                </div>
            ) : (

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {facilities.map((facility) => (

                        <div
                            key={facility._id}
                            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden"
                        >

                            <img
                                src={facility.image}
                                alt={facility.facilityName}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-5">

                                <h2 className="text-xl font-bold text-white">
                                    {facility.facilityName}
                                </h2>

                                <p className="text-gray-400 mt-1">
                                    {facility.facilityType}
                                </p>

                                <p className="text-gray-400 mt-2">
                                    {facility.location}
                                </p>

                                <p className="text-green-400 font-bold mt-3">
                                    ${facility.pricePerHour} / hour
                                </p>

                                <div className="flex gap-3 mt-5">

                                    {/* UPDATE */}
                                    <Link
                                        href={`/manage-facilities/update/${facility._id}`}
                                        className="flex-1 text-center bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg"
                                    >
                                        Update
                                    </Link>

                                    {/* DELETE */}
                                    <DeleteButton
                                        id={facility._id}
                                    />

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
};

export default ManageFacilities;