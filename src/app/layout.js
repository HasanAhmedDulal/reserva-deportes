import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import AuthProvider from "@/auth/AuthProvider";
import Banner from "@/components/Home/Banner";
import LoadingProvider from "@/auth/LoadingProvider";


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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-no-repeat bg-cover  bg-center bg-fixed  `}
        style={{
          backgroundImage: "url(/banner/banner.jpg)",
        }}
      >


        <AuthProvider>
          <LoadingProvider>
            <Navbar></Navbar>
            {/* <Banner></Banner> */}
            <main className="container px-2 mx-auto mt-[208px] lg:mt-[155px]">{children}</main>
            <Footer></Footer>
          </LoadingProvider>
        </AuthProvider>
      </body>

    </html >
  );
}
