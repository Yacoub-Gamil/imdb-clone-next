import Header from "@/app/_components/Header";
import "./globals.css";
import ProviderTheme from "@/app/_components/ProviderTheme";

export const metadata = {
  title: "IMDb clone",
  description: "this is a movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ProviderTheme>
          <Header />
          {children}
        </ProviderTheme>
      </body>
    </html>
  );
}
