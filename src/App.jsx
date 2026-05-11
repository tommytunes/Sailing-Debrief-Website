import Navbar from "./components/Navbar"
import {Routes, Route} from "react-router-dom";
import LoginScreen  from "./auth/LoginPage";
import ResetPasswordPage from "./auth/ResetPasswordPage";
import Footer from "./components/Footer";
import { useAuth } from './auth/AuthProvider';
import Dashboard from "./pages/Dashboard/Dashboard";
import Download from "./pages/Download/Download";
import PricingPage from "./pages/Pricing/PricingPage";
import Features from "./pages/Features/Features";
import GettingStarted from "./pages/GettingStarted/GettingStarted";
import SignUpConfirm from "./pages/SignUpConfirm/SignUpConfirm";

function App() {
  const { user, loading } = useAuth();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col flex-1">
        <Routes>
          <Route path="/" element={
            <div className="flex flex-1 justify-center items-center bg-gray-100 min-h-screen">
              <Features />
            </div>
          } />

          <Route path="/pricing" element={
            <div className="flex justify-center items-center bg-gray-100 min-h-screen">
              {false && <PricingPage />}
            </div>
          } />

          <Route path="/account" element={
            <div className="flex justify-center items-center bg-gray-100 min-h-screen">
              { user ? <Dashboard /> : <LoginScreen />}
            </div>
          } />
          <Route path="/download" element={
            <div className="flex justify-center items-center bg-gray-100 min-h-screen">
              <Download />
            </div>
            
          } />
          <Route path="/reset-password" element={<ResetPasswordPage />} />

          <Route path="/getting-started" element={
            <div className="flex justify-center items-center bg-gray-100 min-h-screen">
              { false && <GettingStarted />}
            </div>
          } />

          <Route path="/signup-confirmed" element={
            <div className="flex justify-center items-center bg-gray-100 min-h-screen">
              <SignUpConfirm />
            </div>
          } />

        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
