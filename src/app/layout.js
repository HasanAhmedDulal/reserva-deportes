import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import Header from "@/components/Shared/Header";
import Footer from "@/components/Shared/Footer";
import AuthProvider from "@/auth/AuthProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Reserva Deportes",
  description: "Ayuntamiento de Fuensaldaña",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Header></Header>
          <Navbar></Navbar>

          <main className="max-w-screen-2xl px-2 mx-auto bg-white">{children}</main>
          <Footer></Footer>
        </AuthProvider>
      </body>

    </html >
  );
}
