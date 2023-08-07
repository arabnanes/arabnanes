import { API_ENDPOINTS } from "@framework/utils/endpoints";
import { GetStaticPathsContext, GetStaticPathsResult, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import client from '@framework/utils/index'
import invariant from 'tiny-invariant';
import { SettingsQueryOptions } from "@type/index";

// This function gets called at build time
export async function getStaticPaths({ locales  }: GetStaticPathsContext): Promise<GetStaticPathsResult> {
  invariant(locales, 'locales is not defined');


  
  const products : any = await client.product.find({ limit: 100 });
  
  const paths = products.hot_deals.map((product: any) => ({
    params: { id: product.id },
    locale: locales[0], // You can adjust this to match your localization strategy
  }));
  
  return {
    paths ,
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const slug = params?.slug as string;

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });

  await queryClient.prefetchQuery([API_ENDPOINTS.SETTINGS, { language: locale }], ({ queryKey }) => client.settings.findAll(queryKey[1] as SettingsQueryOptions))

  try {
    const product = await client.product.findOne({slug, language: locale});
    return {
      props: {
        product,
        ...(await serverSideTranslations(locale!, [
          "common",
          "menu",
          "forms",
          "footer",
        ])),
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
      revalidate: Number(process.env.REVALIDATE_DURATION) ?? 120,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
