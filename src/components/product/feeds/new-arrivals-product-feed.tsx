import ProductsBlock from "@containers/products-block";
import { useProducts } from "@framework/products";
import { useTranslation } from "next-i18next";
import isEmpty from "lodash/isEmpty";
import NotFoundItem from "@components/404/not-found-item";
import { WebsiteData } from "@framework/utils/ApiCalls";
import { useEffect, useState } from "react";

export default function NewArrivalsProductFeed() {
  const { t } = useTranslation();
  const { data: products, isLoading: loading, error }: any = useProducts({
    limit: 10,
    orderBy: "created_at",
    sortedBy: "DESC",
  })

  const [newArrival, setNewArrival] = useState(null)

  async function getProductsData(){
    const data = WebsiteData() 
    const response: any = await data.getNewArrivals()
    setNewArrival(response)
    }
  
    useEffect(() => {
      getProductsData()
    }, [])

  if (isEmpty(newArrival)) {
    return (
      <>
      <NotFoundItem text={t("text-no-products-found")} />
      </>
    )
  }

	return (newArrival) ?  (
    <ProductsBlock
      sectionHeading="text-new-arrivals"
      products={newArrival.data.new}
      loading={loading}
      error={error?.message}
      uniqueKey="new-arrivals"
    />
	) : null
}
