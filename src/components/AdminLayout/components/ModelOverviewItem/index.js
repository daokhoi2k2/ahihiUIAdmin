import React from "react";
import SVG from "../../../../design/SVG";
import { ModelOverviewItemContent, ModelOverviewItemWrapper } from "./styles";

const ModelOverviewItem = (props) => {
  const { value, title, icon } = props;
  return (
    <ModelOverviewItemWrapper>
      <ModelOverviewItemContent>
        <SVG name={icon} />
        <h4 className="font-bold font-[16px] text-center py-2 ">{value}</h4>
        <h5 className="text-center mt-2">{title}</h5>
      </ModelOverviewItemContent>
    </ModelOverviewItemWrapper>
  );
};

export default ModelOverviewItem;
