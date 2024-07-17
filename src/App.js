import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Viewbook from "./components/Viewbook";
import Addbook from "./components/Addbook";
import Depo from "./components/Depo";
import EditPage from "./components/EditPage";
import Navlink from "./Navlink/Navlink";
import DepoStudentPage from "./components/DepoStudentPage";
import ViweStudentList from "./components/ViweStudentList";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Navlink />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/viewbook" element={<Viewbook />} />
          <Route path="/addbook" element={<Addbook />} />
          <Route path="/depo" element={<Depo />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="depo/:id" element={<DepoStudentPage />} />
          <Route path="/viewStudentList" element={<ViweStudentList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
