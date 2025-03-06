import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dolphick',
    description: 'dolphick.com',
    icons: {
        icon: '/favicon.ico'
    },
    openGraph: {
        title: 'dolphick',
        description: 'dolphick.com',
        url: 'https://dolphick.com',
        siteName: 'dolphick.com',
        images: 'https://dolphick.com/images/dolphick.webp',
        locale: 'ja_JP',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'dolphick',
        description: 'dolphick.com',
        creator: '@dolphick',
        creatorId: '1764669515210891264',
        images: ['https://dolphick.com/images/dolphick.webp']
    },
}

export default function Page() {
    return (
        <div className='h-full w-full bg-no-repeat text-white text-center' style={{backgroundImage: "url('/images/background_photo.webp')", backgroundPositionX: "center", backgroundPositionY: "25%"}}>
            <div className='h-full w-full backdrop-blur-sm grid place-content-center place-items-center'>
                <div className='border-2 rounded-lg p-4'>
                    <h1 className="font-bold text-4xl" style={{textShadow: "#000000 0px 0 15px"}}>Dolphick</h1>
                    <Image className='mx-auto rounded-full my-4' src="/images/dolphick.webp" alt='icon' width={256} height={256} />
                    <div className='text-xl'>
                        主にPythonやTypeScriptを使用してウェブサイトやDiscordのアプリケーションを開発しています。
                    </div>
                    <h2 className="font-bold text-3xl my-4" style={{textShadow: "#000000 0px 0 15px"}}>Contacts</h2>
                    <span className='flex justify-center m-auto'>
                        <Link className='mx-2' href="https://www.youtube.com/@dolphick" target="_blank"><Image src="/images/youtube.webp" alt="YouTube" width={90} height={64} /></Link>
                        <Link className='mx-2' href="https://x.com/dolphick" target="_blank"><Image src="/images/x.webp" alt="X" width={62} height={64} /></Link>
                        <Link className='mx-2' href="https://github.com/dolphick" target="_blank"><Image src="/images/github.webp" alt="GitHub" width={64} height={64} /></Link>
                        <Link className='mx-2' href="https://t.me/dolphick" target="_blank"><Image src="/images/telegram.webp" alt="Telegram" width={64} height={64} /></Link>
                    </span>
                </div>
            </div>
        </div>
    )
}
