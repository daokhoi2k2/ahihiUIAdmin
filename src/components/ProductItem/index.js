import React from "react";
import VND from "components/VND";
import { ProductInfo, ProductItemWrapper, ProductName, ProductPrice, ProductSold, Thumbnail } from "./styles";

const ProductItem = (props) => {
  const { name, price, sold, thumbnail } = props;
  return (
    <ProductItemWrapper>
      <Thumbnail src={thumbnail} />
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <ProductPrice>
          <VND value={price} />
        </ProductPrice>
        <ProductSold>
            Đã bán: {sold}
        </ProductSold>
      </ProductInfo>
    </ProductItemWrapper>
  );
};

export default ProductItem;
