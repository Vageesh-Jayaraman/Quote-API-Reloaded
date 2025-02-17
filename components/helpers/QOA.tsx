import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

export default function QuoteOfTheDay() {
  return (
    <div className="mx-20 mt-10">
      <div className="relative p-20 w-50 h-fit hover:border-2 bg-gradient-to-r from-[#006835] to-[#73E568] flex justify-center items-center rounded-md">
        <p className="absolute top-2 left-2 text-base font-mono font-bold bg-black px-2 py-1 rounded-md text-neutral-400">
          Still under dev!
        </p>

        <p className={`text-center text-4xl text-white  ${roboto.className} p-10`}>
        Just one small positive thought in the morning can change your whole day
        </p>
      </div>
    </div>
  );
}
