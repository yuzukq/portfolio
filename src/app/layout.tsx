import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/components/ui/provider";

export const metadata: Metadata = {
  title: "Yuzu portfolio",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning className="dark">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
