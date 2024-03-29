import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  IOrderDetailsProps,
  mainSectionHeader,
  stagesHeader,
} from "./OrdersDetailsPage.types";
import OrderCard from "../OrderCard/OrderCard";
import { IPizzaOrder } from "../PizzaOrderForm/PizzaOrderForm.types";
import { Stack } from "@fluentui/react";
import { formatTime } from "../../helper";
import {
  emptyDataStyles,
  goToPlaceOrderStyles,
  headerStyles,
  mainSectionStyles,
  orderStyles,
  pizzaSectionStyles,
  rowDataStyles,
  sectionContainerStyles,
  tableStyles,
  totalDataStyles,
} from "./OrdersDetailsPage.styles";

const OrdersDetailsPage = (props: IOrderDetailsProps): JSX.Element => {
  const navigate = useNavigate();

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const getTimerForOrder = (order: IPizzaOrder, isTotal?: boolean) => {
    const { placementTime, stageName, newPlacementDate } = order;

    if (stageName === stagesHeader[3]) {
      return order.totalTime;
    }
    if (isTotal) {
      const currentTime = new Date();
      const differenceInSeconds = Math.floor(
        (currentTime.getTime() - placementTime.getTime()) / 1000
      );
      return differenceInSeconds;
    } else {
      const currentTime = new Date();
      const differenceInSeconds = Math.floor(
        (currentTime.getTime() - newPlacementDate.getTime()) / 1000
      );
      return differenceInSeconds;
    }
  };

  const handleTimerUpdate = (orderId: string) => {
    const updatedOrderData = props.orderData.map((order) => {
      if (order.orderId === orderId) {
        return { ...order, timer: order.timer + 1 };
      }
      return order;
    });
    props.setOrderData(updatedOrderData);
  };

  const handleStageChange = (order: IPizzaOrder, index: number) => {
    const updatedOrderData = props.orderData.map((data) => {
      if (data.orderId === order.orderId) {
        return {
          ...data,
          timer: 0,
          stageName: stagesHeader[index + 1],
          readyToPicked: stagesHeader[index] === stagesHeader[2],
          Picked: stagesHeader[index] === stagesHeader[2],
          newPlacementDate: new Date(),
          totalTime: getTimerForOrder(order) + order.totalTime,
        };
      }
      return data;
    });

    props.setOrderData(updatedOrderData);
  };

  const handleOrderClickToMove = (order: IPizzaOrder, index: number) => {
    handleTimerUpdate(order.orderId);
    handleStageChange(order, index);
  };

  const handleCancelOrder = (order: IPizzaOrder) => {
    const updatedOrderData = props.orderData.filter(
      (data) => data.orderId !== order.orderId
    );
    props.setOrderData(updatedOrderData);
  };

  const getDelayTimer = (size: string) => {
    if (size === "Large") {
      return 300;
    }
    if (size === "Medium") {
      return 240;
    } else {
      return 180;
    }
  };

  return (
    <>
      <h3 className={pizzaSectionStyles}>Pizza Stages Section</h3>
      <Stack horizontal className={sectionContainerStyles}>
        {stagesHeader.map((stage, i) => (
          <div className={orderStyles(i, stagesHeader)} key={i}>
            {stage}
            {props.orderData.map((data) => {
              return (
                <>
                  {data.stageName === stage && (
                    <OrderCard
                      key={data.orderId} // Ensure each card has a unique key
                      timer={getTimerForOrder(data)}
                      orderId={data.orderId}
                      readyToPick={data.readyToPicked}
                      handleClickToMove={() => handleOrderClickToMove(data, i)}
                      delayTimer={getDelayTimer(data.data.size)}
                    />
                  )}
                </>
              );
            })}
          </div>
        ))}
      </Stack>

      <h3 className={mainSectionStyles}>Main Section</h3>
      <table className={tableStyles}>
        <thead>
          <tr>
            {mainSectionHeader.map((header, i) => (
              <th key={i} className={headerStyles(i)}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.orderData.map((row, index) => (
            <tr key={index}>
              <td className={rowDataStyles}>{`Order ID: ${row.orderId}`}</td>
              <td className={rowDataStyles}>{row.stageName}</td>
              <td className={rowDataStyles}>
                {formatTime(getTimerForOrder(row, true))}
              </td>
              <td
                className={rowDataStyles}
                onClick={() => {
                  handleCancelOrder(row);
                }}
              >
                {row.stageName === stagesHeader[2] ||
                row.stageName === stagesHeader[3] ? null : (
                  <div style={{ cursor: "pointer" }}>Cancel Button</div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className={totalDataStyles()}>Total order delivered</td>
            <td className={totalDataStyles(true)}>
              {props.orderData
                .filter((data) => data.stageName === stagesHeader[3])
                .length.toString()
                .padStart(3, "0")}
            </td>
            <td className={emptyDataStyles}></td>
            <td className={emptyDataStyles}></td>
          </tr>
        </tfoot>
      </table>
      <button onClick={() => navigate("/")} className={goToPlaceOrderStyles}>
        Back To Place Order
      </button>
    </>
  );
};

export default OrdersDetailsPage;
