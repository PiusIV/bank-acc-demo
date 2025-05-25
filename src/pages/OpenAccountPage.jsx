// import { useReducer, useRef } from "react";
import { useAmount } from "../contexts/AmountContext";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import AccountDetails from "../components/AccountDetails";
import AccountHeader from "../components/AccountHeader";

function OpenAccountPage() {
  const { isActive, dispatch } = useAmount();
  // const { dispatch } = useAmount();

  return (
    <>
      <PageNav />
      <div className="mt-20 max-w-md mx-auto p-6 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <AccountHeader />
        {!isActive ? (
          <div className="flex justify-center">
            <button
              onClick={() => dispatch({ type: "openAccount" })}
              className="cursor-pointer px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors shadow-md"
            >
              Open Account
            </button>
          </div>
        ) : (
          <AccountDetails />
        )}
      </div>
      <Footer />
    </>
  );
}

export default OpenAccountPage;
