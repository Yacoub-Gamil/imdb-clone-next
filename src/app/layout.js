import Header from "@/_components/Header";
import "./globals.css";

export const metadata = {
  title: "IMDb clone",
  description: "this is a movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
