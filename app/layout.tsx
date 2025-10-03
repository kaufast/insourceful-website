import "../public/assets/css/zeena.css"
import "../public/assets/css/logo-sizing.css"
import "../public/assets/css/contact-form.css"
import "../public/assets/css/sticky-header-fix.css"
// import "../public/assets/css/insourceful-theme.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { openSans, poppins } from '@/lib/font'
import StructuredData from '@/components/seo/StructuredData'
import GoogleAnalytics, { GTMBodyScript } from '@/components/GoogleAnalytics'
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${openSans.variable} ${poppins.variable}`}>
            <head>
                <GoogleAnalytics />
            </head>
            <body>
                <GTMBodyScript />
                <StructuredData />
                {children}
            </body>
        </html>
    )
}
