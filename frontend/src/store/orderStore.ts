import { create } from "zustand";
import { Order, OrderStatus } from "../types";
import { MOCK_ORDERS } from "../utils/mockData";

interface OrdersState {
  orders: Order[];
  filteredOrders: Order[];
  isLoading: boolean;
  filter: {
    status: OrderStatus | "all";
    searchQuery: string;
  };
  selectedOrder: Order | null;
}

interface OrdersStore extends OrdersState {
  fetchOrders: () => Promise<void>;
  setFilter: (status: OrderStatus | "all", searchQuery?: string) => void;
  updateOrderStatus: (orderId: string, status: OrderStatus) => Promise<void>;
  selectOrder: (order: Order | null) => void;
}

export const useOrdersStore = create<OrdersStore>((set, get) => ({
  orders: [],
  filteredOrders: [],
  isLoading: false,
  filter: {
    status: "all",
    searchQuery: "",
  },
  selectedOrder: null,

  fetchOrders: async () => {
    set({ isLoading: true });

    // Simulate API call
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        set({
          orders: MOCK_ORDERS,
          filteredOrders: MOCK_ORDERS,
          isLoading: false,
        });
        resolve();
      }, 800);
    });
  },

  setFilter: (status, searchQuery) => {
    const { orders, filter } = get();
    const newSearchQuery =
      searchQuery !== undefined ? searchQuery : filter.searchQuery;

    set({ filter: { status, searchQuery: newSearchQuery } });

    // Apply filters
    let filtered = [...orders];

    // Filter by status
    if (status !== "all") {
      filtered = filtered.filter((order) => order.status === status);
    }

    // Filter by search query
    if (newSearchQuery) {
      const query = newSearchQuery.toLowerCase();
      filtered = filtered.filter(
        (order) =>
          order.customerName?.toLowerCase().includes(query) ||
          order.items.some((item) => item.name.toLowerCase().includes(query)) ||
          order.id.toLowerCase().includes(query) ||
          order.tableNumber.toString().includes(query)
      );
    }

    set({ filteredOrders: filtered });
  },

  updateOrderStatus: async (orderId, status) => {
    set({ isLoading: true });

    // Simulate API call
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const { orders, filter, selectedOrder } = get();

        // Update order in the list
        const updatedOrders = orders.map((order) =>
          order.id === orderId
            ? {
                ...order,
                status,
                updatedAt: new Date().toISOString(),
              }
            : order
        );

        // Update selected order if it's the one being modified
        let updatedSelectedOrder = selectedOrder;
        if (selectedOrder && selectedOrder.id === orderId) {
          updatedSelectedOrder = {
            ...selectedOrder,
            status,
            updatedAt: new Date().toISOString(),
          };
        }

        set({
          orders: updatedOrders,
          isLoading: false,
          selectedOrder: updatedSelectedOrder,
        });

        // Re-apply filters
        get().setFilter(filter.status);

        resolve();
      }, 500);
    });
  },

  selectOrder: (order) => {
    set({ selectedOrder: order });
  },
}));
