import { IPizzaOrder } from "../PizzaOrderForm/PizzaOrderForm.types";

export interface IOrderCardProps {
  timer: number;
  orderId: string;
  readyToPick: boolean;
  handleClickToMove: () => void;
  delayTimer: number;
}
