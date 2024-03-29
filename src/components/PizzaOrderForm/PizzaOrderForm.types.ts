export interface IPizzaOrderFormProps {
  orderData: IPizzaOrder[];
  setOrderData: (order: IPizzaOrder[]) => void;
  setOrderIdCounter: (id: number) => void;
  orderIdCounter: number;
}

export interface IPizzaOrderDetails {
  type: string;
  size: string;
  base: string;
  orderId: string;
}

export interface IPizzaOrder {
  data: IPizzaOrderDetails;
  timer: number;
  stageName: string;
  totalTime: number;
  readyToPicked: boolean;
  orderId: string;
  Picked: boolean;
  placementTime: Date;
  newPlacementDate: Date;
}
