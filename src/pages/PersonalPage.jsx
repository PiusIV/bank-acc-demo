// import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import Persona from "../components/Persona";

function PersonalPage() {
  return (
    <div>
      <PageNav />
      <Persona />
      <Footer />
    </div>
  );
}

export default PersonalPage;
