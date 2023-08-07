import Card from '@components/common/card';
import SectionHeader from '@components/common/section-header';
import Carousel from '@components/ui/carousel/carousel';
import { SwiperSlide } from 'swiper/react';
import CardRoundedLoader from '@components/ui/loaders/card-rounded-loader';
import { useBrands } from '@framework/brands';
import { ROUTES } from '@lib/routes';
import Alert from '@components/ui/alert';
import isEmpty from 'lodash/isEmpty';
import NotFoundItem from '@components/404/not-found-item';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { Type } from '@type/index';
import { filterBrandImages, filterBrands } from '@lib/filter-brands';
import { WebsiteData } from '@framework/utils/ApiCalls';

interface BrandProps {
  sectionHeading: string;
  className?: string;
}

const breakpoints = {
  '1720': {
    slidesPerView: 8,
    spaceBetween: 28,
  },
  '1400': {
    slidesPerView: 7,
    spaceBetween: 28,
  },
  '1025': {
    slidesPerView: 6,
    spaceBetween: 28,
  },
  '768': {
    slidesPerView: 5,
    spaceBetween: 20,
  },
  '500 ': {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  '0': {
    slidesPerView: 3,
    spaceBetween: 12,
  },
};

const BrandBlock: React.FC<BrandProps> = ({
  className = 'mb-11 md:mb-11 lg:mb-12 xl:mb-14 lg:pb-1 xl:pb-0',
  sectionHeading,
}) => {
  const { t } = useTranslation();

  const [topBrands, setTopBrands] : any = useState(null)

  async function getSocialData(){
    const data = WebsiteData() 
    const response: any = await data.getAllVendors()
    setTopBrands(response)

    }
  
    useEffect(() => {
      getSocialData()
    }, [])

  // if (isEmpty(topBrands.data.allVendor)) {
  //   return (
  //   <>
  //   <NotFoundItem text={t('text-no-brands-found')} />
  //   </>
  //   );
  // }


  return (topBrands) ?  (
    <div className={className}>
      <SectionHeader sectionHeading={sectionHeading} />

        <Carousel
          breakpoints={breakpoints}
          loop={false}
          autoplay={{ delay: 3500 }}
          buttonClassName="-mt-8 md:-mt-12"
          prevActivateId="brandsSlidePrev"
          nextActivateId="brandsSlideNext"
        >
          {topBrands.data.allVendor?.map((brand : any) => (
                <SwiperSlide key={`brand--key${brand.id}`}>
                  <Card
                    item={brand}
                    variant="rounded"
                    // size="medium"
                    href={{
                      pathname: ROUTES.SEARCH,
                      query: { brand: brand.slug },
                    }}
                    image={
                      filterBrandImages(brand?.images, 'slider-layout')
                        ?.image?.[0]
                    }
                  />
                </SwiperSlide>
              ))
              }
        </Carousel>
     
    </div>
  ) : null
};

export default BrandBlock;
