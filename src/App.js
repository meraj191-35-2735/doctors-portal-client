import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import LogIn from "./Pages/LogIn/LogIn";
import AppointmentPage from "./Pages/AppointmentPage/AppointmentPage";
import SignUp from "./Pages/SignUp/SignUp";
import RequireAuth from "./Pages/LogIn/RequireAuth";

function App() {
  return (
    <div className="max-w-7xl px-12 mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route
          path="appointment"
          element={
            <RequireAuth>
              <AppointmentPage></AppointmentPage>
            </RequireAuth>
          }
        ></Route>
        <Route path="login" element={<LogIn></LogIn>}></Route>
        <Route path="signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
