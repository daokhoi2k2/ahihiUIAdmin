import tw from "twin.macro";
import styled from "@emotion/styled";

export const SelectWrapper = tw.div`
    
    relative
    // outline-none
    // appearance-none
    // appearance[#333]
    cursor-pointer
`;

export const SelectInput = tw.div`
    border
    rounded-xl
    px-3
    py-0.5
    relative
    appearance-none
    min-w-[150px]
    outline-none
    bg-white
`;

export const SelectArrow = tw.div`
    absolute
    right-0
    top-0
    bottom-0
    flex
    items-center
    z-index[0]
    pointer-events-none
`;

export const OptionsList = styled("div")(({isDropDownOptions}) => [
   tw`
    shadow-lg
    rounded-lg
    bg-white
    border
    absolute
    right-0
    top-[120%]
    w-[296px]
    hidden
    `,
    isDropDownOptions && tw`block`
]);

export const OptionItem = styled("div")(({active}) => [
  tw`
    px-3
    py-1
    `,
    active && tw`bg-[#0952A3] bg-opacity-10`
]);

export const OptionDatePicker = tw.div`
    mt-4
    flex
`;