import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardComponent from "./components/Dashboard/dashboard";
import SignupComponent from "./components/Auth/Signup";
import LoginComponent from './components/Auth/Login';
import EmailComponent from './components/StoreSessions/emailSignin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<DashboardComponent />}></Route>
        <Route path="/signup" element={<SignupComponent />}></Route>
        <Route path="/login" element={<LoginComponent />}></Route>
        <Route path="/session/email" element={<EmailComponent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
