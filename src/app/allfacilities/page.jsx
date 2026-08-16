

// import { getdata } from "../lib/data";
// // import { getdata } from "@/app/lib/data";
// import Link from "next/link";
// // import Image from "next/image";
// import { ArrowRight, LocationArrow, StarFill } from "@gravity-ui/icons";
// import Image from "next/image";
// const page = async () => {
//     const data = await getdata('allsports');
//     return (
//         <div>

//             {

//                 <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
//                         {data?.map((d) => (
//                             <div
//                                 key={d._id}
//                                 className="w-full max-w-sm bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-xl rounded-2xl overflow-hidden group flex flex-col justify-between"
//                             >
//                                 {/* Image & Badge Header */}
//                                 <div className="relative w-full h-48 sm:h-52 overflow-hidden">
//                                     <Image
//                                         src={d.image}
//                                         alt={d.facilityName || "Facility Image"}
//                                         fill
//                                         unoptimized={true} // Add this temporarily to test
//                                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                                         className="object-cover group-hover:scale-105 transition-transform duration-500"
//                                     />

//                                     {/* Category Chip */}
//                                     <div className="absolute top-3 left-3 z-10">
//                                         <span className="inline-flex items-center bg-slate-950/80 backdrop-blur-md text-green-400 border border-green-800/40 text-xs font-medium px-3 py-1 rounded-full">
//                                             {d.facilityType}
//                                         </span>
//                                     </div>

//                                     {/* Rating Badge */}
//                                     <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-800 text-xs font-semibold text-amber-400">
//                                         <StarFill size={12} className="text-amber-400" />
//                                         <span>{d.rating || "4.8"}</span>
//                                     </div>
//                                 </div>

//                                 {/* Card Content Body */}
//                                 <div className="p-5 flex flex-col gap-3 flex-1">
//                                     <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors line-clamp-1">
//                                         {d.facilityName}
//                                     </h3>

//                                     {/* Location */}
//                                     <div className="flex items-center gap-2 text-slate-400 text-sm">
//                                         <LocationArrow size={16} className="text-slate-500 shrink-0" />
//                                         <span className="line-clamp-1">{d.location}</span>
//                                     </div>

//                                     {/* Price */}
//                                     <div className="pt-2 flex items-baseline gap-1 border-t border-slate-800/60 mt-auto">
//                                         <span className="text-xl font-extrabold text-green-400">
//                                             ${d.pricePerHour}
//                                         </span>
//                                         <span className="text-xs text-slate-500 font-normal">/ hour</span>
//                                     </div>


//                                 </div>

//                                 {/* Action Link Button */}
//                                 <div className="flex justify-between">
//                                     <div className="px-5 pb-5 pt-0">
//                                         <Link
//                                             href={`/allfacilities/${d._id}`}
//                                             className="w-full bg-gradient-to-r from-emerald-600 via-green-500 to-lime-400 hover:from-emerald-500 hover:via-green-400 hover:to-lime-300 text-slate-950 font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 hover:shadow-green-500/30 transition-all duration-300 text-sm"
//                                         >
//                                             <span>Details</span>
//                                             <ArrowRight size={18} />
//                                         </Link>
//                                     </div>
//                                     {/* <div className="px-5 pb-5 pt-0">
//                                         <Link
//                                             href={``}
//                                             className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-green-600/10 transition-all text-sm"
//                                         >
//                                             <span>Book Now!</span>

//                                         </Link>
//                                     </div> */}
//                                 </div>

//                             </div>
//                         ))}
//                     </div>
//                 </section>

//             }
//         </div>
//     );
// };

// export default page;



import { getdata } from "../lib/data";
import Link from "next/link";
import {
    ArrowRight,
    LocationArrow,
    StarFill,
} from "@gravity-ui/icons";
import Image from "next/image";

