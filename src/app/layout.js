import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Footer from "./components/Footer"
import Navbar from "./components/NavBar";
import { UserProvider } from '@auth0/nextjs-auth0/client';

export const metadata = {
  title: "Dine Design",
  description: "Professional websites catered to local restaurants",
};

export default function RootLayout({ children }) {
  return (
    <>

      <html lang="en">
        <UserProvider>
          <body className={inter.className}>
            <Navbar />

            {children}
            <Footer/>
          </body>
        </UserProvider>
      </html >
    </>
  );
}
