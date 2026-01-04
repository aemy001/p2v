import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Poppins ,Source_Sans_3 } from "next/font/google";
import Navigation from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-poppins",
});

// const sans = Source_Sans_3({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "900"],
//   variable: "--font-sans-s-3",
// });

export default function App({ Component, pageProps }) {
  return (
    <main className={`${poppins.variable} font-sans `}>
      <Navigation />
      <Component {...pageProps} />
    </main>
  );
}