const Page = async ({ searchParams }) => {

    const params = await searchParams;

    const search = params?.search || "";
    const sportType = params?.sportType || "";

    const data = await getdata(
        "allsports",
        search,
        sportType
    );

    return (
        <div className="min-h-screen">

            {/* ========================= */}
            {/* SEARCH + FILTER */}
            {/* ========================= */}

            <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-10">

                <form
                    method="GET"
                    className="flex flex-col md:flex-row gap-4"
                >

                    {/* Search */}
                    <input
                        type="text"
                        name="search"
                        placeholder="Search facility by name..."
                        defaultValue={search}
                        className="
                            flex-1
                            px-4
                            py-3
                            rounded-xl
                            bg-slate-900
                            border
                            border-slate-700
                            text-white
                            placeholder:text-slate-500
                            outline-none
                            focus:border-green-500
                        "
                    />

                    {/* Sport Filter */}
                    <select
                        name="sportType"
                        defaultValue={sportType}
                        className="
                            px-4
                            py-3
                            rounded-xl
                            bg-slate-900
                            border
                            border-slate-700
                            text-white
                            outline-none
                            focus:border-green-500
                        "
                    >
                        <option value="">
                            All Sports
                        </option>

                        <option value="Badminton">
                            Badminton
                        </option>

                        <option value="Football">
                            Football
                        </option>

                        <option value="Tennis">
                            Tennis
                        </option>

                        <option value="Swimming">
                            Swimming
                        </option>

                        <option value="Cricket">
                            Cricket
                        </option>

                        <option value="Futsal">
                            Futsal
                        </option>

                        <option value="Basketball">
                            Basketball
                        </option>

                        <option value="Gym">
                            Gym
                        </option>
                    </select>

                    {/* Search Button */}
                    <button
                        type="submit"
                        className="
                            px-7
                            py-3
                            rounded-xl
                            bg-green-600
                            hover:bg-green-500
                            text-white
                            font-semibold
                            transition
                        "
                    >
                        Search
                    </button>

                    {/* Clear */}
                    {(search || sportType) && (
                        <Link
                            href="/allfacilities"
                            className="
                                px-7
                                py-3
                                rounded-xl
                                bg-slate-700
                                hover:bg-slate-600
                                text-white
                                font-semibold
                                flex
                                items-center
                                justify-center
                            "
                        >
                            Clear
                        </Link>
                    )}

                </form>

            </section>


            {/* ========================= */}
            {/* RESULT INFORMATION */}
            {/* ========================= */}

            <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">

                <div className="flex flex-col sm:flex-row justify-between gap-2">

                    <h2 className="text-xl font-bold text-white">
                        All Facilities
                    </h2>

                    <p className="text-slate-400 text-sm">
                        {data?.length || 0} facilities found
                    </p>

                </div>

                {(search || sportType) && (
                    <p className="text-slate-400 text-sm mt-2">

                        {search && (
                            <>
                                Search:{" "}
                                <span className="text-green-400">
                                    {search}
                                </span>
                            </>
                        )}

                        {search && sportType && " • "}

                        {sportType && (
                            <>
                                Sport:{" "}
                                <span className="text-green-400">
                                    {sportType}
                                </span>
                            </>
                        )}

                    </p>
                )}

            </section>


            {/* ========================= */}
            {/* FACILITY CARDS */}
            {/* ========================= */}

            <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

                {data?.length === 0 ? (

                    <div className="
                        text-center
                        py-20
                        text-slate-400
                    ">
                        <h2 className="text-2xl font-bold text-white">
                            No facilities found
                        </h2>

                        <p className="mt-2">
                            Try another facility name or sport type.
                        </p>
                    </div>

                ) : (

                    <div className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-3
                        gap-6
                        justify-items-center
                    ">

                        {data.map((d) => (

                            <div
                                key={d._id}
                                className="
                                    w-full
                                    max-w-sm
                                    bg-slate-900
                                    border
                                    border-slate-800
                                    hover:border-slate-700
                                    transition-all
                                    duration-300
                                    shadow-xl
                                    rounded-2xl
                                    overflow-hidden
                                    group
                                    flex
                                    flex-col
                                    justify-between
                                "
                            >

                                {/* ========================= */}
                                {/* IMAGE */}
                                {/* ========================= */}

                                <div className="
                                    relative
                                    w-full
                                    h-48
                                    sm:h-52
                                    overflow-hidden
                                ">

                                    <Image
                                        src={d.image}
                                        alt={
                                            d.facilityName ||
                                            "Facility Image"
                                        }
                                        fill
                                        unoptimized
                                        sizes="
                                            (max-width: 768px) 100vw,
                                            (max-width: 1200px) 50vw,
                                            33vw
                                        "
                                        className="
                                            object-cover
                                            group-hover:scale-105
                                            transition-transform
                                            duration-500
                                        "
                                    />

                                    {/* Sport Type */}
                                    <div className="
                                        absolute
                                        top-3
                                        left-3
                                        z-10
                                    ">

                                        <span className="
                                            inline-flex
                                            items-center
                                            bg-slate-950/80
                                            backdrop-blur-md
                                            text-green-400
                                            border
                                            border-green-800/40
                                            text-xs
                                            font-medium
                                            px-3
                                            py-1
                                            rounded-full
                                        ">
                                            {d.facilityType}
                                        </span>

                                    </div>


                                    {/* Rating */}
                                    <div className="
                                        absolute
                                        top-3
                                        right-3
                                        z-10
                                        flex
                                        items-center
                                        gap-1
                                        bg-slate-950/80
                                        backdrop-blur-md
                                        px-2.5
                                        py-1
                                        rounded-full
                                        border
                                        border-slate-800
                                        text-xs
                                        font-semibold
                                        text-amber-400
                                    ">

                                        <StarFill size={12} />

                                        <span>
                                            {d.rating || "4.8"}
                                        </span>

                                    </div>

                                </div>


                                {/* ========================= */}
                                {/* CARD BODY */}
                                {/* ========================= */}

                                <div className="
                                    p-5
                                    flex
                                    flex-col
                                    gap-3
                                    flex-1
                                ">

                                    {/* Name */}
                                    <h3 className="
                                        text-lg
                                        font-bold
                                        text-white
                                        group-hover:text-green-400
                                        transition-colors
                                        line-clamp-1
                                    ">
                                        {d.facilityName}
                                    </h3>


                                    {/* Location */}
                                    <div className="
                                        flex
                                        items-center
                                        gap-2
                                        text-slate-400
                                        text-sm
                                    ">

                                        <LocationArrow
                                            size={16}
                                            className="
                                                text-slate-500
                                                shrink-0
                                            "
                                        />

                                        <span className="line-clamp-1">
                                            {d.location}
                                        </span>

                                    </div>


                                    {/* Price */}
                                    <div className="
                                        pt-2
                                        flex
                                        items-baseline
                                        gap-1
                                        border-t
                                        border-slate-800/60
                                        mt-auto
                                    ">

                                        <span className="
                                            text-xl
                                            font-extrabold
                                            text-green-400
                                        ">
                                            {d.pricePerHour}
                                        </span>

                                        <span className="
                                            text-xs
                                            text-slate-500
                                        ">
                                            / hour
                                        </span>

                                    </div>

                                </div>


                                {/* ========================= */}
                                {/* DETAILS BUTTON */}
                                {/* ========================= */}

                                <div className="
                                    px-5
                                    pb-5
                                    pt-0
                                ">

                                    <Link
                                        href={`/allfacilities/${d._id}`}
                                        className="
                                            w-full
                                            bg-gradient-to-r
                                            from-emerald-600
                                            via-green-500
                                            to-lime-400
                                            hover:from-emerald-500
                                            hover:via-green-400
                                            hover:to-lime-300
                                            text-slate-950
                                            font-bold
                                            py-2.5
                                            px-4
                                            rounded-xl
                                            flex
                                            items-center
                                            justify-center
                                            gap-2
                                            shadow-lg
                                            shadow-green-500/20
                                            hover:shadow-green-500/30
                                            transition-all
                                            duration-300
                                            text-sm
                                        "
                                    >

                                        <span>
                                            Details
                                        </span>

                                        <ArrowRight size={18} />

                                    </Link>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </section>

        </div>
    );
};

export default Page;