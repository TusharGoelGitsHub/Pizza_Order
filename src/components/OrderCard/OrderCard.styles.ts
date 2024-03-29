import { mergeStyles } from "@fluentui/react";

export const orderCardContainerStyles = (
  readyToPick: boolean,
  timer: number,
  delayTimer: number
) =>
  mergeStyles({
    width: "60%",
    border: "1px solid black",
    borderRadius: 10,
    margin: "25px auto",
    height: readyToPick ? 70 : 100,
    background: timer > delayTimer && !readyToPick ? "red" : "white",
  });

export const orderCardHeaderStyles = (
  readyToPick: boolean,
  timer: number,
  delayTimer: number
) =>
  mergeStyles({
    margin: "8px auto 0",

    cursor: "default",
    color: timer > delayTimer && !readyToPick ? "white" : "black",
  });

export const orderCardTimerStyles = (
  readyToPick: boolean,
  timer: number,
  delayTimer: number
) =>
  mergeStyles({
    margin: "5px auto 0",
    cursor: "default",
    color: timer > delayTimer && !readyToPick ? "white" : "black",
  });

export const orderCardPickedStyles = mergeStyles({
  margin: "8px auto",
  cursor: "default",
});

export const orderCardButtonStyles = mergeStyles({
  margin: "8px auto",
  width: "60%",
  background: "white",
  border: "1.5px solid black",
  height: 25,
  cursor: "pointer",
});
