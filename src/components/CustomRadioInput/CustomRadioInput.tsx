import React from "react";
import {
  inputContainerStyles,
  labelHeadingStyles,
} from "./CustomRadioInput.styles";
import { ICustomRadioInputProps } from "./CustomRadioInput.types";

const CustomRadioInput = (props: ICustomRadioInputProps): JSX.Element => {
  return (
    <label className={inputContainerStyles}>
      <div className={labelHeadingStyles}>{props.labelHeading} :</div>
      {props.inputOptions.map((option) => {
        return (
          <label key={option} style={{ cursor: "pointer" }}>
            <input
              type="radio"
              name={props.labelHeading.toLowerCase()} // Unique name for each radio group
              value={option}
              checked={props.checkedValue === option} // Check if this option is selected
              onChange={props.handleRadioCheck}
              disabled={props.isDisabled}
              style={{ cursor: "pointer" }}
            />
            {option}
          </label>
        );
      })}
    </label>
  );
};

export default CustomRadioInput;
