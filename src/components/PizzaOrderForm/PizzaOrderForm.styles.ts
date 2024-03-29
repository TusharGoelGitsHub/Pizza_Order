import { mergeStyles } from "@fluentui/react";

export const FormContainerStyles = mergeStyles({
  width: "45%",
  height: 300,
  background: "#E9E6DD",
  margin: "40px auto 50px",
  padding: "20px 2%",
  borderRadius: 8,
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
});

export const headerStyles = mergeStyles({
  color: "#A41F13",
  margin: "0 0 4% 0",
  fontSize: 34,
  fontWeight: 500,
  textAlign: "center",
});

export const buttonStyles = (isDisabled: boolean) =>
  mergeStyles({
    width: "90%",
    margin: "0px 5%",
    height: "40px",
    borderRadius: "6px",
    border: "0px",
    background: isDisabled ? "lightGrey" : "burlywood",
    color: isDisabled ? undefined : "rgb(164, 31, 19)",
    fontSize: "20px",
    fontWeight: "bold",
    cursor: isDisabled ? "default" : "pointer",
  });

export const goToSectionStyles = mergeStyles({
  textAlign: "center",
  justifyContent: "center",
  margin: "auto",
  display: "flex",
  height: 50,
  borderRadius: 8,
  background: "burlywood",
  alignItems: "center",
  width: "50%",
  fontSize: 20,
  border: "none",
  marginBottom: 30,
  cursor: "pointer",
});
