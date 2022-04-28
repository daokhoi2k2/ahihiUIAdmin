import tw from "twin.macro";
import styled from "@emotion/styled";

export const RouteItemWrapper = styled("div")(({ active }) => [
  tw`    
    p-2.5
    rounded-full
    border
    border-[rgba(9,82,163, 0.3)]
    my-1
    cursor-pointer
    text-[#0952A3]

    hover:text-white
    hover:bg-[#0952A3]`,
  active && tw`text-white bg-[#0952A3]`,
]);
