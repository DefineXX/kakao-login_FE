import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import Redirect from "./Redirect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/callback" element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
