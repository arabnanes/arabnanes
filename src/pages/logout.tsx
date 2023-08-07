import { useEffect } from 'react';
import { signOut as socialLoginSignOut } from 'next-auth/react';
import { useLogout } from '@framework/auth';
import { useAtom } from 'jotai';
import { GetStaticProps } from 'next';
import PageLoader from '@components/ui/page-loader/page-loader';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { clearCheckoutAtom } from '@store/checkout';
import Cookies from 'js-cookie';
import { authorizationAtom } from '@store/authorization-atom';
import { useRouter } from 'next/router';


const Logout = () => {
  const { mutate: logout } = useLogout();
  const [, resetCheckout] = useAtom(clearCheckoutAtom);
  const [_, setAuthorized] = useAtom(authorizationAtom);
  const router = useRouter()

  useEffect(() => {
    
    (async () => {
      //@ts-ignore
      resetCheckout();
      setAuthorized(false)
      Cookies.remove('auth_token')
      localStorage.clear()
      await socialLoginSignOut({ redirect: false });
      router.push('/')
      // logout();
    })();
  }, []);

  return <PageLoader />;
};

export default Logout;

export const getStaticProps: GetStaticProps = ({ locale }) => {
  return {
    props: {
      ...serverSideTranslations(locale!, ['common']),
    },
  };
};
