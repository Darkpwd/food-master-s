// src/App.tsx
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { OrdersPage } from "./pages/OrdersPage";
import { NavbarLogin } from "./Components/Layout/NavbarLogin"; // Auth system Navbar
import { AuthGuard } from "./AuthGuard";
import { initAuthStore } from "./store/authStore";

// Import institucional layout
import { HomeLayout } from "./pages/HomeIntuitional"; // Vai conter Hero, Menu, etc.

export function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#F8F4E3] dark:bg-[#1A1814] font-sans text-gray-800 dark:text-gray-100 antialiased scroll-smooth transition-colors duration-200">
        <Routes>
          <Route path="/" element={<HomeLayout />} />

          {/* 🔐 Login */}
          <Route
            path="/login"
            element={
              <AuthGuard requireAuth={false}>
                <LoginPage />
              </AuthGuard>
            }
          />

          {/* 📦 Dashboard */}
          <Route
            path="/orders"
            element={
              <AuthGuard>
                <div className="flex flex-col min-h-screen">
                  <NavbarLogin />
                  <main className="flex-1">
                    <OrdersPage />
                  </main>
                </div>
              </AuthGuard>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}
