import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
    title: "Dog Breed Explorer",
    description: "CS391 MP4",
};

export default function RootLayout({children,}: {children: React.ReactNode;}) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}
