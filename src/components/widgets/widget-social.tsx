import { useEffect, type FC, useState } from 'react';
import { useSettings } from '@contexts/settings.context';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import socialIcons from '../icons/social-icon';
import { Social } from '@type/index';
import { getIcon } from '@lib/get-icon';
import { WebsiteData } from '@framework/utils/ApiCalls';



const WidgetSocial: FC = () => {
  const { t } = useTranslation();
  const settings = useSettings();

  const [socialData, setSocialData] : any = useState(null)

 async function getSocialData(){
  const data = WebsiteData() 
  const response: any = await data.getSettings()
  setSocialData(response)
  }

  useEffect(() => {
    getSocialData()
  }, [])
  

  return (socialData) ?  (
    <div className='overflow-hidden'>
      <h4 className="mb-5 text-sm font-semibold text-heading md:text-base xl:text-lg 2xl:mb-6 3xl:mb-7">
        {t(`footer:widget-title-social`)}
      </h4>
      <ul className="text-xs md:text-[13px] lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5">
        {/* {socials?.map((social: Social, index: number) => (
          <li key={`widget-list--key${index}`} className="flex items-baseline">
            {social.icon && (
              <span className="ltr:mr-3 rtl:ml-3 relative top-0.5 lg:top-1 text-sm lg:text-base">
                {getIcon({
                  iconList: socialIcons,
                  iconName: social?.icon,
                })}
              </span>
            )}
            <Link
              href={social.url ? social.url : '#!'}
              className="transition-colors duration-200 hover:text-black"
            >
              {social?.label ? social?.label : social?.url}
            </Link>
          </li>
        ))} */}
        <li className="flex items-baseline">
        <span className="ltr:mr-3 rtl:ml-3 relative top-0.5 lg:top-1 text-sm lg:text-base">
          <img src="fb.png" className='w-[20px]' />
        </span>
          <a
              href={socialData.data.setting.facebook}
              className="transition-colors duration-200 hover:text-black" 
              target='_blank'
            >
              {socialData.data.setting.facebook}
            </a>
        </li>
        <li className="flex items-baseline">
        <span className="ltr:mr-3 rtl:ml-3 relative top-0.5 lg:top-1 text-sm lg:text-base">
          <img src="twitter.png"  className='w-[20px]' />
        </span>
          <Link
              href={socialData.data.setting.twitter}
              className="transition-colors duration-200 hover:text-black"
            >
              {socialData.data.setting.twitter}
            </Link>
        </li>
        <li className="flex items-baseline">
        <span className="ltr:mr-3 rtl:ml-3 relative top-0.5 lg:top-1 text-sm lg:text-base">
          <img src="youtube.png"  className='w-[20px]' />
        </span>
          <Link
              href={socialData.data.setting.youtube}
              className="transition-colors duration-200 hover:text-black"
            >
              {socialData.data.setting.youtube}
            </Link>
        </li>
      </ul>
    </div>
  ) : null
};

export default WidgetSocial;
