export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category: "starters" | "mains" | "desserts" | "drinks";
  dietary?: Array<"v" | "vg" | "gf" | "df" | "n">; // v=vegetarian, vg=vegan, gf=gluten-free, df=dairy-free, n=contains nuts
  featured?: boolean;
  ingredients?: string[];
}

export interface Reservation {
  date: Date;
  time: string;
  partySize: number;
  name: string;
  email: string;
  phone: string;
  specialRequests?: string;
}

export interface ChefSpecial {
  id: string;
  name: string;
  description: string;
  image: string;
  ingredients: string[];
}

export interface RestaurantInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: {
    [key: string]: string;
  };
  socialMedia: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

// User related types
export type UserRole = "admin" | "manager" | "staff";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Order related types
export type OrderStatus =
  | "pending"
  | "preparing"
  | "ready"
  | "delivered"
  | "cancelled";

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  notes?: string;
}

export interface Order {
  id: string;
  tableNumber: number;
  items: OrderItem[];
  status: OrderStatus;
  total: number;
  createdAt: string;
  updatedAt: string;
  specialInstructions?: string;
  assignedTo?: string;
  customerName?: string;
}

// Status color mapping
export const STATUS_COLORS: Record<OrderStatus, string> = {
  pending:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  preparing: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  ready: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  delivered: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
  cancelled: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
};
