import Script from 'next/script'

export default function GoogleAnalytics() {
    const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

    // If using Google Tag Manager
    if (GTM_ID) {
        return (
            <>
                {/* Google Tag Manager */}
                <Script
                    id="gtm-script"
                    strategy="afterInteractive"
                >
                    {`
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer',${GTM_ID});
                    `}
                </Script>
            </>
        )
    }

    // If using Google Analytics 4
    if (GA_MEASUREMENT_ID) {
        return (
            <>
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', ${GA_MEASUREMENT_ID});
                    `}
                </Script>
            </>
        )
    }

    return null
}

// Google Tag Manager noscript fallback (add this to body)
export function GTMBodyScript() {
    const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID
    
    if (!GTM_ID) return null

    return (
        <noscript>
            <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
            />
        </noscript>
    )
}