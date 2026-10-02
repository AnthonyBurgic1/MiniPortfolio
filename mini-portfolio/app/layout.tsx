import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
    title: "Anthony Burgic | Portfolio",
    description: "Anthony Burgic's personal web development portfolio.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>

                <Header />

                <main>
                    {children}
                </main>

                <Footer />

            </body>
        </html>
    );
}