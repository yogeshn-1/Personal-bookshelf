import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, createContext } from "react";
import SearchPage from "./components/SearchPage";
import Shelf from "./components/Shelf";
export const ShelfContext = createContext(null);
function App() {
  const [shelfBooks, setShelfBooks] = useState([]);

  return (
    <ShelfContext.Provider value={{ shelfBooks, setShelfBooks }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/shelf" element={<Shelf />} />
        </Routes>
      </BrowserRouter>
    </ShelfContext.Provider>
  );
}

export default App;
