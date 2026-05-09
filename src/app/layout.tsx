import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import FloatingHearts from "@/components/FloatingHearts";

export const metadata: Metadata = {
  title: "Happy Mother's Day 💐 | For the Best Mom Ever",
  description: "A heartfelt surprise website dedicated to the most wonderful mother in the world. Happy Mother's Day!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <FloatingHearts />
        <main>{children}</main>
      </body>
    </html>
  );
}
