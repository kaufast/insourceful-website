import "../public/assets/css/zeena.css"
import "../public/assets/css/logo-sizing.css"
// import "../public/assets/css/insourceful-theme.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { openSans, poppins } from '@/lib/font'
export const metadata = {
    title: 'InSourceful',
    description: 'Next Js template'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${openSans.variable} ${poppins.variable}`}>
            <body>{children}</body>
        </html>
    )
}
