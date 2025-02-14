import { Headland_One } from "next/font/google";

const headlandOne = Headland_One({
  weight: ["400"], 
  subsets: ["latin"],
});

export default function Header({title} : {title:string}) {
  return (
    <div className="m-20 mb-0 w-50 h-64 bg-gradient-to-r from-[#66CDAA]  to-[#1A4314] flex justify-center items-center">
      <p className={`text-center text-7xl text-white ${headlandOne.className}`}>
        {title}
      </p>
    </div>
  );
}
