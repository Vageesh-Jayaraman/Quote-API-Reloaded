import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

export default function QuoteOfTheDay() {
  return (
    <div className="px-10 py-10">
      <div className="relative w-50 h-96 hover:border-2 bg-gradient-to-r from-[#006835] to-[#73E568] flex justify-center items-center rounded-md">
        <p className="absolute top-2 left-2 text-base font-mono font-bold bg-black px-2 py-1 rounded-md text-neutral-400">
          Quote of the Day
        </p>

        <p className={`text-center text-6xl text-white  ${roboto.className} p-10`}>
        Just one small positive thought in the morning can change your whole day
        </p>
      </div>
    </div>
  );
}
