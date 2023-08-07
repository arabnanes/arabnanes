import React, { useEffect, useState } from "react";
import { useProductsInfinite } from "@framework/products";
import ProductInfiniteGrid from "@components/product/product-infinite-grid";
import { WebsiteData } from "@framework/utils/ApiCalls";

type Props = {
  shopId: string;
};

const ShopProductsGrid: React.FC<Props> = ({ shopId }) => {

  const [topBrands, setTopBrands] : any = useState(null)

  async function getOneVendorData(id : any){
    const data = WebsiteData() 
    const response: any = await data.getOneVendor(id)
    setTopBrands(response)
    }
  
    useEffect(() => {
      getOneVendorData(shopId)
    }, [])

  const {
    isLoading,
    isFetchingNextPage: loadingMore,
    fetchNextPage,
    hasNextPage,
    data,
    error,
  } = useProductsInfinite({
    ...(Boolean(shopId) && { shop_id: Number(shopId) }),
  });

  if (error) return <p>{error.message}</p>;

  return (
    <ProductInfiniteGrid
      loading={isLoading}
      data={topBrands.vendorProduct}
      hasNextPage={hasNextPage}
      loadingMore={loadingMore}
      fetchNextPage={fetchNextPage}
    />
  );
};

export default ShopProductsGrid;
