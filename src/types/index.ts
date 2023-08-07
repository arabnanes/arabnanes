import { QueryKey } from "react-query";

export interface QueryOptions {
  language?: string;
}

export interface GetParams {
  slug: string;
  language?: string;
}

export interface ParamsType extends QueryOptions {
  type?: string;
  text?: string;
  category?: string;
  tags?: string;
  variations?: string;
  status?: string;
  is_active?: string;
  shop_id?: string;
  limit?: number;
  sortedBy?: string;
  orderBy?: string;
  min_price?: string;
  max_price?: string;
  parent?: string | null;
};

export interface CategoriesQueryOptionsType extends QueryOptions {
  type?: string;
  text?: string;
  category?: string;
  status?: string;
  limit?: number;
  parent?: string | null;
};

export type TypeQueryOptionsType = {
  limit?: number;
};

export type BrandsQueryParamsType = {
  limit?: number;
};

export interface ProductsQueryOptionsType extends QueryOptions {
  type?: string;
  text?: string;
  category?: string;
  status?: string;
  limit?: number;
  shop_id?: number;
  sortedBy?: string;
  orderBy?: string;
  variations?: string;
  tags?: string;
  min_price?: string;
  max_price?: string;
};

export type TagsQueryOptionsType = {
  limit?: number;
};

export type ShopsQueryOptionsType = {
  text?: string;
  category?: string;
  status?: string;
  limit?: number;
  is_active?: number;
};
export type OrdersQueryOptionsType = {
  tracking_number?: string;
  orderBy?: string;
  sortedBy?: string;
  customer_id?: number;
  shop_id?: number;
  first?: number;
  page?: number;
  limit?: number;
};

export type QueryParamsType = {
  queryKey: QueryKey;
  pageParam?: string;
};
export type Banner = {
  title: string;
  description: string;
  image: {
    id: string;
    original: string;
    thumbnail: string;
  };
};

export declare type KeyBasedImage = {
  key: string;
  image: Attachment[];
};

export declare type Type = {
  id: number | string;
  name: string;
  slug: string;
  icon: string;
  banners: Banner[];
  promotional_sliders: any[];
  images: KeyBasedImage[];
  settings: {
    isHome: boolean;
    layoutType: string;
    productCard: string;
  };
  // products?: Maybe<ProductPaginator>;
  created_at: Date;
  updated_at: Date;
};
export declare type Coupon = {
  id: number | string;
  code: string;
  description: string;
  // orders: Order[];
  type: string;
  image: string;
  amount: number;
  active_from: Date;
  expire_at: Date;
  created_at: Date;
  updated_at: Date;
};
export declare type Category = {
  id: number | string;
  name: string;
  slug: string;
  parent?: number;
  parent_id?: number;
  products_count?: number;
  children: Category[];
  details?: string;
  image?: Attachment[];
  icon?: string;
  type: Type;
  products: Product[];
  created_at: Date;
  updated_at: Date;
  banner_image?: Attachment[];
};
export declare type Attachment = {
  id?: number | string;
  thumbnail?: string;
  original?: string;
};

export declare type AttributeValue = {
  id: string;
  attribute_id: string;
  value: string;
  meta?: string;
};

export declare type Attribute = {
  id: string;
  slug: string;
  name: string;
  values: [AttributeValue];
};

export declare type Variation = {
  id: string;
  options?: any;
};
export declare type Product = {
  id?: number | string;
  name?: string;
  slug?: string;
  type?: Type;
  categories?: Category[];
  variations: AttributeValue[];
  variation_options: Variation[];
  // pivot?: OrderProductPivot
  // orders: Order[]
  shop?: any;
  description?: string;
  in_stock?: boolean;
  is_taxable?: boolean;
  sale_price?: number;
  sku?: string;
  gallery?: Attachment[];
  image?: Attachment;
  // status?: ProductStatus
  height?: string;
  length?: string;
  width?: string;
  price?: number;
  min_price?: number;
  max_price?: number;
  related_products?: Product[];
  quantity?: number;
  unit?: string;
  product_type: string;
  created_at?: Date;
  updated_at?: Date;
  orders_count?: number;
  sold: number;
};

export declare type Tag = {
  id: number;
  name: string;
  slug: string;
  icon?: string;
  image?: string;
  details?: string;
};

export declare type UserAddress = {
  country?: string;
  city?: string;
  state?: string;
  zip?: string;
};

export declare type Order = {
  id: number | string;
  tracking_number: string;
  customer_id: number | string;
  // customer?: Maybe<User>;
  status: any;
  amount: number;
  children: Order[];
  sales_tax: number;
  total: number;
  paid_total: number;
  payment_id?: string;
  payment_gateway?: string;
  coupon?: Coupon;
  discount?: number;
  delivery_fee?: number;
  delivery_time: string;
  products: Product[];
  created_at: Date;
  updated_at: Date;
  billing_address?: UserAddress;
  shipping_address?: UserAddress;
  payment_intent?: PaymentIntent;
  payment_status?: string;
  order_status?: string;
};

export interface PaymentIntent {
  id: number | string;
  order_id: number | string;
  payment_gateway: PaymentGateway;
  tracking_number: string;
  payment_intent_info: PaymentIntentInfo;
}

export type SettingsType = {
  id: number | string;
  options: SettingsOptions;
};

