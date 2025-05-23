import FinanceSection from "../components/FinanceSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import PageNav from "../components/PageNav";
// import Logo from "../components/Logo";
// import bgImg from "../assets/images.jpg";

function Homepage() {
  //   console.log(bgImg);
  return (
    <div className="w-full">
      <PageNav />
      <HeroSection />
      <FinanceSection />
      <Footer />
    </div>
  );
}

export default Homepage;
