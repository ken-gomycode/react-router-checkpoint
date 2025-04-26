import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.tsx";
import DetailPage from "./pages/Detail.tsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:slug" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
