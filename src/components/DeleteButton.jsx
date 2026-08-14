"use client";

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

            const response = await fetch(
                `http://localhost:8000/sports/${id}`,
                {
                    method: "DELETE",
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
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