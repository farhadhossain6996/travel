import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";

const font = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Explore the World with Us | Your Ultimate Travel Partner",
  description: "Discover breathtaking global destinations, customized tour packages, and unforgettable holiday experiences with our expert travel agency. Book your dream trip today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${font.className} antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}