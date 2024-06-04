import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import Shelf from "./components/Shelf";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/shelf" element={<Shelf />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
