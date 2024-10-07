import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { auth } from "@/lib/auth";
// import ClientSideProviderTest from "@/components/clientSideProviderTest";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: {
    default:"Next.js 14 Homepage",
    template:"%s | Next.js 14"
  },
  description: "Next.js starter app description",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  console.log("session in layout", session);
  return (
    <html lang="en">
      <body>
      {/* <ClientSideProviderTest> */}
      {/* even if the whole application is sort of wrapped in a client side provided, the server compenents will act in own way and not effect by it and vise versa */}
      <div className="container">
          <Navbar session={session} />
          {children}
          <Footer/>
        </div>
      {/* </ClientSideProviderTest> */}
      </body>
    </html>
  );
}
