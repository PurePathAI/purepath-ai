import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import all components
import PurePathLandingPage from "./components/PurePathLandingPage";
import ReportWastePage from "./components/ReportWastePage";
import HowItWorks from "./components/HowItWorks";
import ResultFrame from "./components/ResultFrame";
import AlertDetails from "./components/AlertDetails";
import DashboardV2 from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<PurePathLandingPage />} />

        {/* Report Waste Page */}
        <Route path="/report" element={<ReportWastePage />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<DashboardV2 />} />


        {/* AI Result Frame - From Capstone */}
        <Route path="/result" element={<ResultFrame />} />

        {/* Alert Details - From Capstone */}
        <Route path="/alert" element={<AlertDetails />} />

        {/* How It Works */}
        <Route path="/how-it-works" element={<HowItWorks />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
