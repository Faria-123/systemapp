// "use client"
import { getdatato } from "@/app/lib/data";
import Link from "next/link";
// import Image from "next/image";
import { ArrowRight, LocationArrow, StarFill } from "@gravity-ui/icons";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const Features = async () => {


    // const token = tokenResponse?.token;
    const data = await getdatato('sports');
    // console.log(token);
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {data?.map((d) => (
                    <div
                        key={d._id}
                        className="w-full max-w-sm bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-xl rounded-2xl overflow-hidden group flex flex-col justify-between"
                    >
                        {/* Image & Badge Header */}
                        <div className="relative w-full h-48 sm:h-52 overflow-hidden">
                            <Image
                                src={d.image}
                                alt={d.facilityName || "Facility Image"}
                                fill
                                unoptimized={true} // Add this temporarily to test
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />

                            {/* Category Chip */}
                            <div className="absolute top-3 left-3 z-10">
                                <span className="inline-flex items-center bg-slate-950/80 backdrop-blur-md text-green-400 border border-green-800/40 text-xs font-medium px-3 py-1 rounded-full">
                                    {d.facilityType}
                                </span>
                            </div>

                            {/* Rating Badge */}
                            <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-800 text-xs font-semibold text-amber-400">
                                <StarFill size={12} className="text-amber-400" />
                                <span>{d.rating || "4.8"}</span>
                            </div>
                        </div>

                        {/* Card Content Body */}
                        <div className="p-5 flex flex-col gap-4 flex-1">
                            <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors line-clamp-1">
                                {d.facilityName}
                            </h3>

                            {/* Location */}

                        </div>

                        {/* Action Link Button */}
                        <div className="px-5 pb-5 pt-0">
                            <Link
                                href={`/allfacilities/${d._id}`}
                                className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-green-600/10 transition-all text-sm"
                            >
                                <span>Book Now</span>
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;