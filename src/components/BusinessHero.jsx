import { Link } from "react-router-dom";
import Button from "./Button";

function BusinessHero() {
  return (
    <div className="w-full bg-gray-600 mt-15 ">
      <section className=" text-white grid grid-cols-1 md:grid-cols-2 md:h-screen">
        <div className="grid gap-4 items-center p-8 h-auto">
          <h1 className="text-4xl font-bold font-sans">
            Stay ahead of the curve and in charge of your business, maximise
            profits with us
          </h1>
          <h3 className="mt-4 gap-2">
            Need a Loan for your Registered Business? <br />
            <span className="underline font-bold mb-3">
              we are open for Business!
            </span>{" "}
            <p className="mt-4">
              walk with us and we'll walk you through on how to get started in a
              minute
            </p>
          </h3>
          <div>
            <span className="p-4 text-3xl">&rarr;</span>
            <Link to="/account">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
        <div className="md:mx-auto grid md:items-center md:justify-center">
          <img
            src="/images/247963-3840x2160-desktop-4k-money-heist-background-image.jpg"
            alt="persona"
            className="lg:h-96 mx-auto"
          />
        </div>
      </section>
    </div>
  );
}

export default BusinessHero;
