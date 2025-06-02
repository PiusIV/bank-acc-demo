/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer, useRef } from "react";

// 1) context is created, assigned to a react component
const AmountContext = createContext();

const initialState = { balance: 0, loan: 0, isActive: false };

function reducer(state, action) {
  switch (action.type) {
    case "openAccount":
      return { ...state, isActive: true, balance: 500 };
    case "deposit":
      return { ...state, balance: state.balance + action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - action.payload };
    // case "requestLoan":
    //   return { ...state, loan: state.loan + action.payload };
    // case "payLoan":
    //   return { ...state, loan: 0, balance: state.balance - state.loan };

    case "requestLoan":
      return state.loan === 0
        ? {
            ...state,
            loan: action.payload,
            balance: state.balance + action.payload,
          }
        : state;
    case "payLoan":
      return state.balance >= state.loan
        ? { ...state, loan: 0, balance: state.balance - state.loan }
        : state;
    case "closeAccount":
      if (state.balance !== 0 || state.loan !== 0) return state;
      return initialState;
    default:
      throw new Error("Nah Nah");
  }
}

function AmountProvider({ children }) {
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
    <AmountContext.Provider
      value={{
        balance,
        loan,
        isActive,
        dispatch,
        handleDeposit,
        handleLoanRequest,
        handleWithdraw,
        loanRef,
        depositRef,
        withdrawRef,
      }}
    >
      {children}
    </AmountContext.Provider>
  );
}

// custom hook to avoid repitition of usecontext and context provider
function useAmount() {
  const context = useContext(AmountContext);

  if (context === undefined) throw new Error("Literally, out of Context");

  return context;
}

export { AmountProvider, useAmount };
