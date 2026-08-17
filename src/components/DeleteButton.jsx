"use client";

import { authClient } from "@/lib/auth-client";
// import { auth } from "@/lib/auth";
// import { headers } from "next/headers";
import { useState } from "react";

const DeleteButton = ({ id }) => {

    const [isPending, setIsPending] = useState(false);

    const handleDelete = async () => {

        const confirmed = window.confirm(
            "Are you sure you want to delete this facility?"
        );

        if (!confirmed) return;

        try {

            setIsPending(true);

            const { data, error } = await authClient.token()

            const token = data?.token;
            console.log(token)
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/sports/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const dataa = await response.json();

            if (!response.ok) {
                throw new Error(dataa.message);
            }

            // Refresh server component
            window.location.reload();

        } catch (error) {

            console.error(error);

        } finally {

            setIsPending(false);

        }
    };

    return (
        <button
            onClick={handleDelete}
            disabled={isPending}
            className="flex-1 bg-red-600 hover:bg-red-500 disabled:bg-gray-600 text-white py-2 rounded-lg"
        >
            {isPending ? "Deleting..." : "Delete"}
        </button>
    );
};

export default DeleteButton;