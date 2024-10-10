import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";

const spaceRegular = localFont({
  src: "./fonts/SpaceGrotesk-Regular.ttf",
  variable: "--font-space-regular",
  weight: "100 900",
});
const spaceSemiBold = localFont({
  src: "./fonts/SpaceGrotesk-SemiBold.ttf",
  variable: "--font-space-semibold",
  weight: "100 900",
});

export const metadata = {
  author: "Allan Oguis",
  title: "Hacktoberfest 2024",
  description:
    "Gojirun is a 2D platformer game inspired by the classic T-Rex run from Chrome. This project is dedicated to Hacktoberfest 2024 and all its contributors.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html suppressHydrationWarning>
        <head />
        <body className={`items-center justify-items-center p-0 font-space`}>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
