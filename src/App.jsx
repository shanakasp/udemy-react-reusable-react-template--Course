import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NotFound from "./pages/404/NotFound.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import Reset from "./pages/auth/Reset.jsx";
import Home from "./pages/home/Home.jsx";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/reset" element={<Reset></Reset>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
