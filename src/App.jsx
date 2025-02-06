import "./App.css";
import DashboardLayout from "./components/layout/DashboardLayout";
import PreAuth from "./pages/pre-auth/PreAuth";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout children={"Default Page"} />} />
      <Route
        path="/pre-auth-requests"
        element={<DashboardLayout children={<PreAuth />} />}
      />
    </Routes>
  );
}

export default App;
