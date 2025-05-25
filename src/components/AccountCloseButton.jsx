import { useAmount } from "../contexts/AmountContext";

function AccountCloseButton() {
  const { dispatch } = useAmount();

  return (
    <button
      onClick={() => dispatch({ type: "closeAccount" })}
      className="cursor-pointer w-full px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors shadow-md mt-4"
    >
      Close Account
    </button>
  );
}

export default AccountCloseButton;
