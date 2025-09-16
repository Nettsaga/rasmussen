import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import TopBar from "./TopBar";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navigation />
      <main className={`flex-1 ${isHome ? "theme-light" : ""}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
