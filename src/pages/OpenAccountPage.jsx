import { useReducer, useRef } from "react";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";

const initialState = { balance: 0, loan: 0, isActive: false };

function reducer(state, action) {
  switch (action.type) {
    case "openAccount":
      return { ...state, isActive: true, balance: 500 };
    case "deposit":
      return { ...state, balance: state.balance + action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "requestLoan":
      return { ...state, loan: state.loan + action.payload };
    case "payLoan":
      return { ...state, loan: 0, balance: state.balance - state.loan };
    case "closeAccount":
      if (state.balance !== 0 || state.loan !== 0) return state;
      return initialState;
    default:
      throw new Error("Nah Nah");
  }
}

function OpenAccountPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const depositRef = useRef();
  const withdrawRef = useRef();
  const loanRef = useRef();

  const { balance, loan, isActive } = state;

  function handleDeposit() {
    const amount = Number(depositRef.current.value);
    if (amount > 0) {
      dispatch({ type: "deposit", payload: amount });
      depositRef.current.value = "";
    }
  }

  function handleWithdraw() {
    const amount = Number(withdrawRef.current.value);
    if (amount > 0 && amount <= balance) {
      dispatch({ type: "withdraw", payload: amount });
      withdrawRef.current.value = "";
    }
  }

  function handleLoanRequest() {
    const amount = Number(loanRef.current.value);
    if (amount > 0 && loan === 0) {
      dispatch({ type: "requestLoan", payload: amount });
      loanRef.current.value = "";
    }
  }
  return (
    <>
      <PageNav />
      <div className="mt-20 max-w-md mx-auto p-6 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Bank Account</h1>
          <div className="mt-4 space-y-2">
            <p className="text-lg bg-gray-100 p-3 rounded-lg">
              Balance:{" "}
              <span className="font-semibold">${balance.toFixed(2)}</span>
            </p>
            <p className="text-lg bg-gray-100 p-3 rounded-lg">
              Loan: <span className="font-semibold">${loan.toFixed(2)}</span>
            </p>
          </div>
        </div>

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
          <div className="space-y-4">
            {/* Deposit */}
            <div className="flex gap-2">
              <input
                type="number"
                ref={depositRef}
                placeholder="Amount"
                min="1"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button
                onClick={handleDeposit}
                className="px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors shadow-md"
              >
                Deposit
              </button>
            </div>

            {/* Withdraw */}
            <div className="flex gap-2">
              <input
                type="number"
                ref={withdrawRef}
                placeholder="Amount"
                min="1"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleWithdraw}
                className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              >
                Withdraw
              </button>
            </div>

            {/* Loan Request */}
            <div className="flex gap-2">
              <input
                type="number"
                ref={loanRef}
                placeholder="Amount"
                min="1"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button
                onClick={handleLoanRequest}
                className="px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors shadow-md"
              >
                Request Loan
              </button>
            </div>

            {/* Pay Loan (conditional) */}
            {loan > 0 && (
              <button
                onClick={() => dispatch({ type: "payLoan" })}
                className="w-full px-4 py-2 bg-yellow-600 text-white font-medium rounded-lg hover:bg-yellow-700 transition-colors shadow-md"
              >
                Pay Loan (${loan.toFixed(2)})
              </button>
            )}

            {/* Close Account */}
            <button
              onClick={() => dispatch({ type: "closeAccount" })}
              className="cursor-pointer w-full px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors shadow-md mt-4"
            >
              Close Account
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default OpenAccountPage;
