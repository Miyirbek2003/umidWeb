import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About/About";
import Main from "./components/pages/Main/Main";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about/:id" element={<About />} />
    </Routes>
  );
}
