import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { AntdRegistry } from '@ant-design/nextjs-registry'; // Stop Page Flicker (Style Removed Error during Page Reload)

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }) {

    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <AntdRegistry>
                    {children}
                </AntdRegistry>
            </body>
        </html>
    );
}
