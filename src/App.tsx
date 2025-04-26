import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage.tsx";
import DetailPage from "./pages/DetailPage.tsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:slug" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
