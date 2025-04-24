import { Order, User } from "../types";

export const MOCK_USERS: User[] = [
  {
    id: "user-1",
    name: "John Smith",
    email: "admin@restaurant.com",
    role: "admin",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    id: "user-2",
    name: "Sarah Williams",
    email: "manager@restaurant.com",
    role: "manager",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    id: "user-3",
    name: "Mike Johnson",
    email: "staff@restaurant.com",
    role: "staff",
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
];

export const MOCK_ORDERS: Order[] = [
  {
    id: "order-1",
    tableNumber: 5,
    items: [
      { id: "item-1", name: "Pasta Carbonara", quantity: 2, price: 18.99 },
      { id: "item-2", name: "House Salad", quantity: 1, price: 8.99 },
      { id: "item-3", name: "Tiramisu", quantity: 1, price: 9.99 },
    ],
    status: "pending",
    total: 56.96,
    createdAt: new Date(Date.now() - 15 * 60000).toISOString(),
    updatedAt: new Date(Date.now() - 15 * 60000).toISOString(),
    specialInstructions: "No garlic in the pasta please",
    customerName: "Jennifer Lawrence",
  },
  {
    id: "order-2",
    tableNumber: 8,
    items: [
      { id: "item-4", name: "Filet Mignon", quantity: 1, price: 32.99 },
      { id: "item-5", name: "Lobster Bisque", quantity: 1, price: 14.99 },
      { id: "item-6", name: "Chocolate Lava Cake", quantity: 1, price: 10.99 },
    ],
    status: "preparing",
    total: 58.97,
    createdAt: new Date(Date.now() - 25 * 60000).toISOString(),
    updatedAt: new Date(Date.now() - 20 * 60000).toISOString(),
    assignedTo: "user-3",
  },
  {
    id: "order-3",
    tableNumber: 12,
    items: [
      { id: "item-7", name: "Margherita Pizza", quantity: 1, price: 16.99 },
      { id: "item-8", name: "Calamari", quantity: 1, price: 13.99 },
      { id: "item-9", name: "Cheesecake", quantity: 2, price: 9.99 },
    ],
    status: "ready",
    total: 50.96,
    createdAt: new Date(Date.now() - 40 * 60000).toISOString(),
    updatedAt: new Date(Date.now() - 5 * 60000).toISOString(),
    assignedTo: "user-2",
  },
  {
    id: "order-4",
    tableNumber: 3,
    items: [
      { id: "item-10", name: "Chicken Parmesan", quantity: 1, price: 19.99 },
      { id: "item-11", name: "Garlic Bread", quantity: 1, price: 6.99 },
      { id: "item-12", name: "Tiramisu", quantity: 1, price: 9.99 },
    ],
    status: "delivered",
    total: 36.97,
    createdAt: new Date(Date.now() - 60 * 60000).toISOString(),
    updatedAt: new Date(Date.now() - 30 * 60000).toISOString(),
  },
  {
    id: "order-5",
    tableNumber: 9,
    items: [
      { id: "item-13", name: "Vegetarian Risotto", quantity: 1, price: 17.99 },
      { id: "item-14", name: "Bruschetta", quantity: 1, price: 11.99 },
    ],
    status: "cancelled",
    total: 29.98,
    createdAt: new Date(Date.now() - 90 * 60000).toISOString(),
    updatedAt: new Date(Date.now() - 85 * 60000).toISOString(),
    specialInstructions: "Customer changed their mind",
  },
];
