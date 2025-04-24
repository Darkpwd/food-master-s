import React, { useEffect } from "react";
import { OrdersList } from "../Components/Orders/OrderList";

export const OrdersPage: React.FC = () => {
  useEffect(() => {
    // Update page title
    document.title = "Orders - Restaurant Management";
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-[calc(100vh-4rem)]">
      <OrdersList />
    </div>
  );
};
