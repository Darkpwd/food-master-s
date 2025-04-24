import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChefHat, Menu, X, LogOut, User } from "lucide-react";
import { useAuthStore } from "../../store/authStore";
import { Button } from "../ui/Button";

export const NavbarLogin: React.FC = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
    setIsMenuOpen(false);
  };

  return (
    <nav className="transition-colors duration-200 bg-white shadow-sm dark:bg-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center flex-shrink-0">
              <ChefHat className="h-8 w-8 text-[#7D2E33] dark:text-[#e35563]" />
              <span className="ml-2 font-serif text-xl font-medium text-gray-900 dark:text-white">
                Master's Food
              </span>
            </Link>

            {isAuthenticated && (
              <div className="hidden ml-10 md:block">
                <div className="flex items-baseline space-x-4">
                  <Link
                    to="/orders"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-[#7D2E33] hover:bg-gray-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Orders
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <button
                className="rounded-full p-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-[#7D2E33]"
                aria-label="Toggle dark mode"
              ></button>

              {isAuthenticated ? (
                <div className="flex items-center">
                  <div className="flex flex-col items-end mr-3">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {user?.name}
                    </span>
                    <span className="text-xs text-gray-500 capitalize dark:text-gray-400">
                      {user?.role}
                    </span>
                  </div>

                  {user?.avatar ? (
                    <img
                      className="object-cover w-8 h-8 rounded-full"
                      src={user.avatar}
                      alt={user.name}
                    />
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-[#fbd0d5] dark:bg-[#b02136] flex items-center justify-center">
                      <span className="text-[#7D2E33] dark:text-[#fbd0d5] font-medium">
                        {user?.name.charAt(0)}
                      </span>
                    </div>
                  )}

                  <Button
                    variant="ghost"
                    className="ml-2"
                    onClick={handleLogout}
                    aria-label="Logout"
                  >
                    <LogOut size={18} />
                  </Button>
                </div>
              ) : (
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => navigate("/login")}
                >
                  Sign In
                </Button>
              )}
            </div>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#7D2E33]"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200 sm:px-3 dark:border-gray-700">
            {isAuthenticated && (
              <Link
                to="/orders"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#7D2E33] hover:bg-gray-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Orders
              </Link>
            )}
          </div>

          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
            {isAuthenticated ? (
              <>
                <div className="flex items-center px-5">
                  {user?.avatar ? (
                    <img
                      className="object-cover w-10 h-10 rounded-full"
                      src={user.avatar}
                      alt={user.name}
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-[#fbd0d5] dark:bg-[#b02136] flex items-center justify-center">
                      <span className="text-[#7D2E33] dark:text-[#fbd0d5] font-medium">
                        {user?.name.charAt(0)}
                      </span>
                    </div>
                  )}

                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800 dark:text-white">
                      {user?.name}
                    </div>
                    <div className="text-sm font-medium text-gray-500 capitalize dark:text-gray-400">
                      {user?.role}
                    </div>
                  </div>
                </div>

                <div className="px-2 mt-3 space-y-1">
                  <button
                    className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#7D2E33] hover:bg-gray-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700"
                    onClick={handleLogout}
                  >
                    <LogOut size={18} className="mr-2" />
                    Sign out
                  </button>

                  <button className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#7D2E33] hover:bg-gray-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700"></button>
                </div>
              </>
            ) : (
              <div className="px-5 py-3">
                <Button
                  variant="primary"
                  fullWidth
                  onClick={() => {
                    navigate("/login");
                    setIsMenuOpen(false);
                  }}
                >
                  <User size={18} className="mr-2" />
                  Sign In
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
