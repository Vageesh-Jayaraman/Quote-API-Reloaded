import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["500"],
  subsets: ["cyrillic"],

});

export default function QuoteOfTheDay() {
  return (
    <div className="mx-20 mt-10">
      <div className="text-center text-4xl font-semibold text-neutral-200 cursor-pointer relative group">
        <span className="relative ">
          Quote of the day
          <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-[#2E8B57] transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </span>
      </div>
      <div
        className="relative mt-5 p-20 w-50 h-fit hover:border-4 hover:border-green-600 flex justify-center items-center rounded-md"
        style={{
          backgroundColor: "#50C878",
          backgroundImage:
            "linear-gradient(319deg, #50C878 0%, #fbaed2 37%, #f0dc82 100%)",
        }}
      >
        <p className="absolute top-2 left-2 text-base font-mono font-bold bg-black px-2 py-1 rounded-md text-green-500">
          Still under dev!
        </p>

        <p className={`text-center text-4xl text-black ${roboto.className} p-10 font-bold`}>
          It always seems impossible until it’s done.
        </p>
      </div>
    </div>
  );
}
