import cn from 'classnames';
import Image from 'next/image';
import type { FC } from 'react';
import { useUI } from '@contexts/ui.context';
import usePrice from '@lib/use-price';
import { Product } from '@type/index';
import { siteSettings } from '@settings/site.settings';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css'



interface ProductProps {
  product: Product;
  className?: string;
  contactClassName?: string;
  imageContentClassName?: string;
  variant?:
    | 'grid'
    | 'gridSmall'
    | 'gridSlim'
    | 'list'
    | 'listSmall'
    | 'gridSlimLarge';
  imgLoading?: 'eager' | 'lazy';
}

const ProductCard: FC<ProductProps> = (props) => {
  const { openModal, setModalView, setModalData } = useUI();
  const variant = props.variant
  const className = ''
  const contactClassName = props.contactClassName

  function handlePopupView() {
    setModalData(props.product);
    setModalView('PRODUCT_VIEW');
    return openModal();
  }

  return (
    <div
      className={cn(
        'group box-border overflow-hidden flex rounded-md cursor-pointer',
        {
          'ltr:pr-0 rtl:pl-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 hover:shadow-product':
            variant === 'grid' || variant === 'gridSmall',
          'ltr:pr-0 rtl:pl-0 md:pb-1 flex-col items-start bg-white':
            variant === 'gridSlim' || variant === 'gridSlimLarge',
          'items-center bg-transparent border border-gray-100 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-listProduct':
            variant === 'listSmall',
          'flex-row items-center transition-transform ease-linear bg-gray-200 ltr:pr-2 ltr:lg:pr-3 ltr:2xl:pr-4 rtl:pl-2 rtl:lg:pl-3 rtl:2xl:pl-4':
            variant === 'list',
        },
        className
      )}
      onClick={handlePopupView}
      role="button"
      title={props.product.product_name}
    >
      <div
        className={cn(
          'flex relative ltr:rounded-l-md rtl:rounded-r-md ',
          {
            'mb-3 md:mb-3.5 w-full aspect-[17/22]': variant === 'grid',
            'mb-3 md:mb-3.5 w-full aspect-[1/1.3]': variant === 'gridSmall',
            'mb-3 md:mb-3.5 pb-0 aspect-square w-full rounded-md overflow-hidden':
              variant === 'gridSlim',
            'mb-3 md:mb-3.5 pb-0 aspect-[1/1.2] w-full rounded-md overflow-hidden':
              variant === 'gridSlimLarge',
            'flex-shrink-0 w-32 sm:w-44 md:w-36 lg:w-44 lg:h-44 aspect-square':
              variant === 'listSmall',
            'aspect-square': variant === 'list',
          },
         props.imageContentClassName
        )}
      >
        <Image
          src={ siteSettings.author.websiteUrl +  props.product.product_thumbnail}
          fill
          loading={props.imgLoading}
          quality={100}
          alt={props.product.product_name || 'Product Image'}
          className={cn('bg-gray-300 object-cover', {
            'rounded-md transition duration-200 ease-in group-hover:rounded-b-none':
              variant === 'grid' || variant === 'gridSmall',
            'transition duration-150 ease-linear transform group-hover:scale-105':
              variant === 'gridSlim' || variant === 'gridSlimLarge',
            'ltr:rounded-l-md rtl:rounded-r-md transition duration-200 ease-linear transform group-hover:scale-105':
              variant === 'list',
          })}
          sizes="(max-width: 768px) 100vw"
        />
      </div>
      <div
        className={cn(
          'w-full overflow-hidden',
          {
            'ltr:pl-0 rtl:pr-0 ltr:lg:pl-2.5 ltr:xl:pl-4 rtl:lg:pr-2.5 rtl:xl:pr-4 ltr:pr-2.5 ltr:xl:pr-4 rtl:pl-2.5 rtl:xl:pl-4':
              variant === 'grid' || variant === 'gridSmall',
            'ltr:pl-0 rtl:pr-0': variant === 'gridSlim',
            'px-4 lg:px-5 2xl:px-4': variant === 'listSmall',
          },
          contactClassName
        )}
      >
        <h2
          className={cn('text-heading font-semibold truncate mb-1', {
            'text-sm md:text-base':
              variant === 'grid' || variant === 'gridSmall',
            'md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg':
              variant === 'gridSlim',
            'text-sm sm:text-base md:mb-1.5 pb-0': variant === 'listSmall',
            'text-sm sm:text-base md:text-sm lg:text-base xl:text-lg md:mb-1.5':
              variant === 'list',
          })}
        >
          {props.product.product_name}
        </h2>
        <p className="text-body text-xs md:text-[13px] lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
            {props.product.long_disc}
          </p>
        <div
          className={`text-heading font-semibold text-sm sm:text-base mt-1.5 space-x-1 rtl:space-x-reverse ${
            variant === 'grid' || variant === 'gridSmall'
              ? '3xl:text-lg lg:mt-2.5'
              : 'sm:text-lg md:text-base 3xl:text-xl md:mt-2.5 2xl:mt-3'
          }`}
        >
              <>
              <span className="inline-block">{props.product.selling_price}</span>
            </>
        </div>
        <Rater rating={4} total={5} interactive={false} />
      </div>
    </div>
  );
};

export default ProductCard;
