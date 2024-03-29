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
  return (
    <div
      className={orderCardContainerStyles(
        props.readyToPick,
        props.timer,
        props.delayTimer
      )}
    >
      <div
        className={orderCardHeaderStyles(
          props.readyToPick,
          props.timer,
          props.delayTimer
        )}
      >{`Order ${props.orderId}`}</div>
      {!props.readyToPick && (
        <div
          className={orderCardTimerStyles(
            props.readyToPick,
            props.timer,
            props.delayTimer
          )}
        >
          {formatTime(props.timer)}
        </div>
      )}
      {props.readyToPick ? (
        <div className={orderCardPickedStyles}>Picked</div>
      ) : (
        <button
          className={orderCardButtonStyles}
          onClick={() => props.handleClickToMove()}
        >
          Next
        </button>
      )}
    </div>
  );
};
export default OrderCard;
