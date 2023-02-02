import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/main"
import Login from "./pages/loginpage";
import Home from "./pages/homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<MainLayout/>}>
          <Route path="spotify" element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
