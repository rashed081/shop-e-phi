import Products from "./components/products";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Details from "./components/details";
import "./App.css";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
