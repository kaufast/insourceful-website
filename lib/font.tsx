import { Open_Sans, Poppins } from 'next/font/google'

export const openSans = Open_Sans({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--thm-font-twp",
    display: 'swap',
})

export const poppins = Poppins({
    weight: ['400', '500', '600', '700',],
    subsets: ['latin'],
    variable: "--thm-font",
    display: 'swap',
})
