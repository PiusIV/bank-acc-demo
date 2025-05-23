import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import ContactPage from "./pages/ContactPage";
import PersonalPage from "./pages/PersonalPage";
import OpenAccountPage from "./pages/OpenAccountPage";
import BusinessPage from "./pages/BusinessPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="personal" element={<PersonalPage />}></Route>
          <Route path="business" element={<BusinessPage />}></Route>
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="account" element={<OpenAccountPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
