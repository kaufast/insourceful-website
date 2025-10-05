import "../public/assets/css/zeena.css"
import "../public/assets/css/logo-sizing.css"
import "../public/assets/css/contact-form.css"
import "../public/assets/css/sticky-header-fix.css"
// ACCESSIBILITY FIXES - MUST BE LAST TO OVERRIDE ALL OTHER STYLES
import "../public/assets/css/accessibility-fixes.css"
// import "../public/assets/css/insourceful-theme.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { openSans, poppins } from '@/lib/font'
import StructuredData from '@/components/seo/StructuredData'
import Script from 'next/script'
export const metadata = {
    title: {
        default: 'InSourceful - Enterprise Technology Consulting Services',
        template: '%s | InSourceful'
    },
    description: 'Expert technology consulting services for enterprise businesses. We provide Oracle system integration, process optimization, and digital transformation solutions to drive growth and efficiency.',
    keywords: ['technology consulting', 'enterprise software', 'Oracle consulting', 'business process optimization', 'digital transformation', 'system integration'],
    authors: [{ name: 'InSourceful' }],
    creator: 'InSourceful',
    publisher: 'InSourceful',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://insourceful.ai'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'InSourceful - Enterprise Technology Consulting Services',
        description: 'Expert technology consulting services for enterprise businesses. Oracle system integration, process optimization, and digital transformation solutions.',
        url: 'https://insourceful.ai',
        siteName: 'InSourceful',
        images: [
            {
                url: '/assets/images/resources/insourceful-og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'InSourceful - Enterprise Technology Consulting',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'InSourceful - Enterprise Technology Consulting Services',
        description: 'Expert technology consulting services for enterprise businesses. Oracle system integration, process optimization, and digital transformation solutions.',
        images: ['/assets/images/resources/insourceful-og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'verification_code_here',
        yandex: 'verification_code_here',
        yahoo: 'verification_code_here',
    },
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${openSans.variable} ${poppins.variable}`}>
            <head>
                {/* Preload critical LCP image */}
                <link
                    rel="preload"
                    as="image"
                    href="/assets/images/backgrounds/hero.webp"
                />
                {/* Performance optimization meta */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#0066cc" />
                
            </head>
            <body>
                <StructuredData />
                {children}
                
                {/* Google Analytics */}
                {GA_MEASUREMENT_ID && (
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
                                gtag('config', '${GA_MEASUREMENT_ID}');
                            `}
                        </Script>
                    </>
                )}
            </body>
        </html>
    )
}
