import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import LandingPage from "./components/pages/LandingPage";
import Articles from "./components/pages/Articles";
import ProtectedRoute from "./routes/ProtectedRoute";
import ArticlesPlan from "./components/pages/ArticlesPlan";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/articles" element={<ProtectedRoute />}>
            <Route path="/articles" element={<Articles />} />
          </Route>
          <Route path="/article-plans" element={<ProtectedRoute />}>
            <Route path="/article-plans" element={<ArticlesPlan />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
