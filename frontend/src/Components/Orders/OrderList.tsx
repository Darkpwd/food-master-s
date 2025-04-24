import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Clock, ChevronRight, ChevronLeft } from "lucide-react";
import { OrderStatus, STATUS_COLORS } from "../../types";
import { formatCurrency, timeAgo } from "../../utils/helpers";
import { useOrdersStore } from "../../store/orderStore";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { OrderDetails } from "./OrderDetails";

export const OrdersList: React.FC = () => {
  const {
    fetchOrders,
    filteredOrders,
    isLoading,
    filter,
    setFilter,
    selectOrder,
    selectedOrder,
  } = useOrdersStore();

  const [searchQuery, setSearchQuery] = useState(filter.searchQuery);
  const [showMobileDetails, setShowMobileDetails] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const statusOptions: { value: OrderStatus | "all"; label: string }[] = [
    { value: "all", label: "All Orders" },
    { value: "pending", label: "Pending" },
    { value: "preparing", label: "Preparing" },
    { value: "ready", label: "Ready" },
    { value: "delivered", label: "Delivered" },
    { value: "cancelled", label: "Cancelled" },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFilter(filter.status, searchQuery);
  };

  const handleStatusChange = (status: OrderStatus | "all") => {
    setFilter(status, searchQuery);
  };

  const handleSelectOrder = (order: any) => {
    selectOrder(order);
    setShowMobileDetails(true);
  };

  const handleBackToList = () => {
    setShowMobileDetails(false);
  };

  return (
    <div className="flex flex-col h-full md:flex-row md:min-h-[calc(100vh-4rem)] animate-fade-in">
      <motion.div
        className={`w-full md:w-2/3 lg:w-3/5 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 ${
          showMobileDetails ? "hidden md:block" : "block"
        }`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Orders
          </h2>

          <form onSubmit={handleSearchSubmit} className="mt-4">
            <Input
              type="search"
              placeholder="Search orders..."
              value={searchQuery}
              onChange={handleSearchChange}
              icon={<Search size={18} />}
              className="w-full"
            />
          </form>

          <div className="flex flex-wrap items-center gap-2 mt-4">
            <div className="flex items-center mr-2 text-sm text-gray-500 dark:text-gray-400">
              <Filter size={16} className="mr-1" />
              Filter:
            </div>

            <AnimatePresence>
              {statusOptions.map((option) => (
                <motion.button
                  key={option.value}
                  onClick={() => handleStatusChange(option.value)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full ${
                    filter.status === option.value
                      ? "bg-primary-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {option.label}
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[calc(100vh-12rem)] md:max-h-[calc(100vh-16rem)]">
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-8 h-8 border-t-2 border-b-2 rounded-full animate-spin border-primary-500"></div>
            </div>
          ) : filteredOrders.length === 0 ? (
            <div className="py-20 text-center">
              <Clock size={48} className="mx-auto mb-4 text-gray-400" />
              <p className="text-gray-500 dark:text-gray-400">
                No orders found
              </p>
            </div>
          ) : (
            <AnimatePresence>
              <motion.ul
                className="divide-y divide-gray-200 dark:divide-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {filteredOrders.map((order, index) => (
                  <motion.li
                    key={order.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 hover:bg-gray-50 dark:hover:bg-gray-750 cursor-pointer transition-colors ${
                      selectedOrder?.id === order.id
                        ? "bg-gray-100 dark:bg-gray-700"
                        : ""
                    }`}
                    onClick={() => handleSelectOrder(order)}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center">
                          <span className="font-medium text-gray-900 dark:text-white">
                            Table {order.tableNumber}
                          </span>
                          <span
                            className={`ml-2 ${
                              STATUS_COLORS[order.status]
                            } text-xs px-2 py-0.5 rounded-full`}
                          >
                            {order.status.charAt(0).toUpperCase() +
                              order.status.slice(1)}
                          </span>
                        </div>

                        {order.customerName && (
                          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            {order.customerName}
                          </p>
                        )}

                        <div className="flex items-center mt-2 text-xs text-gray-500 dark:text-gray-400">
                          <Clock size={14} className="mr-1" />
                          {timeAgo(order.createdAt)}
                        </div>
                      </div>

                      <div className="flex items-center text-right">
                        <div>
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {formatCurrency(order.total)}
                          </span>
                          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                            {order.items.length} item
                            {order.items.length !== 1 ? "s" : ""}
                          </p>
                        </div>
                        <ChevronRight
                          className="ml-2 text-gray-400"
                          size={20}
                        />
                      </div>
                    </div>

                    <div className="mt-2">
                      <p className="text-sm text-gray-600 truncate dark:text-gray-300">
                        {order.items
                          .map((item) => `${item.quantity}× ${item.name}`)
                          .join(", ")}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          )}
        </div>
      </motion.div>

      <motion.div
        className={`w-full md:w-1/3 lg:w-2/5 bg-gray-50 dark:bg-gray-900 ${
          showMobileDetails ? "block" : "hidden md:block"
        }`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-4">
          {showMobileDetails && (
            <button
              onClick={handleBackToList}
              className="flex items-center mb-4 text-gray-600 md:hidden dark:text-gray-300"
            >
              <ChevronLeft size={20} className="mr-1" />
              Back to Orders
            </button>
          )}

          {selectedOrder ? (
            <OrderDetails order={selectedOrder} />
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-6 text-center">
              <div className="p-3 mb-4 bg-gray-100 rounded-full dark:bg-gray-800">
                <Clock size={32} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                No Order Selected
              </h3>
              <p className="max-w-md mt-2 text-sm text-gray-500 dark:text-gray-400">
                Select an order from the list to view its details and manage it.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
