import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";

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
        <header />
        <body
          className={`bg-background text-foreground items-center justify-items-center p-0 font-space transition-colors duration-300`}
        >
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
