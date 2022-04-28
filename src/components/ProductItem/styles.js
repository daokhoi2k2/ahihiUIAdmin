import tw from "twin.macro";

export const ProductItemWrapper = tw.div`
    flex
    py-4
    px-2
    flex-basis[50%]
    xl:flex-basis[100%]
`;

export const Thumbnail = tw.img`
    rounded-md
    border
    p-1
`

export const ProductInfo = tw.div`
    px-3
`;

export const ProductName = tw.h2`
    font-bold
    text-sm
    leading-4
    text-black
    my-2
`;

export const ProductSold = tw.h3``;

export const ProductPrice = tw.h2``;