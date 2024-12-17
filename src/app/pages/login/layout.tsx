import { Metadata } from "next";

export const metadata: Metadata = {
    title: "LogIn",
    description: "Admin Login",
};
export default function LoginLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    );
}