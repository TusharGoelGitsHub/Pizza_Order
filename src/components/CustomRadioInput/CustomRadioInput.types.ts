export interface ICustomRadioInputProps {
  labelHeading: string;
  isDisabled?: boolean;
  inputOptions: string[];
  handleRadioCheck: (event: any) => void;
  checkedValue: string;
}
