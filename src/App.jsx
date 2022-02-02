import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./styles/styles.scss";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Modals from "./pages/Modals";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/lorem" element={<Modals />} />
        <Route path="/modals" element={<Modals />} />
        {/* <Route path="*" Navigate={<Navigate to="/" />} /> */}
        {/* <Route path="*" /> */}
        {/* <Redirect to="/" /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
