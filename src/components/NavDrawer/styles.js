import tw from "twin.macro";
import styled from "@emotion/styled";

export const NavDrawerWrapper = styled("div")(({ isShow }) => [
  tw` min-h-screen
    h-full

    z-30
    overflow-y-auto

    bg-white
    box-shadow[4px 0px 5px 0 rgba(0, 0, 0, 0.18)]
    transition[width ease-in 100ms]
    // hidden
    w-[0]
    px-0
    invisible

    mid:fixed
    mid:bottom-0
    mid:top-0`,
  isShow && tw`w-[68px] visible px-3`,
]);

export const LogoWrapper = tw.div`
    flex
    justify-center
    mx-2
    my-4
`;

export const RoutesList = tw.div`
    mt-5
    flex
    flex-col
    items-center
`;
