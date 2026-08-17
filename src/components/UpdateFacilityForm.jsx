"use client";

import { useState } from "react";
import {
    Button,
    FieldError,
    Input,
    Label,
    TextField,
    TextArea
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const UpdateFacilityForm = ({ facility }) => {

    const [isPending, setIsPending] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();

        setIsPending(true);

        try {

            const formData = new FormData(e.currentTarget);

            const updatedFacility = {
                facilityName: formData.get("facilityName"),
                facilityType: formData.get("facilityType"),
                image: formData.get("image"),
                location: formData.get("location"),

                pricePerHour: Number(
                    formData.get("pricePerHour")
                ),

                capacity: Number(
                    formData.get("capacity")
                ),

                availableTimeSlots: formData
                    .get("availableTimeSlots")
                    .split(",")
                    .map((slot) => slot.trim()),

                description: formData.get("description"),

                // Keep owner
                ownerEmail: facility.ownerEmail,
            };
            const { data, error } = await authClient.token();
            const token = data?.token;
            const response = await fetch(
                `http://localhost:8000/sports/${facility._id}`,
                {
                    method: "PATCH",

                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },

                    body: JSON.stringify(updatedFacility),
                }
            );

            const dataa = await response.json();

            if (!response.ok) {
                throw new Error(
                    dataa.message || "Update failed"
                );
            }

            console.log("Updated:", data);

            window.location.href = "/manage-facilities";

        } catch (error) {

            console.error(error);

        } finally {

            setIsPending(false);

        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-slate-900 p-6 rounded-2xl space-y-6 "
        >

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Facility Name */}
                <TextField
                    name="facilityName"
                    isRequired
                    defaultValue={facility.facilityName}
                >
                    <Label className="text-white">Facility Name</Label>

                    <Input />

                    <FieldError />
                </TextField>


                {/* Facility Type */}
                <TextField
                    name="facilityType"
                    isRequired
                    defaultValue={facility.facilityType}
                >
                    <Label className="text-white">Facility Type</Label>

                    <Input />

                    <FieldError />
                </TextField>


                {/* Image */}
                <div className="md:col-span-2">

                    <TextField
                        name="image"
                        isRequired
                        defaultValue={facility.image}
                    >
                        <Label className="text-white">Image URL</Label>

                        <Input type="url" />

                        <FieldError />
                    </TextField>

                </div>


                {/* Location */}
                <TextField
                    name="location"
                    isRequired
                    defaultValue={facility.location}
                >
                    <Label className="text-white">Location</Label>

                    <Input />

                    <FieldError />
                </TextField>


                {/* Price */}
                <TextField
                    name="pricePerHour"
                    isRequired
                    defaultValue={String(
                        facility.pricePerHour
                    )}
                >
                    <Label className="text-white">Price Per Hour</Label>

                    <Input type="number" />

                    <FieldError />
                </TextField>


                {/* Capacity */}
                <TextField
                    name="capacity"
                    isRequired
                    defaultValue={String(
                        facility.capacity
                    )}
                >
                    <Label className="text-white">Capacity</Label>

                    <Input type="number" />

                    <FieldError />
                </TextField>


                {/* Time Slots */}
                <div className="md:col-span-2">

                    <TextField
                        name="availableTimeSlots"
                        isRequired
                        defaultValue={
                            Array.isArray(
                                facility.availableTimeSlots
                            )
                                ? facility.availableTimeSlots.join(", ")
                                : ""
                        }
                    >
                        <Label className="text-white">
                            Available Time Slots
                        </Label>

                        <Input
                            placeholder="08:00 AM - 09:00 AM, 09:00 AM - 10:00 AM"
                        />

                        <FieldError />
                    </TextField>

                </div>


                {/* Description */}
                <div className="md:col-span-2">

                    <TextField
                        name="description"
                        isRequired
                        defaultValue={facility.description}
                    >
                        <Label className="text-white">Description</Label>

                        <TextArea />

                        <FieldError />
                    </TextField>

                </div>

            </div>


            <Button
                type="submit"
                isDisabled={isPending}
                className="w-full bg-green-600 text-white"
            >
                {isPending
                    ? "Updating..."
                    : "Update Facility"}
            </Button>

        </form>
    );
};

export default UpdateFacilityForm;