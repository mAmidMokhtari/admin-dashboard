import { Outlet, useNavigate } from "react-router-dom";

import Footer from "./footer";
import Sidebar from "./sidebar";
import TopNav from "./top-nav";

const MainLayout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  if (!token) {
    navigate("/login");
  }
  return (
    <div className="wrapper" style={{ minHeight: "100h" }}>
      <Sidebar />
      <main className="main">
        <TopNav />
        <main className="content">
          <div className="container-fluid p-0">
            <Outlet />
          </div>
        </main>
        <Footer />
      </main>
    </div>
  );
};

export default MainLayout;
