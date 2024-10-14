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
      <html
        lang="en"
        className="scroll-smooth antialiased"
        suppressHydrationWarning
      >
        <head />
        <body className="items-center bg-background justify-items-center p-0 font-space transition-all duration-300">
          <ThemeProvider
            className={`flex min-h-screen flex-col`}
            attribute="class"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
