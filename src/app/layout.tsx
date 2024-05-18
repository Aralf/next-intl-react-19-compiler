import {NextIntlClientProvider, useMessages} from 'next-intl';
import {ReactNode} from 'react';
import {getLocale, getMessages} from "next-intl/server";

type Props = {
  children: ReactNode;
};

export default async function LocaleLayout({children}: Props) {
    const locale = await getLocale();

    const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <title>next-intl & next-auth</title>
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
