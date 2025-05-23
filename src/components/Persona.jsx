import { Link } from "react-router-dom";
import Button from "./Button";

function Persona() {
  return (
    <div className="w-full bg-gray-600 mt-15">
      <section className=" text-white grid grid-cols-1 md:grid-cols-2 lg:h-screen">
        <div className="md:mx-auto grid md:items-center md:justify-center">
          <img
            src="/images/248068-1920x1080-desktop-full-hd-money-heist-background-photo.jpg"
            alt="persona"
            className="lg:h-84 mx-auto "
          />
        </div>
        <div className="grid gap-4 items-center p-8 h-auto">
          <h1 className="text-4xl font-bold font-sans">
            An Account tailored just for you
          </h1>
          <p>
            With just el click 🤞🏽, you can have whatever account you desire,
            your wish is our command. We're here to serve you
          </p>
          <Link to="/account">
            <Button>Open Account</Button>
          </Link>

          {/* <Outlet /> */}
        </div>
      </section>
    </div>
  );
}

export default Persona;
