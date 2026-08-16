# Sports Facility Booking Platform

> **Book Your Game. Own The Turf.**

## Project Name

**Sports Facility Booking Platform**

---

## Purpose

The Sports Facility Booking Platform is a full-stack sports reservation system built using the **MERN Stack** and **Better Auth Authentication**.

The platform allows users to explore available sports facilities such as football turfs, badminton courts, swimming pools, tennis courts, cricket grounds, basketball courts, and other recreational facilities.

Users can select a facility, choose a specific date and available time slot, and make a booking.

The system also allows authenticated users to add and manage their own sports facilities, while facility owners can update or remove facilities they own.

---

## Live URL

**Live Website:**  
YOUR_LIVE_URL_HERE

Example:

`https://your-project.vercel.app`

---

## Features

### Browse Sports Facilities

- View all available sports facilities.
- View facility images, names, locations, prices, and sport types.
- View detailed information about individual facilities.

### Search & Filter

- Search facilities by facility name.
- Filter facilities by sport type.
- Search and filter facilities together.
- MongoDB `$regex` is used for facility name searching.
- MongoDB `$in` is used for sport type filtering.

### Authentication

- User registration and login.
- Better Auth authentication.
- Google authentication.
- Protected routes for authenticated users.
- Authenticated users can access private booking and facility-management features.

### Facility Booking

- Authenticated users can book facilities.
- Select a booking date.
- Select available time slots.
- Store booking information in MongoDB.
- Prevent duplicate booking of the same facility/time slot.
- View booking status.

### My Bookings

- View personal bookings.
- See facility name.
- See booking date.
- See selected time slot.
- See booking price.
- See booking status.
- Cancel bookings.

### Add Facility

Logged-in users can add their own facilities.

Facility information includes:

- Facility Name
- Facility Type
- Image
- Location
- Price Per Hour
- Capacity
- Available Time Slots
- Description
- Owner Email

### Manage Facilities

Facility owners can:

- View their own facilities.
- Update their facilities.
- Remove their facilities.
- Manage facility information.
- Manage Booking.

### Responsive Design

- Responsive layout for desktop, tablet, and mobile.
- Modern sports-focused UI.
- Facility cards with images and important information.
- User-friendly navigation and booking interface.



