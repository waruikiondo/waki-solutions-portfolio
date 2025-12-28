import "./globals.css";
import { Inter, Outfit } from "next/font/google";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Background3D } from "../components/Background3D";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata = {
  title: "Waki Solutions | MVP Architecture",
  description: "Strategic MVPs for AI & FinTech",
  icons: {
    icon: '/warui.png', // Uses warui.png as the browser tab icon
    apple: '/warui.png', // Uses it for Apple home screen bookmarks too
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning className="antialiased text-primary-text bg-background-dark">
        
        <Background3D />

        <Header />
        
        <div className="relative z-10 min-h-screen">
          {children}
        </div>
        
        <Footer />
      </body>
    </html>
  );
}