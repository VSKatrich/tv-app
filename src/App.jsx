import { Route, Routes } from "react-router-dom";

import NavbarLayout from "./components/layouts/NavbarLayout";
import Home from "./pages/Home";

import "./App.scss";

function App() {
  return (
    <Routes>
      <Route element={<NavbarLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
