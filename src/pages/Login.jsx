import { useState } from "react";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";

function Login() {
  //   const [fakeUser, setFakeUser] = useState("");
  const [inputName, setInputName] = useState("");

  //   useEffect(() => {
  //     const userName = window.prompt("Please enter your name:");
  //     if (userName) {
  //       alert("welcome");
  //       setFakeUser(userName);
  //     }
  //   }, []);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //   };

  return (
    <>
      <PageNav />
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-15 h-screen w-full gap-4">
        <div className="bg-center bg-cover bg-[url(/images/247991-3840x2160-desktop-4k-money-heist-background-photo.jpg)]"></div>
        <form className="grid gap-4 mx-auto">
          <h1 className="font-bold">Hello, You</h1>
          <h3>Kindly Sign in below</h3>
          <div className="flex gap-3">
            <label htmlFor="name" className="w-auto">
              Government Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              id="name"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
          </div>
          <div className="flex gap-3">
            <label htmlFor="name" className="w-auto">
              E-mail
            </label>
            <input
              type="email"
              placeholder="Email"
              id="name"
              //   value={inputName}
              //   onChange={(e) => setInputName(e.target.value)}
            />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;
