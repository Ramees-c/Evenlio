import { Route, Routes } from "react-router-dom";
import Home from "./pages/user/Home";
import Header from "./components/user/Header";

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
