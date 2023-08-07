import ProductsBlock from "@containers/products-block";
import { useTranslation } from "next-i18next";
import isEmpty from "lodash/isEmpty";
import NotFoundItem from "@components/404/not-found-item";
import { usePopularProducts } from "@framework/products";
import Spinner from "@components/ui/loaders/spinner/spinner";
import { WebsiteData } from "@framework/utils/ApiCalls";
import { useEffect, useState } from "react";

export default function BestSellerProductFeed() {
  const { t } = useTranslation();
  const { data: products, isLoading: loading, error }: any = usePopularProducts({
    limit: 10
  })

  const [featredProducts, setFeatredProducts] = useState(null)

  async function getProductsData(){
    const data = WebsiteData() 
    const response: any = await data.getFeaturedProducts()
    setFeatredProducts(response)
    }
  
    useEffect(() => {
      getProductsData()
    }, [])

	return (featredProducts) ?  (
		<ProductsBlock
			sectionHeading="text-best-sellers"
			products={featredProducts.data.hot_deals}
			loading={loading}
			error={error?.message}
			uniqueKey="best-sellers"
		/>
	) : null
}
