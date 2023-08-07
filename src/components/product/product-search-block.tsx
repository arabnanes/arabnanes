import { useEffect, type FC, useState } from "react";
import { useProductsInfinite } from "@framework/products";
import { useRouter } from "next/router";
import { formatPriceRange } from "@lib/format-price-range";
import SearchTopBar from "@components/shop/top-bar";
import ProductInfiniteGrid from "@components/product/product-infinite-grid";
import { WebsiteData } from "@framework/utils/ApiCalls";

interface ProductGridProps {
  className?: string;
}

export const ProductSearchBlock: FC<ProductGridProps> = ({
  className = "",
}) => {
  const { query } = useRouter();
  const priceRange = query.price && formatPriceRange(query.price as string);

  const [search, setSearch] : any = useState(null)


  async function getSocialData(){
    const data = WebsiteData() 
    const response: any = await data.search(query)
    setSearch(response)
    }

    useEffect(() => {
      getSocialData()
    }, [query])
    
   
  

   



  const {
    isLoading,
    isFetchingNextPage: loadingMore,
    fetchNextPage,
    hasNextPage,
    data,
    error,
  } = useProductsInfinite({
    text: query.q && (query.q as string),
    category: query.category && (query.category as string),
    type: query.brand && (query.brand as string),
    orderBy: query.orderBy && (query.orderBy as string),
    sortedBy: query.sortedBy && (query.sortedBy as string),
    variations: query.variations && (query.variations as string),
    tags: query.tags && (query.tags as string),
    ...(priceRange &&
      priceRange.length === 2 && { min_price: priceRange.join(",") }),
    ...(priceRange && priceRange.length === 1 && { max_price: priceRange[0] }),
  });

  // if (error) return <p>{error.message}</p>;


  return (search != null) ? (
    <>
      <SearchTopBar
        searchResultCount={data?.pages?.[0]?.total}
      />
      <ProductInfiniteGrid
        className={className}
        loading={isLoading}
        data={search.data.products}
        hasNextPage={hasNextPage}
        loadingMore={loadingMore}
        fetchNextPage={fetchNextPage}
      />
    </>
  ) : null
};

export default ProductSearchBlock;
