import { mergeStyles } from "@fluentui/react";

export const pizzaSectionStyles = mergeStyles({
  margin: "30px 5% 0px",
  cursor: "default",
});

export const sectionContainerStyles = mergeStyles({
  margin: "30px 5% 60px",
  cursor: "default",
});

export const orderStyles = (i: number, stagesHeader: string[]) =>
  mergeStyles({
    border: "2px solid black",
    width: "30%",
    textAlign: "center",
    borderRadius:
      i === 0
        ? "6px 0 0 6px"
        : i === stagesHeader.length - 1
        ? "0 6px 6px 0"
        : undefined,
    borderLeft: i !== 0 ? 0 : "2px solid black",
    cursor: "default",
    minHeight: 100,
    height: "auto",
  });

export const mainSectionStyles = mergeStyles({
  margin: "30px 5% 0px",
  cursor: "default",
});

export const tableStyles = mergeStyles({
  margin: "30px 5% 0px",
  width: "90%",
  borderCollapse: "collapse",

  border: "2px solid black",
});

export const headerStyles = (i: number) =>
  mergeStyles({
    border: "2px solid black",
    width: "30%",
    padding: 5,
    borderLeft: i !== 0 ? 0 : "2px solid black",
    cursor: "default",
  });

export const rowDataStyles = mergeStyles({
  border: "1px solid black",
  padding: 4,
  cursor: "default",
});

export const totalDataStyles = (isBorderRight?: boolean) =>
  mergeStyles({
    border: "2px solid black",
    padding: 5,
    cursor: "default",
    borderRight: isBorderRight ? 0 : undefined,
  });

export const emptyDataStyles = mergeStyles({
  borderTop: "2px solid black",
  padding: 5,
});

export const goToPlaceOrderStyles = mergeStyles({
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
  marginTop: 30,
});
