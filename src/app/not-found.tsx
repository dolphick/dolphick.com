import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'dolphick.com',
    description: '404(NotFound)',
    icons: {
        icon: '/favicon.ico'
    },
    openGraph: {
        images: '/images/dolphick.webp',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'dolphick.com',
        description: '404(NotFound)',
        images: ['/images/dolphick.webp'],
        creator: '@dolphick',
        creatorId: '1764669515210891264'
    },
}

export default function NotFound() {
    return (
        <div>
            存在しないページです
        </div>
    )
}