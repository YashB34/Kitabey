import "./App.css";
import Home from "../src/home/Home.jsx";
import Course from "./components/Course.jsx";
import {Route, Routes} from "react-router-dom";
import Signup from "./components/Signup.jsx";
import Contact from "./components/Contact.jsx";
import Privacy from "./components/Privacy.jsx";
import Return from "./components/Return.jsx";
function App() {
  return (
    <>
   
    <div className="bg-base-100 text-base-content">
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Course/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/return&replacement" element={<Return/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/privacy" element={<Privacy
         />}/>
    </Routes>
    </div>
    </>
  );
}

export default App;
