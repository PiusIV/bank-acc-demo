import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-gray-800 w-full h-auto p-4 text-white gap-3 grid grid-cols-1 lg:grid-cols-4">
        <div className="flex flex-col  gap-2 mb-6 md:mb-8 md:items-center md:justify-center">
          <h1 className="font-bold text-lg">Ace Holdings</h1>
          <p>
            Your trusted partner for international money transfers and business
            reliability
          </p>
        </div>
        <div className="flex flex-col mb-6 md:mb-8 gap-2 md:items-center md:justify-center">
          <h1 className="font-bold text-lg">Quick Links</h1>
          <ul className=" space-x-6 flex flex-col">
            <li className="text-white hover:text-gray-300 py-2 hover:font-bold">
              <NavLink to="/personal">Personal</NavLink>
            </li>
            <li className="text-white hover:text-gray-300 py-2  hover:font-bold">
              <NavLink to="/business">Business</NavLink>
            </li>
            <li className="text-white hover:text-gray-300 py-2  hover:font-bold">
              <NavLink>Corporate</NavLink>
            </li>
            <li className="text-white hover:text-gray-300 py-2  hover:font-bold">
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li className="text-white hover:text-gray-300 py-2  hover:font-bold">
              <NavLink to="/login">Login/SignUp</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col mb-6 gap-2 md:mb-8 md:items-center md:justify-center">
          <h1 className="font-bold text-lg">Services</h1>
          <ul className="md:items-center space-x-6 flex flex-col">
            <li className="py-2">Money Transfer</li>
            <li className="py-2">Investment</li>
            <li className="py-2">Savings</li>
          </ul>
        </div>
        <div className="flex flex-col mb-6 gap-2 md:mb-8 md:items-center md:justify-center">
          <h1 className="font-bold text-lg">Contact</h1>
          <ul className="md:items-center space-x-6 flex flex-col">
            <li className="py-2">Email: support@aceholdings.com</li>
            <li className="py-2">Tel: +1(269)245-9087</li>
          </ul>
        </div>
      </div>
      <footer className="mx-auto text-center p-6 text-white font-bold bg-gray-800">
        &copy; Ace Holdings 2025. All Rights Reserved
      </footer>
    </>
  );
}

export default Footer;
