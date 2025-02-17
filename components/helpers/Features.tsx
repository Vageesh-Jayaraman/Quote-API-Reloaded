import { cn } from "@/lib/utils";
import {
  IconApi,
  IconBook,
  IconSearch,
  IconLanguage,
  IconCalendar,
  IconWallpaper,
  IconRocket,
  IconCode,
} from "@tabler/icons-react";

export default function Features() {
  const features = [
    {
      title: "Public API for Learning & Dev",
      description: "No sign-in required. Just start using the API instantly.",
      icon: <IconApi />,
    },
    {
      title: "Proper Documentation",
      description: "Well-structured docs to help you integrate effortlessly.",
      icon: <IconBook />,
    },
    {
      title: "Quote of the Day - AI Generated",
      description: "Get an AI-generated quote tailored for daily inspiration.",
      icon: <IconCalendar />,
    },
    {
      title: "Search Quotes, Authors & Categories",
      description: "Find your favorite quotes by author, category, or keywords.",
      icon: <IconSearch />,
    },
    {
      title: "API Playground",
      description: "Test API endpoints directly from your browser.",
      icon: <IconCode />,
    },
    {
      title: "Available in English & Sanskrit",
      description: "Read and search quotes in both English and Sanskrit.",
      icon: <IconLanguage />,
    },
    {
      title: "Create Quote Wallpapers",
      description: "Turn your favorite quotes into stunning wallpapers.",
      icon: <IconWallpaper />,
    },
    {
      title: "Fast & High Performance",
      description: "Optimized backend ensures quick responses & smooth UX.",
      icon: <IconRocket />,
    },
  ];
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="">
        <div className="text-center text-4xl font-semibold text-neutral-200 cursor-pointer relative group">
          <span className="relative">
            Why You'll Love It
          <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-[#2E8B57] transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-5 max-w-7xl mx-20">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}


const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-gray-700",
        (index === 0 || index === 4) && "lg:border-l border-gray-700",
        index < 4 && "lg:border-b border-gray-700",
        "bg-black transition-colors duration-300 hover:bg-neutral-900"
      )}
    >
      <div className="relative z-10 px-10 text-gray-300">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-600 group-hover/feature:bg-green-500 transition-all duration-200" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-400 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
