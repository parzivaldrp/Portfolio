import { Inter } from "next/font/google";
import Navbar from "./components/Navbar/page";
import Footer from "./components/Footer/page";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Darshan Panchal Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">


      <body className={inter.className}>
        <header><Navbar /></header>
        <div>
          <main>
            {children}
          </main>
        </div>
        <footer><Footer /></footer>
      </body>
    </html>
  );
}
