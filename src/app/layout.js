import localFont from "next/font/local";
import "./globals.css";
import Header from '../app/components/header'; // Asegúrate de que la ruta sea correcta
import { AuthProvider } from '../app/context/AuthContent'; // Asegúrate de que la ruta sea correcta

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
  title: "AgentesGT",
  description: "Ai Gratis y de Paga.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          <Header /> {/* Agregar el Header aquí */}
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
