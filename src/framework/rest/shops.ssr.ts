import { API_ENDPOINTS } from "@framework/utils/endpoints";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import client from '@framework/utils/index'
import { SettingsQueryOptions } from "@type/index";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  try {

    return {
      props: {
        ...(await serverSideTranslations(locale!, [
          "common",
          "menu",
          "forms",
          "footer",
        ])),
      },
    };
  } catch (error) {
    console.log(error)
    // If we get here means something went wrong in promise fetching
    return {
      notFound: true,
    };
  }
};
