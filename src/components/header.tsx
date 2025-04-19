import Link from "next/link";

export default function Header() {
    return (
        <div>
            <div className="flex justify-between md:px-64 py-4 px-4 border-b-1">
                <div className="flex items-center">
                    <Link className="mr-8 text-gray-300" href="/">Home</Link>
                </div>
                <div className="flex items-center">
                    <a className="" target="_blank" href="https://github.com/dolphick/dolphick.com">Edit this page</a>
                </div>
            </div>
        </div>
    )
}