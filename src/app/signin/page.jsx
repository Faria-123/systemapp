// "use client";

// import { authClient } from "@/lib/auth-client";
// import { Check, LogoGooglePlay } from "@gravity-ui/icons";

// import {
//     Button,
//     Card,
//     Description,
//     FieldError,
//     Form,
//     Input,
//     Label,
//     TextField,
// } from "@heroui/react";

// import { useRouter } from "next/navigation";
// import toast from "react-hot-toast";

// const Page = () => {
//     const router = useRouter();

//     const handleGoogleLogin = async () => {
//         const { error } = await authClient.signIn.social({
//             provider: "google",
//             callbackURL: "/",
//         });

//         if (error) {
//             toast.error("Google login failed!");
//         }
//     };

//     const onSubmit = async (e) => {
//         e.preventDefault();

//         const formData = new FormData(e.currentTarget);
//         const userData = Object.fromEntries(formData.entries());

//         const { error } = await authClient.signIn.email({
//             email: userData.email,
//             password: userData.password,
//             callbackURL: "/",
//         });

//         if (error) {
//             toast.error("Failed to Sign In!");
//             return;
//         }

//         toast.success("Login successful!");
//         router.push("/");
//     };

//     return (
//         <Card className="border mx-auto w-125 py-10 mt-5">
//             <h1 className="text-center text-2xl font-bold">
//                 Sign In
//             </h1>

//             <Form
//                 className="flex w-96 mx-auto flex-col gap-4"
//                 onSubmit={onSubmit}
//             >
//                 {/* <TextField
//                     isRequired
//                     name="email"
//                     type="email"
//                     validate={(value) => {
//                         if (
//                             !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
//                                 value
//                             )
//                         ) {
//                             return "Please enter a valid email address";
//                         }

//                         return null;
//                     }}
//                 >
//                     <Label>Email</Label>

//                     <Input
//                         placeholder="john@example.com"
//                         name="email"
//                     />

//                     <FieldError />
//                 </TextField> */}

//                 {/* <TextField
//                     isRequired
//                     name="password"
//                     type="password"
//                     validate={(value) => {
//                         if (value.length < 8) {
//                             return "Password must be at least 8 characters";
//                         }

//                         return null;
//                     }}
//                 >
//                     <Label>Password</Label>

//                     <Input
//                         placeholder="Enter your password"
//                         name="password"
//                     />

//                     <Description>
//                         Password must be at least 8 characters
//                     </Description>

//                     <FieldError />
//                 </TextField> */}
//                 <TextField
//                     isRequired
//                     name="password"
//                     type="password"
//                     validate={(value) => {
//                         if (value.length < 6) {
//                             return "Password must be at least 6 characters";
//                         }

//                         if (!/[A-Z]/.test(value) || !/[a-z]/.test(value)) {
//                             return "Password must contain at least one uppercase and one lowercase letter";
//                         }

//                         return null;
//                     }}
//                 >
//                     <Label>Password</Label>

//                     <Input
//                         placeholder="Enter your password"
//                         name="password"
//                     />

//                     <Description>
//                         Minimum 6 characters, with at least one uppercase and one lowercase letter
//                     </Description>

//                     <FieldError />
//                     <Label>Email</Label>

//                     <Input
//                         placeholder="john@example.com"
//                         name="email"
//                     />
//                 </TextField>

//                 <div className="flex gap-2">
//                     <Button type="submit">
//                         <Check />
//                         Log In
//                     </Button>

//                     <Button
//                         type="button"
//                         variant="secondary"
//                         onPress={() => router.push("/")}
//                     >
//                         Cancel
//                     </Button>
//                 </div>
//             </Form>

//             <p className="text-center my-3">OR</p>

//             <Button
//                 onPress={handleGoogleLogin}
//                 variant="outline"
//                 className="w-full flex items-center justify-center gap-3"
//             >
//                 <LogoGooglePlay />
//                 Login with Google
//             </Button>
//         </Card>
//     );
// };

// export default Page;

"use client";

import { authClient } from "@/lib/auth-client";
import { Check, LogoGooglePlay } from "@gravity-ui/icons";

import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Page = () => {
    const router = useRouter();

    const handleGoogleLogin = async () => {
        const { error } = await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });

        if (error) {
            toast.error("Google login failed!");
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const userData = Object.fromEntries(formData.entries());

        const { error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            callbackURL: "/",
        });

        if (error) {
            toast.error("Failed to Sign In!");
            return;
        }

        toast.success("Login successful!");
        router.push("/");
    };

    return (
        <Card className="border mx-auto w-125 py-10 mt-5">
            <h1 className="text-center text-2xl font-bold">
                Sign In
            </h1>

            <Form
                className="flex w-96 mx-auto flex-col gap-4"
                onSubmit={onSubmit}
            >

                {/* Email */}
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                value
                            )
                        ) {
                            return "Please enter a valid email address";
                        }

                        return null;
                    }}
                >
                    <Label>Email</Label>

                    <Input
                        placeholder="john@example.com"
                        name="email"
                    />

                    <FieldError />
                </TextField>

                {/* Password */}
                <TextField
                    isRequired
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 6) {
                            return "Password must be at least 6 characters";
                        }

                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }

                        if (!/[a-z]/.test(value)) {
                            return "Password must contain at least one lowercase letter";
                        }

                        return null;
                    }}
                >
                    <Label>Password</Label>

                    <Input
                        placeholder="Enter your password"
                        name="password"
                    />

                    <Description>
                        Minimum 6 characters, with at least one uppercase
                        and one lowercase letter
                    </Description>

                    <FieldError />
                </TextField>

                {/* Buttons */}
                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Log In
                    </Button>

                    <Button
                        type="button"
                        variant="secondary"
                        onPress={() => router.push("/")}
                    >
                        Cancel
                    </Button>
                </div>
            </Form>

            <p className="text-center my-3">OR</p>

            {/* Google Login */}
            <Button
                onPress={handleGoogleLogin}
                variant="outline"
                className="w-full flex items-center justify-center gap-3"
            >
                <LogoGooglePlay />
                Login with Google
            </Button>
        </Card>
    );
};

export default Page;