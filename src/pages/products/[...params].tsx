import Container from '@components/ui/container';
import { getLayout } from '@components/layout/layout';
import Subscription from '@components/common/subscription';
import ProductSingleDetails from '@components/product/product-single-details';
import Divider from '@components/ui/divider';
import Breadcrumb from '@components/common/breadcrumb';
import { useRouter } from 'next/router';
import Spinner from '@components/ui/loaders/spinner/spinner';
import dynamic from 'next/dynamic';
import { Tooltip } from 'react-tooltip';
import Rater from 'react-rater';
import { WebsiteData } from '@framework/utils/ApiCalls';
import { useEffect, useState } from 'react';
export { getStaticPaths, getStaticProps } from '@framework/order.ssr';


// export { getStaticPaths, getStaticProps } from '@framework/product.ssr';

const RelatedProducts = dynamic(() => import('@containers/related-products'));

export default function ProductPage() {
  const router : any = useRouter();

  const [userData, setUserData] : any = useState(null)

  async function getSocialData(){
    const data = WebsiteData() 
    const response: any = await data.getOneProducts(router.query.params[0] , router.query.params[1])
    return setUserData(response)
    }    

    

    useEffect(() => {
      getSocialData()
    }, [router])

    

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <Spinner />;
  }

  return (userData) ?  (
    <>
      <Divider className="mb-0" />
      <Container>
        <div className="pt-8">
          <Breadcrumb />
        </div>
        <ProductSingleDetails product={userData.data} />
        <RelatedProducts
          products={userData.data.relatedProduct}
          currentProductId={userData.data.product.id}
          sectionHeading="text-related-products"
        />
        <Subscription />
              {/* Comments */}
              <div>
          <h2 className='my-5'>Reviews</h2>
        <div className='flex items-center gap-5'>
        <img  id="Name" className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar" />
        <Tooltip anchorSelect="#Name">
          ahmed
        </Tooltip>
        <div>
        <Rater rating={2} total={5} interactive={false} />
        <p>aaaaaaaaa</p>
        </div>
        </div>
        </div>
      {/* End Of Comments */}
      </Container>
    </>
  ) : null
}

ProductPage.getLayout = getLayout;


