"use client";

// import { TriangleWarning } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";

export function CancelMod({ booking }) {
    const handleCancel = async () => {
        // console.log("Cancel booking:", bookingId);

        // later:
        // call your DELETE/PATCH API here
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${booking._id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },

        });
        const result = await res.json();
        window.location.reload();
    };

    return (
        <Modal>
            {/* Trigger */}
            <Modal.Trigger className="w-full">
                <Button
                    color="danger"
                    variant="danger"
                    className="w-full"
                >
                    Cancel Booking
                </Button>
            </Modal.Trigger>

            {/* Modal */}
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-[400px]">

                        <Modal.CloseTrigger />

                        <Modal.Header>
                            <Modal.Icon className="bg-danger text-danger-foreground">
                                {/* <TriangleWarning className="size-5" /> */}
                            </Modal.Icon>

                            <Modal.Heading>
                                Cancel Booking?
                            </Modal.Heading>
                        </Modal.Header>

                        <Modal.Body>
                            <p className="text-default-500">
                                Are you sure you want to cancel this booking?
                                This action cannot be undone.
                            </p>
                        </Modal.Body>

                        <Modal.Footer className="flex gap-2">

                            <Button
                                variant="flat"
                                slot="close"
                                className="flex-1"
                            >
                                Keep Booking
                            </Button>

                            <Button
                                color="danger"
                                className="flex-1"
                                onPress={handleCancel}
                            >
                                Yes, Cancel
                            </Button>

                        </Modal.Footer>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}