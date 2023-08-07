import { useState, Fragment, useEffect } from 'react';
import VendorCard from '@components/common/vendor-card';
import Alert from '@components/ui/alert';
import { BsGridFill } from '@react-icons/all-files/bs/BsGridFill';
import { BsList } from '@react-icons/all-files/bs/BsList';
import { useShops } from '@framework/shops';
import Button from '@components/ui/button';
import { useTranslation } from 'next-i18next';
import { WebsiteData } from '@framework/utils/ApiCalls';

const ShopsPageContent: React.FC = () => {
  const [gridView, setGridView] = useState(Boolean(false));
  const { t } = useTranslation();

  const listViewHandel = () => {
    setGridView(false);
  };

  const gridViewHandel = () => {
    setGridView(true);
  };

  const [topBrands, setTopBrands] : any = useState(null)


  async function getSocialData(){
    const data = WebsiteData() 
    const response: any = await data.getAllVendors()
    setTopBrands(response)
    }
  
    useEffect(() => {
      getSocialData()
    }, [])



  return (topBrands != null) ? (
    <div className="px-4 pt-10 border-t border-gray-300 lg:pt-12 xl:pt-14 pb-14 lg:pb-16 xl:pb-20 md:px-8">
      <div className="w-full xl:max-w-[1170px] mx-auto">
        <div className="flex items-center justify-between mb-6 xl:mb-8">
          <h2 className="text-lg font-bold text-heading md:text-xl lg:text-2xl xl:text-3xl">
            {t('text-shops-title')}
          </h2>
          <div className="flex-shrink-0 flex items-center space-x-1.5 ltr:ml-2 rtl:mr-2">
            <button
              aria-label="list"
              className={`text-2xl relative top-[1px] transition-all ${
                gridView === false ? 'text-heading' : 'text-body'
              }`}
              onClick={listViewHandel}
            >
              <BsList className="" />
            </button>
            <button
              aria-label="grid"
              className={`text-lg transition-all ${
                gridView === true ? 'text-heading' : 'text-body'
              }`}
              onClick={gridViewHandel}
            >
              <BsGridFill />
            </button>
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-5 xl:gap-6">
          {
             <Fragment>
             {topBrands.data.allVendor.map((shop : any) => (
               <VendorCard
                 key={shop.id}
                 shop={shop}
                 variant={gridView === true ? 'grid' : 'list'}
               />
             ))}
           </Fragment>
          }
        </div>
      
      </div>
    </div>
  ) : null
};

export default ShopsPageContent;
