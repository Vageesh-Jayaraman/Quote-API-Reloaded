import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function QuoteDisplay({ quote, category, author }: { quote: string, category: string, author: string }) {
    return (
        <div className="my-5 p-3 rounded-lg bg-neutral-800 border border-transparent hover:border-[#3CB371] transition-colors duration-200">
            <p className={`${inter.className} flex flex-wrap text-m font-semibold text-[#66CDAA]`}>
                {quote}
            </p>
            <p className="text-base italic text-gray-200">{author}</p>
            <p className="text-sm font-bold text-orange-400">{category.charAt(0).toUpperCase() + category.slice(1)}</p>
        </div>
    );
}
