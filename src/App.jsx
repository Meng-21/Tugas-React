import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages";
import Books from "./Pages/books";
import TeamPage from "./Pages/team";
import ContactPage from "./Pages/contact";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/register";


function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/books" element={<Books/>} />
          <Route path="/team" element={<TeamPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
