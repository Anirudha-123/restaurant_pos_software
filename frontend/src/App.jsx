import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoardLayout from "./components/DashBoardLayout";
import StaffOrder from "./pages/StaffOrder";
import { StaffOrderContextProvider } from "./context/StaffOrder";

function App() {
  return (
    <StaffOrderContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<DashBoardLayout />}>
          <Route path="/staff" element={<StaffOrder />} />
        </Route>
      </Routes>
    </Router>
    </StaffOrderContextProvider>
  );
}

export default App;
