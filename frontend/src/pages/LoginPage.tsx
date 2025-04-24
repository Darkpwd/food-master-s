import React, { useEffect } from "react";
import { ChefHat } from "lucide-react";
import { LoginForm } from "../Components/auth/LoginForm";

export const LoginPage: React.FC = () => {
  useEffect(() => {
    // Update page title
    document.title = "Sign In - Restaurant Management";
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 dark:bg-gray-900 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <ChefHat className="h-14 w-14 text-primary-800 dark:text-primary-500" />
          </div>
          <h1 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">
            Mater's Food
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Restaurant Management System
          </p>
        </div>

        <div className="px-4 py-8 bg-white dark:bg-gray-800 shadow-medium sm:rounded-lg sm:px-10">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
