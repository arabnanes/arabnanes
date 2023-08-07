import BannerCard from '@components/common/banner-card';
import CategoryListCard from '@components/common/category-list-card';
import Carousel from '@components/ui/carousel/carousel';
import { SwiperSlide } from 'swiper/react';
import { useCategories } from '@framework/categories';
import CategoryListCardLoader from '@components/ui/loaders/category-list-card-loader';
import CategoryListFeedLoader from '@components/ui/loaders/category-list-feed-loader';
import { ROUTES } from '@lib/routes';
import Alert from '@components/ui/alert';
import isEmpty from 'lodash/isEmpty';
import NotFoundItem from '@components/404/not-found-item';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { StaticBanner } from '@type/index';
import { WebsiteData, banners } from '@framework/utils/ApiCalls';


interface Props {
  data: StaticBanner[];
  className?: string;
  paginationPosition?: 'left' | 'center';
}

const categoryResponsive = {
  '1280': {
    slidesPerView: 4,
    spaceBetween: 28,
  },
  '768': {
    slidesPerView: 3,
    spaceBetween: 24,
  },
  '480': {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  '0': {
    slidesPerView: 1,
    spaceBetween: 12,
  },
};

const HeroWithCategory: React.FC<Props> = ({
  className = 'mb-12 md:mb-14 xl:mb-16',
  paginationPosition = 'center',
}) => {
  const { t } = useTranslation();
  const {
    data: categories,
    isLoading: loading,
    error,
  } = useCategories({
    limit: 10,
    parent: null,
  });

  const [bannerData, setBannerData] : any = useState(null)


  async function getBannerData(){
    const data = WebsiteData() 
    const response: any = await data.getSLider()
    setBannerData(response)
    }

    useEffect(() => {
      getBannerData()
    }, [])

  if (!loading && isEmpty(categories?.skip_product_0)) {
    return <NotFoundItem text={t('text-no-categories-found')} />;
  }

  return (bannerData != null) ? (
    <div
      className={`grid grid-cols-1 2xl:grid-cols-5 gap-5 xl:gap-7 ${className}`}
    >
      {bannerData == null ? (
        <Alert message={error?.message} />
      ) : (
        <>
          <div className="block 2xl:hidden">
            <Carousel
              breakpoints={categoryResponsive}
              buttonSize="small"
              autoplay={{ delay: 3000 }}
              prevActivateId="heroCategoryPrev"
              nextActivateId="heroCategoryNext"
            >
              {loading && !categories?.skip_product_0?.length
                ? Array.from({ length: 8 }).map((_, idx) => (
                    <SwiperSlide key={`category-list-${idx}`}>
                      <CategoryListCardLoader
                        uniqueKey={`category-list-${idx}`}
                      />
                    </SwiperSlide>
                  ))
                : categories?.data?.map((category) => (
                    <SwiperSlide key={`category--key${category.id}`}>
                      <CategoryListCard category={category} />
                    </SwiperSlide>
                  ))}
            </Carousel>
          </div>
          <div className="hidden grid-cols-1 gap-3 2xl:grid ltr:2xl:-mr-14 rtl:2xl:-ml-14">
            {loading && !categories?.skip_product_0?.length ? (
              <CategoryListFeedLoader limit={8} />
            ) : (
              banners.map((category) => (
                  <CategoryListCard
                    key={`category--key${category.id}`}
                    category={category}
                  />
                ))
            )}
          </div>
        </>
      )}

      <div className="heightFull col-span-full row-span-full 2xl:row-auto 2xl:col-span-4 ltr:2xl:ml-14 rtl:2xl:mr-14">
        <Carousel
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 4000 }}
          className={`-mx-0 pagination-${paginationPosition}`}
          buttonClassName="hidden"
        >
          {bannerData.data.sliders?.map((banner: any) => (
            <SwiperSlide key={`banner--key${banner.id}`}>
              <BannerCard
                data={banner}
                href={`/`}
                className="xl:h-full"
                classNameInner="w-full aspect-[1.72/1]"
              />
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
    </div>
  ): null
};

export default HeroWithCategory;
