import Navbar from "./components/Navbar"
import {Routes, Route} from "react-router-dom";
import LoginScreen  from "./auth/LoginPage";
import ResetPasswordPage from "./auth/ResetPasswordPage";
import Footer from "./components/Footer";
import { useAuth } from './auth/AuthProvider';
import Dashboard from "./pages/Dashboard/Dashboard";
import Download from "./pages/Download/Download";

function App() {
  const { user, loading } = useAuth();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={
            <div className="flex flex-1 justify-center items-center bg-gray-100">
              <p>Page to completed shortly</p>
            </div>
          } />

          <Route path="/pricing" element={
            <div className="flex flex-1 justify-center items-center bg-gray-100">
              <p>Page to completed shortly</p>
            </div>
          } />

          <Route path="/account" element={
            <div className="flex flex-1 justify-center items-center bg-gray-100">
              { user ? <Dashboard /> : <LoginScreen />}
            </div>
          } />
          <Route path="/download" element={
            <div className="flex flex-1 justify-center items-center bg-gray-100">
              <Download />
            </div>
            
          } />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
