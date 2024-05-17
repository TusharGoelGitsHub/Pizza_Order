import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  IPizzaOrder,
  IPizzaOrderDetails,
  IPizzaOrderFormProps,
} from "./PizzaOrderForm.types";
import {
  FormContainerStyles,
  buttonStyles,
  goToSectionStyles,
  headerStyles,
} from "./PizzaOrderForm.styles";
import CustomRadioInput from "../CustomRadioInput/CustomRadioInput";
import { stagesHeader } from "../OrdersDetailsPage/OrdersDetailsPage.types";

const PizzaOrderForm = (props: IPizzaOrderFormProps): JSX.Element => {
  const [order, setOrder] = useState<IPizzaOrderDetails>({
    type: "",
    size: "",
    base: "",
    orderId: "",
  });

  const [message, setMessage] = useState<string>("");

  const history = useNavigate();

  const handleRadioCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setOrder({
      ...order,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const totalOrders = props.orderData.filter((data) => {
      return data.stageName !== stagesHeader[3];
    });
    if (totalOrders.length >= 10) {
      setMessage("Not taking any order for now");
      return;
    }

    const orderId = generateOrderId(props.orderIdCounter);
    const updatedOrder = {
      ...order,
      orderId: orderId,
    };
    setOrder(updatedOrder);
    props.setOrderIdCounter(props.orderIdCounter + 1);
    const updatedOrderData: IPizzaOrder = {
      data: updatedOrder,
      timer: 0,
      stageName: stagesHeader[0],
      totalTime: 0,
      readyToPicked: false,
      orderId: orderId,
      Picked: false,
      placementTime: new Date(),
      newPlacementDate: new Date(),
    };
    props.setOrderData([...props.orderData, updatedOrderData]);
    setMessage("");
    history("/detailsSection");
  };

  const generateOrderId = (counter: number): string => {
    return counter.toString().padStart(3, "0");
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", cursor: "default" }}>Pizza Shop</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          color: "red",
          cursor: "default",
        }}
      >
        {message}
      </div>
      <form onSubmit={handleSubmit} className={FormContainerStyles}>
        <h2 className={headerStyles}>Place Your Order</h2>
        <CustomRadioInput
          labelHeading="Type"
          inputOptions={["Veg", "Non-Veg"]}
          handleRadioCheck={handleRadioCheck}
          checkedValue={order.type}
        />
        <CustomRadioInput
          labelHeading="Size"
          inputOptions={["Large", "Medium", "Small"]}
          handleRadioCheck={handleRadioCheck}
          checkedValue={order.size}
        />
        <CustomRadioInput
          labelHeading="Base"
          inputOptions={["Thin", "Thick"]}
          handleRadioCheck={handleRadioCheck}
          checkedValue={order.base}
        />

        <button
          type="submit"
          className={buttonStyles(!order.type || !order.size || !order.base)}
          disabled={!order.type || !order.size || !order.base}
        >
          Place Order
        </button>
      </form>
      <button
        onClick={() => {
          history("/detailsSection");
        }}
        className={goToSectionStyles}
      >
        Go To Order Section
      </button>
    </div>
  );
};

export default PizzaOrderForm;
