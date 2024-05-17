import React from "react";
import { TooltipHost, DirectionalHint } from "@fluentui/react";
import { formatTime } from "../../helper";
import { IOrderCardProps } from "./OrderCard.types";
import {
  orderCardContainerStyles,
  orderCardHeaderStyles,
  orderCardTimerStyles,
  orderCardPickedStyles,
  orderCardButtonStyles,
} from "./OrderCard.styles";

const OrderCard = (props: IOrderCardProps): JSX.Element => {
  const { data, readyToPick, timer, delayTimer, orderId, handleClickToMove } =
    props;

  const orderDetails = (): JSX.Element => {
    return (
      <div
        style={{
          width: 100,
          padding: 10,
          textAlign: "center",
          fontWeight: 500,
        }}
      >
        <div style={{ fontSize: 14, marginBottom: 5 }}>
          Size: {data.data.size}
        </div>
        <div style={{ fontSize: 14, marginBottom: 5 }}>
          Type: {data.data.type}
        </div>
        <div style={{ fontSize: 14 }}>Base: {data.data.base}</div>
      </div>
    );
  };

  return (
    <TooltipHost
      content={orderDetails()}
      directionalHint={DirectionalHint.bottomCenter}
    >
      <div className={orderCardContainerStyles(readyToPick, timer, delayTimer)}>
        <div
          className={orderCardHeaderStyles(readyToPick, timer, delayTimer)}
        >{`Order ${orderId}`}</div>
        {!readyToPick && (
          <div className={orderCardTimerStyles(readyToPick, timer, delayTimer)}>
            {formatTime(timer)}
          </div>
        )}
        {readyToPick ? (
          <div className={orderCardPickedStyles}>Picked</div>
        ) : (
          <button className={orderCardButtonStyles} onClick={handleClickToMove}>
            Next
          </button>
        )}
      </div>
    </TooltipHost>
  );
};

export default OrderCard;
