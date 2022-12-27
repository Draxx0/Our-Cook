import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Layout = ({ children, isLogged }) => {
  return (
    <>
      <Navbar isLogged={isLogged} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
