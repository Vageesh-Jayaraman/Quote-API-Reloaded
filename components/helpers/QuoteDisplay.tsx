import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function QuoteDisplay({ quote, category, author }: { quote: string, category: string, author: string }) {
    return (
        <div className="my-5 mx-10 p-10 rounded-lg bg-neutral-800 border-2 border-transparent transition-colors duration-200 hover:border-gray-500">
            <p className={`${inter.className} flex flex-wrap text-m font-semibold`}>
                {quote}
            </p>
            <div className="flex justify-between items-center">
                <p className="text-base italic">{author}</p>
                <p className="bg-[#0B3D0B] rounded-md px-2 py-1 text-sm font-bold text-[#66CDAA]">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </p>
            </div>
        </div>
    );
}
