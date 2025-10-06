import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}