"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function BorderMagicButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/documentation")}
      className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none"
    >
      <span className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2E8B57_0%,#66CDAA_100%)]" />
      <span className="font-semibold inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-slate-950 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl">
        View Documentation <ArrowRight className="w-4 h-4" />
      </span>
    </button>
  );
}
