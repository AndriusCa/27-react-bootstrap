import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BasicLayout } from "./layout/BasicLayout";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Page404 } from "./pages/Page404";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={BasicLayout}>
            <Route index path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
