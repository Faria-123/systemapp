import Link from "next/link";
import {
    Envelope,
    // Phone,
    Handset,
    LocationArrow,
} from "@gravity-ui/icons";

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white">
            <div className="max-w-7xl mx-auto px-6 py-14">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold">
                            Sport<span className="text-green-500">Book</span>
                        </h2>

                        <p className="mt-4 text-gray-400 leading-7 max-w-sm">
                            Find and book your favorite sports facilities easily.
                            Play more, stay active, and enjoy your game.
                        </p>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-lg font-semibold mb-5">
                            Contact Information
                        </h3>

                        <div className="space-y-4 text-gray-400">

                            <div className="flex items-center gap-3">
                                <Envelope className="w-5 h-5 text-green-500" />
                                <span>support@sportbook.com</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Handset className="w-5 h-5 text-green-500" />
                                <span>+880 1234-567890</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <LocationArrow className="w-5 h-5 text-green-500" />
                                <span>Dhaka, Bangladesh</span>
                            </div>

                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-5">
                            Follow Us
                        </h3>

                        <div className="flex gap-4">

                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition"
                            >
                                f
                            </Link>

                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition"
                            >
                                𝕏
                            </Link>

                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition"
                            >
                                in
                            </Link>

                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition"
                            >
                                ▶
                            </Link>

                        </div>
                    </div>

                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-10 pt-6">
                    <p className="text-sm text-gray-500 text-center">
                        © {new Date().getFullYear()} SportBook. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;