export type SettingsOptions = {
  siteTitle?: string;
  siteSubtitle?: string;
  currency?: string;
  logo?: Attachment;
  taxClass?: string;
  shippingClass?: string;
  contactDetails?: any;
  paymentGateway?: string;
};

export interface Card {
  expires: string;
  network: string;
  origin: string;
  owner_name: string;
  payment_gateway_id: number | string;
  default_card: number;
}

export interface PaymentIntentInfo {
  client_secret: string;
  payment_id: string;
  is_redirect: boolean;
  redirect_url: string;
  currency: string;
  amount: string;
}

export interface CreateOrderPaymentInput {
  tracking_number: string;
}

export interface PaymentIntentCollection {
  tracking_number?: string;
  payment_intent_info?: PaymentIntentInfo;
  payment_gateway?: string;
}
export interface UserPaymentGateway {
  id: number | string;
  customer_id: string;
  gateway_name: PaymentGateway;
  user_id: number | string;
}

export type Shop = {
  [key: string]: any;
};

export type Address = {
  [key: string]: any;
};

export type Social = {
  url: string;
  icon: string;
  label: string;
};

export type Instagram = {
  id: string;
  media_url: string;
  media_type: string;
  permalink: string;
  caption: string;
};

export type StaticBanner = {
  id: number;
  title: string;
  slug: string;
  image: {
    mobile: StaticBannerImage;
    desktop: StaticBannerImage;
  };
};

export type StaticBannerImage = {
  url: string;
  width: number;
  height: number;
};

export type CollectionBanner = {
  id: number;
  slug: string;
  image: string;
  title: string;
  description?: string;
};

export type FeatureBanner = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

export type PaginatedTypes = {
  data: Type[];
  paginatorInfo: any;
};

export interface PaginatorInfo<T> {
  current_page: number;
  data: T[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: any[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
  paginatorInfo?: any;
}

export type LoginInputType = {
  email: string;
  password: string;
};
export type RegisterUserInputType = {
  name: string;
  email: string;
  password: string;
};

export type ChangePasswordInputType = {
  oldPassword: string;
  newPassword: string;
};
export type ForgetPasswordInputType = {
  email: string;
};
export type ResetPasswordInputType = {
  email: string;
  token: string;
  password: string;
};
export type VerifyPasswordInputType = {
  email: string;
  token: string;
};
export type SocialLoginInputType = {
  provider: string;
  access_token: string;
};
export type SendOtpCodeInputType = {
  phone_number: string;
};
export type VerifyOtpInputType = {
  phone_number: string;
  code: string;
  otp_id: string;
};
export type OtpLoginInputType = {
  phone_number: string;
  code: string;
  otp_id: string;
  name?: string;
  email?: string;
};
export type UpdateContactInput = {
  phone_number: string;
  code: string;
  otp_id: string;
  user_id: string;
};

export interface User {
  id: string;
  name: string;
  email: string;
  wallet: {
    total_points: number;
    points_used: number;
    available_points: number;
  };
  profile: {
    id?: string;
    contact?: string;
    bio?: string;
    avatar?: Attachment;
  };
  address: Address[];
}

export type VerifyCheckoutInputType = {
  amount: number;
  products: any[];
  billing_address: any;
  shipping_address: any;
};

export type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  description: string;
};

export type VerifyCouponInputType = {
  code: string;
  sub_total: number;
};

export type CustomerType = {
  id: string;
  [key: string]: unknown;
};
export type ContactType = {
  name: string;
  email: string;
  subject: string;
  description: string;
};

export type OrderCreateInputType = {
  [key: string]: unknown;
};

export type SettingsResponse = {
  options: SettingsOptions;
};

export enum PaymentGateway {
  STRIPE = 'STRIPE',
  COD = 'CASH_ON_DELIVERY',
  PAYPAL = 'PAYPAL',
  MOLLIE = 'MOLLIE',
  RAZORPAY = 'RAZORPAY',
  PAYSTACK = 'PAYSTACK',
}

export enum PaymentStatus {
  PENDING = 'payment-pending',
  PROCESSING = 'payment-processing',
  SUCCESS = 'payment-success',
  FAILED = 'payment-failed',
  REVERSAL = 'payment-reversal',
  COD = 'cash-on-delivery',
  AWAITING_FOR_APPROVAL = 'payment-awaiting-for-approval',
}

export enum OrderStatus {
  PENDING = 'order-pending',
  PROCESSING = 'order-processing',
  COMPLETED = 'order-completed',
  CANCELLED = 'order-cancelled',
  REFUNDED = 'order-refunded',
  FAILED = 'order-failed',
  AT_LOCAL_FACILITY = 'order-at-local-facility',
  OUT_FOR_DELIVERY = 'order-out-for-delivery',
}

export type NumberOrString = number | string;

export type PaginatedOrder = {
  data: Order[];
  paginatorInfo: any;
};
export interface SettingsQueryOptions extends QueryOptions {}
export interface AttributeQueryOptions extends QueryOptions {}

export interface TypePaginator extends PaginatorInfo<Type> {}
export interface CategoryPaginator extends PaginatorInfo<Category> {}
export interface CouponPaginator extends PaginatorInfo<Coupon> {}
export interface OrderPaginator extends PaginatorInfo<Order> {}
export interface ProductPaginator extends PaginatorInfo<Product> {}
export interface ShopPaginator extends PaginatorInfo<Shop> {}
export interface TagPaginator extends PaginatorInfo<Tag> {}