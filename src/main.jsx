import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.jsx'
import Home from "./components/Home/Home.jsx";
import Main from "./layout/Main.jsx";
import Login from "./components/Login/Login.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
    </Route>
    <Route path="/login" element={<Login />} />
  </Routes>
</BrowserRouter>

)
