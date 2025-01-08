import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

type Locale = (typeof routing.locales)[number]; // Infer the type of valid locales

export default getRequestConfig(async ({ requestLocale }: { requestLocale: Promise<string | undefined> }) => {
  // Resolve the promise returned by requestLocale
  const resolvedLocale = await requestLocale;

  // Ensure the locale is valid, or fallback to the default
  const locale: Locale = routing.locales.includes(resolvedLocale as Locale)
    ? (resolvedLocale as Locale)
    : routing.defaultLocale;

  try {
    const messages = await import(`../../messages/${locale}.json`);
    return {
      locale,
      messages: messages.default,
    };
  } catch (error) {
    console.error(`Error loading messages for locale "${locale}":`, error);
    throw new Error(`Locale messages for "${locale}" could not be loaded.`);
  }
});
