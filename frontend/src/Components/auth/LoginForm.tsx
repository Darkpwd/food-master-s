import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail } from "lucide-react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { useAuthStore } from "../../store/authStore";

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
  general?: string;
}

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { login, isLoading } = useAuthStore();

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const success = await login(formData.email, formData.password);

    if (success) {
      navigate("/orders");
    } else {
      setErrors({ general: "Invalid email or password" });
    }
  };

  // Hint for demo credentials
  const loginHints = [
    { role: "Admin", email: "admin@restaurant.com", password: "password" },
    { role: "Manager", email: "manager@restaurant.com", password: "password" },
    { role: "Staff", email: "staff@restaurant.com", password: "password" },
  ];

  const setDemoCredentials = (email: string) => {
    setFormData({ email, password: "password" });
  };

  return (
    <div className="w-full max-w-md space-y-8 animate-fade-in">
      <div className="text-center">
        <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
          Welcome Back
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Sign in to access the restaurant management system
        </p>
      </div>

      {errors.general && (
        <div
          className="px-4 py-3 text-red-700 border border-red-200 rounded-md bg-red-50 dark:bg-red-900/30 dark:border-red-800 dark:text-red-400"
          role="alert"
        >
          {errors.general}
        </div>
      )}

      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <Input
            label="Email Address"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            icon={<Mail size={18} />}
            error={errors.email}
            required
          />

          <Input
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            icon={<Lock size={18} />}
            error={errors.password}
            required
          />
        </div>

        <div>
          <Button type="submit" fullWidth isLoading={isLoading}>
            Sign In
          </Button>
        </div>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 text-gray-500 bg-[#1A1814] bg[#F8F4E3]">
              Demo Accounts
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 mt-6">
          {loginHints.map((hint) => (
            <div
              key={hint.role}
              className="flex items-center p-3 text-sm transition-colors rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
              onClick={() => setDemoCredentials(hint.email)}
            >
              <div className="flex-1">
                <p className="font-medium">{hint.role}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {hint.email}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                type="button"
                onClick={() => setDemoCredentials(hint.email)}
              >
                Use
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
