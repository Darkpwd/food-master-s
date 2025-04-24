import { create } from "zustand";
import { AuthState, User } from "../types";
import { MOCK_USERS } from "../utils/mockData";

interface AuthStore extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,

  login: async (email: string, password: string) => {
    set({ isLoading: true });

    // Simulate API call
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        // In a real app, you'd validate credentials against a backend
        // For now, we'll just check if the email matches one of our mock users
        const user = MOCK_USERS.find(
          (user) => user.email.toLowerCase() === email.toLowerCase()
        );

        if (user) {
          set({ user, isAuthenticated: true, isLoading: false });
          // Store in session storage for persistence
          sessionStorage.setItem("user", JSON.stringify(user));
          resolve(true);
        } else {
          set({ isLoading: false });
          resolve(false);
        }
      }, 800); // Simulate network delay
    });
  },

  logout: () => {
    // Clear user from store and session storage
    set({ user: null, isAuthenticated: false });
    sessionStorage.removeItem("user");
  },
}));

// Initialize auth state from session storage
export const initAuthStore = () => {
  const storedUser = sessionStorage.getItem("user");
  if (storedUser) {
    try {
      const user = JSON.parse(storedUser) as User;
      useAuthStore.setState({ user, isAuthenticated: true });
    } catch (error) {
      console.error("Failed to parse stored user:", error);
      sessionStorage.removeItem("user");
    }
  }
};
