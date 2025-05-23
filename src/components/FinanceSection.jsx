function FinanceSection() {
  return (
    <div className="container h-auto  w-full mx-auto">
      <section className="p-4">
        <h1 className="mt-4 text-4xl lg:text-5xl text-gray-800 mx-auto font-mono font-bold text-center">
          Stay in control of your finance
        </h1>
        <main className="grid grid-cols-1 lg:grid-cols-2 mt-8">
          <div>
            <img
              src="/images/248000-2160x3840-phone-4k-money-heist-wallpaper-photo.jpg"
              alt="finance-prof-and-students"
              className="rounded-2xl lg:rounded-none lg:h-1/2 mx-auto"
            />
          </div>
          <div className="h-auto flex flex-col gap-7 mt-6">
            <h1 className="mt-8 mb-6 text-3xl text-gray-700 text-center font-bold">
              Improve your financial performance
            </h1>
            <p className="italic font-light text-gray-800">
              We've created a user-friendly and powerful tool which first of
              all, spurns every impeding marginal gain, and as an act of
              providence simplifies budgeting, track expenses and set you on a
              path towards your financial goals. Whether you're saving for a
              dream vacation, working to pay off a cynical amount of debt, or
              simply seeking peace of mind in your financial journey, we're here
              to support you every step of the way. Our mission is to empower
              individuals, businesses, coperate organisations of any kind and
              families to make informed financial decisions.
            </p>
            <ul className="flex justify-between text-lg mt-5 text-amber-600 font-bold">
              <li>🏮 Layers</li>
              <li>🔕 Quotient</li>
              <li>🟢 Circooles</li>
              <li>⏳ Hourglass</li>
              <li>🔫 Command+R</li>
            </ul>
          </div>
        </main>
      </section>
    </div>
  );
}

export default FinanceSection;
