import { getLayout } from "@components/layout/layout";
import AccountLayout from "@components/my-account/account-layout";
import ProfileContactNumber from "@components/profile/profile-contact-number";
import {useUser} from "@framework/auth";
import { WebsiteData } from "@framework/utils/ApiCalls";
import { useEffect, useState } from "react";

export { getStaticProps } from "@framework/common.ssr";

export default function ChangeContactNumber() {
  const { me } = useUser();

  const [userData, setUserData] : any = useState(null)

  async function getSocialData(){
    const data = WebsiteData() 
    const response: any = await data.getUserData()
    return setUserData(response)
    }    

    useEffect(() => {
      getSocialData()
    }, [])

  return (userData != null) ? (
    <AccountLayout>
      <ProfileContactNumber userId={userData.data.id} profileId={userData.data.id} contact={userData.data.phone}/>
    </AccountLayout>
  ) : null
}

ChangeContactNumber.authenticate = true;
ChangeContactNumber.getLayout = getLayout;
