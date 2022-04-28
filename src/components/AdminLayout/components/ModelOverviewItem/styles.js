import tw from "twin.macro";

export const ModelOverviewItemWrapper = tw.div`

    px-2
    my-2
    flex-basis[33.33333333333333333%]
    md:flex-basis[50%]
    sm:flex-basis[100%]
`;

export const ModelOverviewItemContent = tw.div`
    bg-white
    rounded-2xl
    box-shadow[0px 0px 5px rgba(0, 0, 0, 0.25)]
    p-4
    hover:bg-[#ddd]
    cursor-pointer
`;
