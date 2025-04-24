import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Calendar, AlertTriangle, UserRound } from "lucide-react";
import { Order, OrderStatus, STATUS_COLORS } from "../../types";
import { formatCurrency, formatDate } from "../../utils/helpers";
import { Button } from "../ui/Button"; // Correção do import
import { useOrdersStore } from "../../store/orderStore";

interface OrderDetailsProps {
  order: Order;
}

export const OrderDetails: React.FC<OrderDetailsProps> = ({ order }) => {
  const { updateOrderStatus, isLoading } = useOrdersStore();

  const handleStatusChange = (status: OrderStatus) => {
    updateOrderStatus(order.id, status);
  };

  const statusActions: {
    status: OrderStatus;
    label: string;
    disabled: boolean;
  }[] = [
    {
      status: "pending",
      label: "Mark as Pending",
      disabled:
        order.status === "pending" ||
        order.status === "cancelled" ||
        order.status === "delivered",
    },
    {
      status: "preparing",
      label: "Mark as Preparing",
      disabled:
        order.status === "preparing" ||
        order.status === "cancelled" ||
        order.status === "delivered",
    },
    {
      status: "ready",
      label: "Mark as Ready",
      disabled:
        order.status === "ready" ||
        order.status === "cancelled" ||
        order.status === "delivered" ||
        order.status === "pending",
    },
    {
      status: "delivered",
      label: "Mark as Delivered",
      disabled:
        order.status === "delivered" ||
        order.status === "cancelled" ||
        order.status === "pending",
    },
    {
      status: "cancelled",
      label: "Cancel Order",
      disabled: order.status === "cancelled" || order.status === "delivered",
    },
  ];

  return (
    <motion.div
      className="animate-slide-in"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          Order Details
        </h2>
        <motion.span
          className={`${
            STATUS_COLORS[order.status]
          } text-xs px-2 py-1 rounded-full`}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
        >
          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
        </motion.span>
      </div>

      <motion.div
        className="p-4 mb-4 bg-white rounded-lg dark:bg-gray-800 shadow-soft"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">
              Table {order.tableNumber}
            </h3>
            {order.customerName && (
              <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
                <UserRound size={14} className="mr-1" />
                {order.customerName}
              </div>
            )}
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Order #{order.id.split("-")[0]}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <Calendar size={14} className="mr-1.5" />
            <span>
              {formatDate(order.createdAt, {
                dateStyle: "medium",
                timeStyle: undefined,
              })}
            </span>
          </div>
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <Clock size={14} className="mr-1.5" />
            <span>
              {formatDate(order.createdAt, {
                dateStyle: undefined,
                timeStyle: "short",
              })}
            </span>
          </div>
        </div>

        <AnimatePresence>
          {order.specialInstructions && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="p-3 mb-4 border-l-4 border-yellow-400 bg-yellow-50 dark:bg-yellow-900/30 dark:border-yellow-700"
            >
              <div className="flex">
                <AlertTriangle
                  size={16}
                  className="text-yellow-400 dark:text-yellow-500 mr-2 flex-shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-sm font-medium text-yellow-700 dark:text-yellow-300">
                    Special Instructions
                  </p>
                  <p className="text-sm text-yellow-600 dark:text-yellow-400 mt-0.5">
                    {order.specialInstructions}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        className="p-4 mb-4 bg-white rounded-lg dark:bg-gray-800 shadow-soft"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="mb-3 font-medium text-gray-900 dark:text-white">
          Order Items
        </h3>

        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <AnimatePresence>
            {order.items.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="py-3"
              >
                <div className="flex justify-between">
                  <div>
                    <span className="text-gray-900 dark:text-white">
                      {item.quantity}× {item.name}
                    </span>
                    {item.notes && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                        {item.notes}
                      </p>
                    )}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {formatCurrency(item.price * item.quantity)}
                  </span>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">Subtotal</span>
            <span className="text-gray-700 dark:text-gray-300">
              {formatCurrency(order.total)}
            </span>
          </div>
          <motion.div
            className="flex justify-between mt-2 text-base font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-gray-900 dark:text-white">Total</span>
            <span className="text-gray-900 dark:text-white">
              {formatCurrency(order.total)}
            </span>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="p-4 bg-white rounded-lg dark:bg-gray-800 shadow-soft"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="mb-3 font-medium text-gray-900 dark:text-white">
          Actions
        </h3>

        <div className="space-y-2">
          <AnimatePresence>
            {statusActions.map((action, index) => (
              <motion.div
                key={action.status}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  variant={
                    action.status === "cancelled" ? "outline" : "primary"
                  }
                  size="sm"
                  fullWidth
                  disabled={action.disabled}
                  isLoading={isLoading}
                  onClick={() => handleStatusChange(action.status)}
                  className={
                    action.status === "cancelled"
                      ? "text-red-600 border-red-200 hover:bg-red-50 dark:text-red-400 dark:border-red-800 dark:hover:bg-red-900/30"
                      : ""
                  }
                >
                  {action.label}
                </Button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};
