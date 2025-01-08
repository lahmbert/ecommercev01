import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

type Locale = (typeof routing.locales)[number]; // Infer 'en' | 'id'

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string } | Promise<{ locale: string }>; // `params` may be a promise
}) {
  // Await `params` if it is a promise
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  // Ensure the `locale` is valid
  if (!routing.locales.includes(locale as Locale)) {
    return notFound(); // Safely handle invalid locales
  }

  // Retrieve messages for the specified locale
  const messages = await getMessages({ locale: locale as Locale }).catch(
    (error) => {
      console.error(`Failed to load messages for locale "${locale}":`, error);
      return {}; // Fallback to an empty object if loading fails
    }
  );

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale as Locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
