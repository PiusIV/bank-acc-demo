import { Link } from "react-router-dom";
import Button from "./Button";

function HeroSection() {
  return (
    <div className="bg-gray-800 mt-15 pb-14">
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="lg:h-screen text-white grid gap-4 capitalize p-6 md:px-6 md:py-4 md:mt-4">
          <h1 className="text-5xl font-extrabold">
            Your path to <br /> financial success
          </h1>
          <p className="text-gray-400">
            take charge of your money, track expenses effortlessly, and reach
            your financial goals. start budgeting smarter today.
          </p>
          <button className="p-2 rounded-4xl border-2 border-white w-32 cursor-pointer h-14">
            download now
          </button>
        </div>
        <div className="mt-17 md:mt-0 text-center opacity-80 md:pt-15 grid justify-center gap-3 bg-[url('/images/247872-1920x1080-desktop-full-hd-money-heist-wallpaper-image.jpg')] bg-center bg-cover w-full h-78 lg:h-screen">
          <h1 className="text-gray-700 font-bold text-3xl">
            Get an account that suits you!
          </h1>
          <p className="text-white text-lg font-serif w-2/3 mx-auto">
            At Ace Holdings, we believe that the beauty of life lies in the
            little things that gives us better expression of ourselves, make us
            more social and connect emotionally.
          </p>
          <div className="flex items-center justify-center gap-3 text-white font-bold">
            <Button>
              <Link to="/login">Learn More</Link>
            </Button>
            <Button>
              <Link to="/account">Open Account</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
