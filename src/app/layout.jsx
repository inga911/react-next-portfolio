import { Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransitions from "@/components/PageTransitions";
import { SpeedInsights } from "@vercel/speed-insights/next";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});
const jetBrain = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrain",
});

export const metadata = {
  title: "Inga Banaityte",
  description: "Personal portfolio of Inga Banaityte",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${jetBrain.variable} h-[100vh]`}>
        <Header />
        <PageTransitions className="h-full">{children}</PageTransitions>
        <SpeedInsights />
      </body>
    </html>
  );
}
