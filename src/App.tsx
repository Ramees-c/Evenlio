import { Route, Routes } from "react-router-dom";
import Header from "./components/user/Header";
import Home from "./pages/user/Home";



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
