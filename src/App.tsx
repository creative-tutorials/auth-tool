import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardComponent from "./components/Dashboard/dashboard";
import SignupComponent from "./components/Auth/Signup";
import LoginComponent from './components/Auth/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<DashboardComponent />}></Route>
        <Route path="/signup" element={<SignupComponent />}></Route>
        <Route path="/login" element={<LoginComponent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
