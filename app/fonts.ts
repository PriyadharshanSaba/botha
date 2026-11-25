import { Inter } from "next/font/google";

// Inter is used by the home page and the site header. Other pages keep their own fonts.
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
