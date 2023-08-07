import { siteSettings } from "@settings/site.settings";
import isEmpty from "lodash/isEmpty";

interface Item {
  id: string | number;
  name: string;
  slug: string;
  image: {
    thumbnail: string;
    [key: string]: unknown;
  };
  price: number;
  sale_price?: number;
  quantity?: number;
  [key: string]: unknown;
}

// interface Variation {
//   id: string | number;
//   title: string;
//   price: number;
//   sale_price?: number;
//   quantity: number;
//   [key: string]: unknown;
// }

export function generateCartItem(item: Item) {
  const { id, product_name, product_slug, product_thumbnail, selling_price, quantity } = item;
  // if (!isEmpty(variation)) {
  //   return {
  //     id: `${id}.${variation.id}`,
  //     productId: id,
  //     name: `${name} - ${variation.title}`,
  //     slug,
  //     unit,
  //     stock: variation.quantity,
  //     price: variation.sale_price ? variation.sale_price : variation.price,
  //     image: image?.thumbnail,
  //     variationId: variation.id,
  //   };
  // }
  return {
    id,
    name : product_name,
    slug : product_slug,
    image: `${siteSettings.author.websiteUrl}/${product_thumbnail}`,
    stock: quantity,
    price: selling_price,
  };
}
