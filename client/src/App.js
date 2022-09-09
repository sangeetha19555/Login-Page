import "./App.css";
import "antd/dist/antd.less"; // or 'antd/dist/antd.less'
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

export function ProtectedRoute(props) {
  if (localStorage.getItem("userInfo")) {
    return props.children;
  } else {
    return <Navigate to="/mainpage" />;
  }
}
