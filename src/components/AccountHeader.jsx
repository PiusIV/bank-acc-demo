import { useAmount } from "../contexts/AmountContext";

function AccountHeader() {
  const { balance, loan } = useAmount();
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-gray-800">Bank Account</h1>
      <div className="mt-4 space-y-2">
        <p className="text-lg bg-gray-100 p-3 rounded-lg">
          Balance: <span className="font-semibold">${balance.toFixed(2)}</span>
        </p>
        <p className="text-lg bg-gray-100 p-3 rounded-lg">
          Loan: <span className="font-semibold">${loan.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
}

export default AccountHeader;
