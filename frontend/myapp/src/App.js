import "./App.css";
import VerifyEmail from "./components/Auth/EmailVerify";
import ForgotPassword from "./components/Auth/ForgotPassword";
import Login from "./components/Auth/Login";
import NoPage from "./components/Auth/NoPage";
import Registration from "./components/Auth/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/navs/Header";

function App() {
  return (
    <div className="App">
      {/* <Registration/> */}
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="registration" element={<Registration />} />
        <Route path="forgot_password" element={<ForgotPassword />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<VerifyEmail />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
