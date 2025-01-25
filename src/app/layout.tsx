import './global.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import Header from '@/components/Header';
import localFont from 'next/font/local';
import { Viewport } from 'next';
import Footer from '@/components/Footer';

const SF_Pro = localFont({src: './fonts/sf-pro-text_regular.woff2'});

export const viewport: Viewport = {
    themeColor: 'skyblue',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
}

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <html lang="ja">
            <body className={SF_Pro.className}>
                <Header />
                {children}
                <Footer />
            </body>
            <GoogleAnalytics gaId="G-C680912EEE" />
        </html>
    )
}
