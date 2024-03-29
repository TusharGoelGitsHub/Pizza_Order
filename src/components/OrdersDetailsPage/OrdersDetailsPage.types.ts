import { IPizzaOrder } from "../PizzaOrderForm/PizzaOrderForm.types";

export interface IOrderDetailsProps {
  orderData: IPizzaOrder[];
  setOrderData: (order: IPizzaOrder[]) => void;
}

export const stagesHeader = [
  "Order Placed",
  "Order in Making",
  "Order Ready",
  "Order Picked",
];

export const mainSectionHeader = [
  "Order Id",
  "Stage",
  "Total time spent (time from order placed)",
  "Action",
];
