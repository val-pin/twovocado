import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Container from "react-bootstrap/Container";
import NavbarWrapper from "./components/NavbarWrapper";
import AuthContextWrapper from "./components/AuthContextWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AvocaNO",
  description: "Save forests worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          <AuthContextWrapper>
            <NavbarWrapper />
            {children}
          </AuthContextWrapper>
        </Container>
      </body>
    </html>
  );
}
