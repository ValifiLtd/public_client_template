import "./globals.css";
import {classNames} from "../utils/classNames";
import Image from "next/image";
import React from "react";
import { Inter } from 'next/font/google'

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Valifi Public Client Template",
    description: "",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body
            className={`${inter.className} antialiased`}
        >
        <div className={"mx-auto max-w-xl md:max-w-4xl px-4 pb-3"}>
            <Image className={"mt-4"} src={"/logo2.png"} alt={""} width={120} height={80}/>
        </div>
        <main className={classNames(
            "mx-auto max-w-xl md:max-w-4xl mt-61 px-4 grid auto-cols-fr pb-4",
            "min-h-[calc(100vh-5.5rem-1px)] supports-[height:100dvh]:min-h-[calc(100dvh-5.5rem-1px)]"
        )}>
            {children}
        </main>
        </body>
        </html>
    );
}
