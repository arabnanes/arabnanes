import { ILFlag } from "@components/icons/ILFlag";
import { SAFlag } from "@components/icons/SAFlag";
import { CNFlag } from "@components/icons/CNFlag";
import { USFlag } from "@components/icons/USFlag";
import { DEFlag } from "@components/icons/DEFlag";
import { ESFlag } from "@components/icons/ESFlag";

export const siteSettings = {
  name: "Arab nanes",
  description:
    "Fastest E-commerce ",
  author: {
    name: "Arabnanes",
    websiteUrl: "https://arablife.online/",
    address: "",
  },
  logo: {
    url: "/assets/images/logo.svg",
    alt: "Arab nanes",
    href: "/",
    width: 95,
    height: 30,
  },
  chatButtonUrl: "https://api.whatsapp.com/send?phone=01033262040",
  defaultLanguage: "en",
  currency: "Riyal",
  site_header: {
    languageMenu: [
      {
        id: "ar",
        name: "عربى - AR",
        value: "ar",
        icon: <SAFlag width="20px" height="15px"/>,
      },
      {
        id: "zh",
        name: "中国人 - ZH",
        value: "zh",
        icon: <CNFlag width="20px" height="15px"/>,
      },
      {
        id: "en",
        name: "English - EN",
        value: "en",
        icon: <USFlag width="20px" height="15px"/>,
      },
      {
        id: "de",
        name: "Deutsch - DE",
        value: "de",
        icon: <DEFlag width="20px" height="15px"/>,
      },
      {
        id: "he",
        name: "rעברית - HE",
        value: "he",
        icon: <ILFlag width="20px" height="15px"/>,
      },
      {
        id: "es",
        name: "Español - ES",
        value: "es",
        icon: <ESFlag width="20px" height="15px"/>,
      },
    ],
  },
  product: {
    placeholderImage: (variant = "list") => {
      return `/assets/placeholder/products/product-${variant}.svg`;
    }
  },
  homePageBlocks: {
    flashSale: {
      slug: "flash-sale",
    },
    featuredProducts: {
      slug: "featured-products"
    },
    onSaleSettings: {
      slug: "on-sale",
    }
  }
};

