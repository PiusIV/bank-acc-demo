// import { useRef } from "react";
import { useAmount } from "../contexts/AmountContext";
import AccountCloseButton from "./AccountCloseButton";

function AccountDetails() {
  const {
    dispatch,
    loan,
    handleDeposit,
    handleLoanRequest,
    handleWithdraw,
    loanRef,
    depositRef,
    withdrawRef,
  } = useAmount();

  return (
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
      <AccountCloseButton />
    </div>
  );
}

export default AccountDetails;
