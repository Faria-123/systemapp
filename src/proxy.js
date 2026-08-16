

import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export const proxy = async (request) => {
    const session = await auth.api.getSession({
        headers: request.headers,
    });

    if (!session) {
        return NextResponse.redirect(
            new URL("/signin", request.url)
        );
    }

    return NextResponse.next();
};

export const config = {
    matcher: [
        "/my-bookings",
        "/manage-facilities/:path*",
        "/allfacilities/:path/:path*",
        "/add-facility",

    ],
};