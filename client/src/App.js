import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Home from "./main/pages/home/Home";
import List from "./main/pages/list/List";
import Hotel from "./main/pages/hotel/Hotel";
import Login from "./main/pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
