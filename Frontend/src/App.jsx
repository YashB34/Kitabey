import "./App.css";
import Home from "../src/home/Home.jsx";
import Course from "./components/Course.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup.jsx";
import Contact from "./components/Contact.jsx";
import Privacy from "./components/Privacy.jsx";
import Return from "./components/Return.jsx";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider.jsx";
function App() {
   const[authUser , setAuthUser] = useAuth();
  return (
    <>
      <div className="bg-base-100 text-base-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser?<Course />:<Navigate to="/signup"/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/return&replacement" element={<Return />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
