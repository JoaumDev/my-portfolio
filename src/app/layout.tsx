import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JoaumDev",
  description: "O portfolio do JoaumDev"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
      >
        {children}
      </body>

      <head>
        
        <link rel="icon" href="/favicon.ico" sizes="any" />

      </head>
      
    </html>
  );
}
