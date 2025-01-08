import Cookies from 'js-cookie';
import { redirect } from 'next/navigation';

export default function RootPage() {
  const locale = Cookies.get('NEXT_LOCALE') || 'en'; // Changed 'let' to 'const'
  return redirect(`/${locale}/home`);
}
