import { getLayout } from "@components/layout/layout";
import AccountLayout from "@components/my-account/account-layout";
import ErrorMessage from "@components/ui/error-message";
import Spinner from "@components/ui/loaders/spinner/spinner";
import AccountAddress from "@components/my-account/account-address";
import {useUser} from "@framework/auth";
import { useTranslation } from "next-i18next";
import { WebsiteData } from "@framework/utils/ApiCalls";
import { useEffect, useState } from "react";

export { getStaticProps } from "@framework/common.ssr";

export default function AccountDetailsPage() {
  const { me, loading, error } = useUser();
  const { t } = useTranslation();


  const [userData, setUserData] : any = useState(null)

  async function getSocialData(){
    const data = WebsiteData() 
    const response: any = await data.getUserData()
    return setUserData(response)
    }    

    useEffect(() => {
      getSocialData()
    }, [])


  // if (error) return <ErrorMessage message={error.message} />;

  return (userData != null) ?  (
    <AccountLayout>
        <AccountAddress
          addresses={userData.data.address}
          userId={userData.data.id}
          label={t("text-account-address")}
        />
      
    </AccountLayout>
  ) : <Spinner showText={false} />
}

AccountDetailsPage.authenticate = true;
AccountDetailsPage.getLayout = getLayout;
