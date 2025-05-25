/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";

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

  const { balance, loan, isActive } = state;

  return (
    <AmountContext.Provider
      value={{
        balance,
        loan,
        isActive,
        dispatch,
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
