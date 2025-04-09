import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "今天還在",
  description: "靈魂喘息站",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
