import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext.jsx";
import ComponentA from "./Component/ComponentA.jsx";
import Register from "./Pages/Blogs/Blog.jsx";
import DisplayBlog from "./Pages/Blogs/DisplayBlog.jsx";
import Home from "./Pages/Home.jsx";
import Navbar from "./layout/Navbar.jsx";
import Contact from "./layout/Contact.jsx";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="app">
        <Navbar/>
          <Routes>
            <Route path="/explore" element={<Register/>} />
            <Route path="/components" element={<ComponentA />} />
            <Route path="/show_all_blogs" element={<DisplayBlog />} />
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
         

        </div>
      </BrowserRouter>
    </UserProvider>
  );
}
export default App;
