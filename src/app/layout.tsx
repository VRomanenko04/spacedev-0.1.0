import type { Metadata } from "next";
import "../styles/globals.scss";
import Navbar from "@/components/Navbar/Navbar";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "SpaceDev",
  description: "The amazing game for beginer developers to impove skills and learn a lot of useful information to start work with big projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Navbar />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
