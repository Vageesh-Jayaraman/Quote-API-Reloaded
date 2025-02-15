"use client";

import { useState, useEffect, useMemo } from "react";
import colors from "@/components/colors";
import { ClipboardCopy, Check } from "lucide-react";

export default function CodeBlock({ link, params, query, code }: { link: string, params: string, query: string, code: string }) {
    const [origin, setOrigin] = useState("");

    useEffect(() => {
        setOrigin(window.location.origin);
    }, []);

    const fullLink = useMemo(() => origin + link, [origin, link]);
    const fullSampleLink = useMemo(() => origin + query, [origin, query]);

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(fullLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="px-10 py-5 m-20 rounded-lg border hover:border-2" style={{ backgroundColor: "#0D0D0D", borderColor: colors.lightSeaGreen }}>
            <div className="font-mono flex gap-5 flex-row items-center">
                <p className="px-2 py-1 font-bold rounded text-white shadow-md" style={{ backgroundColor: 'rgba(0, 166, 147, 0.7)' }}>
                    GET
                </p>
                <div className="flex items-center font-bold w-full px-5 py-1 rounded-md bg-gray-800 " style={{
                    border: `2px solid ${colors.seaGreen}`
                }}>
                    <p className="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap">{fullLink}</p>
                    <button onClick={handleCopy} className="ml-3 p-1 rounded-md hover:opacity-80 transition">
                        {copied ? <Check size={16} color="white" /> : <ClipboardCopy size={16} color="white" />}
                    </button>
                </div>
            </div>

            <div className="my-4">
                <p className="font-bold font-sans" style={{ color: colors.mediumSeaGreen }}>Parameters</p>
                <pre className="font-semibold py-4 px-10 w-full my-2 rounded-md bg-[#161616] text-gray-200 ">
                    <code>{params}</code>
                </pre>
            </div>

            <div className="my-4">
                <p className="font-bold font-sans" style={{ color: colors.mediumSeaGreen }}>Sample Query </p>
                <pre className="py-4 px-10 w-full my-2 rounded-md bg-[#161616] text-gray-200 text-sm">
                    <code>{fullSampleLink}</code>
                </pre>
            </div>

            <div className="my-6">
                <p className="font-bold font-sans" style={{ color: colors.mediumSeaGreen }}>Sample Response</p>
                <pre className="py-5 px-10 w-full my-2 rounded-md bg-[#161616] text-gray-200 text-sm">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    );
}
