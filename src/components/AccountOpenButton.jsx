import { useAmount } from "../contexts/AmountContext";

function AccountOpenButton() {
  const { dispatch } = useAmount();

  return (
    <div className="flex justify-center">
      <button
        onClick={() => dispatch({ type: "openAccount" })}
        className="cursor-pointer px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors shadow-md"
      >
        Open Account
      </button>
    </div>
  );
}

export default AccountOpenButton;
