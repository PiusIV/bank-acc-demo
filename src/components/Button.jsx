function Button({ children }) {
  return (
    <button className="p-4 bg-amber-600 rounded-lg border-none cursor-pointer">
      {children}
    </button>
  );
}

export default Button;
