
import './App.css';
import VerifyEmail from './components/EmailVerify';
import ForgotPassword from './components/ForgotPassword';
import Login from './components/Login';
import NoPage from './components/NoPage';
import Registration from './components/Registration';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">    
     {/* <Registration/> */}
     <Routes>
        <Route path="/" element={<Registration/>}>
          <Route path="forgot_password" element={<ForgotPassword/>} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<VerifyEmail/>} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
