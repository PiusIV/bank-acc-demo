// import { useReducer, useRef } from "react";
import { useAmount } from "../contexts/AmountContext";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import AccountDetails from "../components/AccountDetails";
import AccountHeader from "../components/AccountHeader";
import AccountOpenButton from "../components/AccountOpenButton";

function OpenAccountPage() {
  const { isActive } = useAmount();
  // const { dispatch } = useAmount();

  return (
    <>
      <PageNav />
      <div className="mt-20 max-w-md mx-auto p-6 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <AccountHeader />
        {!isActive ? <AccountOpenButton /> : <AccountDetails />}
      </div>
      <Footer />
    </>
  );
}

export default OpenAccountPage;
