import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="main-content container mx-w-xl">{children}</main>
      <Footer />
    </>
  );
}
