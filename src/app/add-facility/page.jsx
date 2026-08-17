//
"use client";

// import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import {
    Button,
    FieldError,
    Input,
    Label,
    TextField,
    TextArea,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const Page = () => {
    const router = useRouter();
    const [isPending, setIsPending] = useState(false);
    const { data: session } = authClient.useSession();

    const onSubmit = async (e) => {
        e.preventDefault();

        setIsPending(true);

        try {
            const formData = new FormData(e.currentTarget);

            const facility = {
                facilityName: formData.get("facilityName"),
                facilityType: formData.get("facilityType"),
                image: formData.get("image"),
                location: formData.get("location"),
                pricePerHour: Number(formData.get("pricePerHour")),
                capacity: Number(formData.get("capacity")),

                availableTimeSlots: formData
                    .get("availableTimeSlots")
                    .split(",")
                    .map((slot) => slot.trim()),

                description: formData.get("description"),

                ownerEmail: session?.user?.email,
            };


            const req = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/sports`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(facility),
            });

            const data = await req.json();

            console.log("Server response:", data);

            if (!req.ok) {
                throw new Error(
                    data.message || "Failed to add facility"
                );
            }

            console.log("Facility added successfully");
            // redirect('/');
            toast.success("added Facility!")
            router.push("/");

            // e.currentTarget.reset();

        } catch (error) {
            console.error("POST ERROR:", error);
        } finally {
            setIsPending(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto p-6">

            <h1 className="text-3xl font-bold mb-8">
                Add Facility
            </h1>

            <form
                onSubmit={onSubmit}
                className="p-10 space-y-8"
            >

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Facility Name */}
                    <div className="md:col-span-2">
                        <TextField isRequired>
                            <Label>Facility Name</Label>

                            <Input
                                name="facilityName"
                                placeholder="Smash Badminton Arena"
                                className="rounded-2xl"
                            />

                            <FieldError />
                        </TextField>
                    </div>

                    {/* Facility Type */}
                    <TextField isRequired>
                        <Label>Facility Type</Label>

                        <Input
                            name="facilityType"
                            placeholder="Badminton Court"
                            className="rounded-2xl"
                        />

                        <FieldError />
                    </TextField>

                    {/* Image */}
                    <TextField isRequired>
                        <Label>Image URL</Label>

                        <Input
                            name="image"
                            type="url"
                            placeholder="https://example.com/image.jpg"
                            className="rounded-2xl"
                        />

                        <FieldError />
                    </TextField>

                    {/* Location */}
                    <TextField isRequired>
                        <Label>Location</Label>

                        <Input
                            name="location"
                            placeholder="Mirpur, Dhaka"
                            className="rounded-2xl"
                        />

                        <FieldError />
                    </TextField>

                    {/* Price */}
                    <TextField isRequired>
                        <Label>Price Per Hour</Label>

                        <Input
                            name="pricePerHour"
                            type="number"
                            placeholder="500"
                            className="rounded-2xl"
                        />

                        <FieldError />
                    </TextField>

                    {/* Capacity */}
                    <TextField isRequired>
                        <Label>Capacity</Label>

                        <Input
                            name="capacity"
                            type="number"
                            placeholder="4"
                            className="rounded-2xl"
                        />

                        <FieldError />
                    </TextField>

                    {/* Available Slots */}
                    <div className="md:col-span-2">
                        <TextField isRequired>
                            <Label>Available Time Slots</Label>

                            <Input
                                name="availableTimeSlots"
                                placeholder="08:00 AM - 09:00 AM, 09:00 AM - 10:00 AM"
                                className="rounded-2xl"
                            />

                            <FieldError />
                        </TextField>

                        <p className="text-sm text-gray-500 mt-2">
                            Separate slots with commas.
                        </p>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                        <TextField isRequired>
                            <Label>Description</Label>

                            <TextArea
                                name="description"
                                placeholder="Describe the facility..."
                                className="rounded-3xl"
                            />

                            <FieldError />
                        </TextField>
                    </div>

                </div>

                <Button
                    type="submit"
                    isDisabled={isPending}
                    className="w-full bg-cyan-500 text-white"
                >
                    {isPending
                        ? "Adding Facility..."
                        : "Add Facility"}
                </Button>

            </form>
        </div>
    );
};

export default Page;