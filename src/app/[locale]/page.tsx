
import Cookies from 'js-cookie';
import { redirect } from 'next/navigation';
 
export default function RootPage() {
     let locale = Cookies.get('NEXT_LOCALE') || 'en';
  return redirect(`/${locale}/home`) ;
}