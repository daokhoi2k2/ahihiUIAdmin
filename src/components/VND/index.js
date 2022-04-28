import React from "react";
import NumberFormat from "react-number-format";

const VND = (props) => {
  const { value, className } = props;
  return (
    <NumberFormat
      value={value}
      displayType={"text"}
      decimalSeparator=","
      thousandSeparator="."
      suffix={"đ"}
      className={className}
    />
  );
};

export default VND;
