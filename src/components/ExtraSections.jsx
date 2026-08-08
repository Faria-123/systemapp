const ExtraSections = () => {
    return (
        <div>

            {/* ================= WHY CHOOSE US ================= */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <p className="text-green-600 font-semibold mb-2">
                            WHY CHOOSE US
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Everything You Need to
                            <span className="text-green-600"> Play Better</span>
                        </h2>

                        <p className="text-gray-500 mt-4">
                            We make finding and booking sports facilities
                            simple, fast, and convenient.
                        </p>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
                            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-2xl mb-5">
                                ⚡
                            </div>

                            <h3 className="text-xl font-bold mb-3">
                                Easy Booking
                            </h3>

                            <p className="text-gray-500 leading-7">
                                Find your favorite sports facility and
                                reserve your preferred time slot in just
                                a few clicks.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
                            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-2xl mb-5">
                                🏆
                            </div>

                            <h3 className="text-xl font-bold mb-3">
                                Quality Facilities
                            </h3>

                            <p className="text-gray-500 leading-7">
                                Discover football turfs, badminton courts,
                                swimming pools, tennis courts, and more.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
                            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-2xl mb-5">
                                🔒
                            </div>

                            <h3 className="text-xl font-bold mb-3">
                                Secure & Reliable
                            </h3>

                            <p className="text-gray-500 leading-7">
                                Your bookings and account information are
                                securely managed so you can focus on your game.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* ================= HOW IT WORKS ================= */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <p className="text-green-600 font-semibold mb-2">
                            HOW IT WORKS
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold">
                            Book Your Facility in
                            <span className="text-green-600"> 3 Simple Steps</span>
                        </h2>

                        <p className="text-gray-500 mt-4">
                            Getting started is quick and easy.
                        </p>
                    </div>

                    {/* Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                        {/* Step 1 */}
                        <div className="text-center">
                            <div className="mx-auto w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold">
                                1
                            </div>

                            <h3 className="text-xl font-bold mt-6 mb-3">
                                Find a Facility
                            </h3>

                            <p className="text-gray-500 leading-7">
                                Browse through available sports facilities
                                and choose the one that fits your needs.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="text-center">
                            <div className="mx-auto w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold">
                                2
                            </div>

                            <h3 className="text-xl font-bold mt-6 mb-3">
                                Select Date & Time
                            </h3>

                            <p className="text-gray-500 leading-7">
                                Choose your preferred date and an available
                                time slot for your activity.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="text-center">
                            <div className="mx-auto w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold">
                                3
                            </div>

                            <h3 className="text-xl font-bold mt-6 mb-3">
                                Confirm Booking
                            </h3>

                            <p className="text-gray-500 leading-7">
                                Confirm your booking and get ready to enjoy
                                your favorite sport.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default ExtraSections;