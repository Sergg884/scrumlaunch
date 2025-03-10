import type { Metadata } from 'next';
import Script from 'next/script';
import localFont from 'next/font/local';
import '@/assets/css/main.scss';
import ScriptsLoader from '@/components/scripts-loader';

const proximaNova = localFont({
  src: [
    {
      path: '../assets/fonts/ProximaNova-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ProximaNova-Semibold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ProximaNova-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ProximaNova-Black.woff',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-proxima-nova',
});

export const metadata: Metadata = {
  title: 'ScrumLaunch',
  description:
    'ScrumLaunch enables start-ups, businesses, and organizations to hire developers from a growing network of top talent in the world. Our React, Python, PHP, Kotlin experts ready to work full-time, part-time, or hourly who will seamlessly integrate into your team.',
  applicationName: 'ScrumLaunch',
  openGraph: {
    title: 'ScrumLaunch',
    description:
      'ScrumLaunch enables start-ups, businesses, and organizations to hire developers from a growing network of top talent in the world.',
    siteName: 'ScrumLaunch',
  },
  formatDetection: {
    telephone: false,
  },
  appleWebApp: {
    title: 'ScrumLaunch',
  },
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </head>
      <body className={`${proximaNova.variable}`}>
        {children}

        {/* HubSpot Script */}
        <Script
          id="hs-script-loader"
          src="https://js.hs-scripts.com/43665306.js"
          strategy="afterInteractive"
        />

        {/* HubSpot Forms Script */}
        <Script
          src="//js.hsforms.net/forms/embed/v2.js"
          strategy="afterInteractive"
        />

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.GOOGLE_TAG_MANAGER_ID || 'GTM-XXXXXXX'}');
            `,
          }}
        />

        {/* Scripts Loader */}
        <ScriptsLoader />
      </body>
    </html>
  );
}

export default RootLayout;
