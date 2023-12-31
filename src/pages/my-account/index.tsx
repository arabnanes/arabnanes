import Link from "@components/ui/link";
import { getLayout } from "@components/layout/layout";
import AccountLayout from "@components/my-account/account-layout";
import { ROUTES } from "@lib/routes";
import { useTranslation } from "next-i18next";
import {useUser} from "@framework/auth";
import Spinner from "@components/ui/loaders/spinner/spinner";
import { WebsiteData } from "@framework/utils/ApiCalls";
import { useEffect, useState } from "react";

export { getStaticProps } from "@framework/common.ssr";


export default function AccountPage() {
  const { t } = useTranslation("common");
  // const { me, loading } = useUser();


  const [userData, setUserData] = useState(null)

  async function getSocialData(){
    const data = WebsiteData() 
    const response: any = await data.getUserData()
    return setUserData(response)
    }    

    useEffect(() => {
      getSocialData()
    }, [])

  if (userData === null) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Spinner showText={false} />
      </div>
    );
  }

  const currentUserIdentity = userData.data.name ?? userData.data.email;
  return (
    <AccountLayout>
      <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-3 xl:mb-5">
        {t("text-dashboard")}
      </h2>
      <div className="text-sm leading-7 md:text-base md:leading-loose">
        <p className="capitalize">
          {t("text-hello")}{" "}
          <span className="font-bold">{currentUserIdentity}</span> (not{" "}
          <span className="font-bold">{currentUserIdentity}</span>?{" "}
          <Link
            href={`${ROUTES.LOGOUT}`}
            className="font-bold underline cursor-pointer focus:outline-none"
          >
            {t("text-logout")}
          </Link>
          )
        </p>
        <br />
        {t("text-account-dashboard")}{" "}
        <Link
          href={ROUTES.ACCOUNT_ORDERS}
          className="text-heading underline font-semibold"
        >
          {t("text-recent-orders")}
        </Link>
        , {t("text-manage-your")}{" "}
        <Link
          href={ROUTES.ACCOUNT_ADDRESS}
          className="text-heading underline font-semibold"
        >
          {t("text-account-address")}
        </Link>{" "}
        {t("text-and")}{" "}
        <Link
          href={ROUTES.ACCOUNT_CONTACT_NUMBER}
          className="text-heading underline font-semibold"
        >
          {t("text-contact-number")}
        </Link>{" "}
        {t("text-and")}{" "}
        <Link
          href={ROUTES.ACCOUNT_CHANGE_PASSWORD}
          className="text-heading underline font-semibold"
        >
          {t("text-change-your-password")}
        </Link>
      </div>
    </AccountLayout>
  );
}

AccountPage.authenticate = true;
AccountPage.getLayout = getLayout;
