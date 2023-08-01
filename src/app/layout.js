import "./globals.css";

// import { Inter } from "next/font/google";
// import { Darker_Grotesque } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
// const darkerg = Darker_Grotesque({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "AstroAI",
  description: "The Collective Artificial Unconscious",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>      
    </html>
  );
}
