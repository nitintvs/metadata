import localFont from "next/font/local";
import "./globals.css";

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
  title: "Rwanda",
  description: "rwanda",
  icons: {
    appleTouchIcon: "/logo192.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    url: "https://beta.dsa.minict.gov.rw/",
    title: "Rwanda",
    description: "It is one of the applications",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/ec7da481-6cd8-4fef-a295-454462bcef34.png?token=Wif8ph9YBNtaw9_5SzvmrNTgHpj1UNgh9sEnumx7RIA&height=600&width=1200&expires=33265781781", // Replace with your image URL
        width: 200,
        height: 300,
        alt: "Rwanda Image",
      },
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
