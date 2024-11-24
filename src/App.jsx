import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome";
import Result from "./components/Result";
import Quiz from "./components/Quiz";
import PageNotFound from "./components/PageNotFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        {/* Route for Welcome Page */}
        <Route path="/" element={<Welcome />} />

        {/* Route for Quiz Page */}
        <Route path="/quiz" element={<Quiz />} />

        {/* Route for Results Page */}
        <Route path="/result" element={<Result />} />
        {/* Route for Results Page */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
