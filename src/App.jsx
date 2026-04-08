import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import SinglePage from "./pages/SinglePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-page:id" element={<CreatePage />} />
        <Route path="/edit-page" element={<EditPage />} />
        <Route path="/single-page" element={<SinglePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;