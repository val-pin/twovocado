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
      <body
        className={inter.className}
        style={{
          backgroundImage: `url("https://www.thespruce.com/thmb/3_0qh-k2duivL7OYO7c1Lw-wNg4=/2121x1414/filters:fill(auto,1)/Avocadotreeswithfruit-5624d9395234479f923831b984effa5f.jpg")`,
        }}
      >
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
