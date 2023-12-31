import "./globals.css";
import { Gabarito } from "next/font/google";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "Fullplate Fitness",
  description: "Personal Training and Nutrition Coaching",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gabarito.className}>{children}</body>
    </html>
  );
}
