import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BasicLayout } from "./layout/BasicLayout";
import { UserLayout } from "./layout/UserLayout";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Pricing } from "./pages/Pricing";
import { Features } from "./pages/Features";
import { Page404 } from "./pages/Page404";
import { Dashboard } from "./pages/Dashboard";
import { Books } from "./pages/Books";
import { UserContextProvider } from "./context/UserContext";
import { UserContextValuesUpdate } from "./context/UserContextValuesUpdate";


function App() {
  return (
    <>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={BasicLayout}>
              <Route index path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<Pricing />} />
            </Route>

            <Route Component={UserLayout}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/books" element={<Books />} />
            </Route>

            <Route Component={BasicLayout}>
              <Route path="*" element={<Page404 />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </>
  );
}

export default App;
