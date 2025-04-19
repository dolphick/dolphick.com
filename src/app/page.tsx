import Image from "next/image";
import Link from "next/link";
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default async function Home() {
    return (
        <div className="py-8 justify-items-center">
            <Image className="rounded-full" src="/dolphick.jpg" alt="Dolphick" width={256} height={256} />
            <span className="text-2xl">Dolphick</span>
            <div className="flex justify-evenly pt-4">
                <Link href="mailto:dolphick.e24vm@slmail.me"><EmailIcon fontSize="large" /></Link>
                <Link href="https://t.me/dolphick"><TelegramIcon fontSize="large" /></Link>
                <Link href="https://x.com/dlphck"><XIcon fontSize="large" /></Link>
                <Link href="https://www.youtube.com/@dolphick"><YouTubeIcon fontSize="large" /></Link>
            </div>
        </div>
    );
}