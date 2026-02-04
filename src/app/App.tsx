import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { APACRevenuePage } from "./pages/APACRevenuePage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";

export default function App() {
  return (
    <div className="min-h-screen bg-background antialiased">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apac-revenue" element={<APACRevenuePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          {/* Catch-all route - redirect any unknown paths to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}