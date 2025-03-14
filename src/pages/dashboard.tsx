import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { sendGTMEvent } from "@next/third-parties/google";
import { useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Test() {


  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >

      <button
        className='bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer'
        onClick={() => {
          sendGTMEvent({ event: 'test_button', value: 'xyz', })
        }}
      >
        Test trigger
      </button>

    </div>
  );
}
