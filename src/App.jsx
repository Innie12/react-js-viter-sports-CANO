import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PageNotFound from "./components/partials/PageNotFound";
import Home from "./components/pages/home/Home";
import Football from "./components/pages/football/Football";
import Basketball from "./components/pages/basketball/Basketball";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/football" element={<Football />} />
          <Route path="/basketball" element={<Basketball />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
