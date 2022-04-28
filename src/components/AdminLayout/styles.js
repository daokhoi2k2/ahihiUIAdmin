import tw from "twin.macro";

export const AdminLayoutWrapper = tw.div`
    bg-[#ECF1F8]
`;

export const Layout = tw.div`
    grid
    grid-template-columns[auto 1fr]

`;

export const Container = tw.div`
    w-full
`;

export const ContainerBody = tw.div`
    flex
    p-5
    2xl:flex-wrap
`;

export const TopModalWrapper = tw.div`
    flex-basis[55%]
    mx-2
    2xl:flex-basis[100%]
`;

export const OverviewModalWrapper = tw.div`
    flex-basis[45%]
    2xl:flex-basis[100%]
    mx-2
    overflow-hidden
`;

export const ModalTitle = tw.div`
    flex
    py-3
    items-center
    border-b
`;

export const TitleText = tw.h2`
    font-bold
    text-md
`;

export const ModalContent = tw.div`
    flex
    flex-wrap
    my-1.5
`;

export const ChartWrapper = tw.div`
    my-1.5
    relative
    max-w-full
    overflow-hidden
    h-[370px]
`;

export const TopModalItem = tw.div`
    rounded-lg
    shadow-md
    bg-white
    px-5
    py-3
    my-4
`;

export const ProviderItem = tw.div`
    flex-basis[33%]
    flex
    items-center
    my-5
    xl:flex-basis[50%]
`;

export const ProviderName = tw.h2`
    font-semibold
    ml-2
`;

// Overview
export const OverviewModelItem = tw.div`
    my-3
    py-3
`; 

export const ModalOverviewTitle = tw.div`
    flex
    items-end
`;

export const ModalOverviewList = tw.div`
    flex
    px-3
    my-2
    flex-wrap
    mx-[-1rem]
`;

export const OverviewModelHeader = tw.div`
    flex
    items-center
    justify-between
`;

export const ChartDescription = tw.div`
    flex
    gap-x-2
    ml-auto
    mr-5
`;

export const ChartDescriptionItem = tw.div`
    flex
    items-center
    gap-x-2
    text-sm
`;

export const CircleIcon = tw.div`
    w-[22px]
    h-[22px]
    rounded-full
`;

export const Button = tw.button`
    bg-[#008816]
    text-white
    font-bold
    rounded-md
    p-3
    text-sm

    // scale-[0.5]
    active:scale-[0.97]
`;