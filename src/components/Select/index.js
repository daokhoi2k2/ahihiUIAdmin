import React, { useState } from "react";
import SVG from "../../design/SVG";
import { OptionDatePicker, OptionItem, OptionsList, SelectArrow, SelectInput, SelectWrapper } from "./styles";

const Select = () => {
  const [isDropDownOptions, setIsDropDownOptions] = useState();

  const handleOpenDropDownOPtions = () => {
    setIsDropDownOptions(!isDropDownOptions)
  }
  return (
    <SelectWrapper>
      <SelectInput onClick={handleOpenDropDownOPtions}>
        Tuần này
      </SelectInput>
      <OptionsList isDropDownOptions={isDropDownOptions}>
        <OptionDatePicker>
          <input className="px-3 py-1 border w-[50%] outline-none placeholder-shown:text-[13px]" placeholder="Ngày bắt đầu" />
          <input className="px-3 py-1 border w-[50%] outline-none placeholder-shown:text-[13px]" placeholder="Ngày kết thúc" />
        </OptionDatePicker>
        <OptionItem>Hôm nay</OptionItem>
        <OptionItem>Hôm qua</OptionItem>
        <OptionItem active={true}>Tuần này</OptionItem>
        <OptionItem>Tuần trước</OptionItem>
        <OptionItem>Tháng này</OptionItem>
        <OptionItem>Năm này</OptionItem>
        <OptionItem>Năm trước</OptionItem>
      </OptionsList>
      <SelectArrow>
        <SVG
          className="h-[20px] w-[20px] p-1 rounded-full text-white bg-[#0E50A4] mr-1"
          name="arrow"
        />
      </SelectArrow>
    </SelectWrapper>
  );
};

export default Select;
