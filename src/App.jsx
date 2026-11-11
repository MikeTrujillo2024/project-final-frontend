import { Routes, Route } from "react-router-dom";
import CurrentUserContext from "./contexts/CurrentUserContext";
import Main from "./pages/Main/Main";
import SavedNews from "./pages/SavedNews/SavedNews";
import { useState } from "react";
function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
  return (
    <CurrentUserContext.Provider value={{
      isLoggedIn,
      setIsLoggedIn,
      user,
      setUser
    }}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
