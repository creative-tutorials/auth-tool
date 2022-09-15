import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardComponent from "./components/Dashboard/dashboard";
import SignupComponent from "./components/Auth/Signup";
import LoginComponent from "./components/Auth/Login";
import EmailComponent from "./components/Providers/emailSignin";
import SessionStorage from "./components/sessions/sessions";
import TokenComponent from "./components/token/tokens";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<DashboardComponent />}></Route>
        <Route path="/signup" element={<SignupComponent />}></Route>
        <Route path="/login" element={<LoginComponent />}></Route>
        <Route path="/provider/email" element={<EmailComponent />}></Route>
        <Route path="/sessions" element={<SessionStorage />}></Route>
        <Route path="/tokens" element={<TokenComponent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
