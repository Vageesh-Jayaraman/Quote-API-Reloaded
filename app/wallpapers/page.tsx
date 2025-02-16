"use client";

import NavigationBar from "@/components/helpers/NavBar";
import ColorBar from "./colorbar";
import Header from "@/components/helpers/Header";
import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import html2canvas from "html2canvas";
import Device from "@/components/helpers/Device";

const gradientSize = {
    Mobile: { height: 633, width: 400 },
    Desktop: { height: 381, width: 600 },
    "LinkedIn Banner": { height: 256, width: 725 },
    "LinkedIn Post": { height: 363, width: 600 },
    "Instagram Post": { height: 600, width: 600 },
    "Instagram Portrait": { height: 600, width: 500 },
    "YouTube Banner": { height: 266, width: 600 },
    "YouTube Thumbnail": { height: 381, width: 600 },
    "Facebook Cover": { height: 284, width: 600 },
    "Facebook Ad": { height: 500, width: 600 },
};

export default function Home() {
    const [color1, setColor1] = useState("#ff5733");
    const [color2, setColor2] = useState("#33c9ff");
    const [text, setText] = useState("");
    const [selectedDevice, setSelectedDevice] = useState<keyof typeof gradientSize>("Desktop"); 
    const gradientRef = useRef(null);

    const saveAsImage = async () => {
        if (!gradientRef.current) return;
        const canvas = await html2canvas(gradientRef.current);
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "quote.png";
        link.click();
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header title="Wallpapers" />
            <NavigationBar />

            <div className="my-5 flex justify-center items-center">
                <div className="w-fit border-2 p-4 rounded-lg border-[#2E8B57]">
                    <h2 className="text-2xl font-semibold text-center mb-6 text-neutral-300">
                        Standard Wallpaper Sizes
                    </h2>

                    <div className="grid grid-cols-5 gap-x-4 gap-y-4 place-items-center items-end">
                        {Object.entries(gradientSize).map(([device, size]) => (
                            <Device
                                key={device}
                                height={`${size.height / 4}px`}
                                width={`${size.width / 4}px`}
                                device={device}
                                onClick={() => setSelectedDevice(device as keyof typeof gradientSize)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-10 flex justify-center">
                <Input
                    className="mx-20 w-1/2 p-2 border border-gray-300 border-2 rounded-lg"
                    placeholder="Enter your favourite quote!"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>

            <div className="flex flex-col items-center gap-y-10 mt-10 mb-20">
                <div className="flex flex-row gap-x-10">
                    <ColorBar color={color1} onChange={setColor1} />
                    <ColorBar color={color2} onChange={setColor2} />
                </div>

                <div
                    ref={gradientRef}
                    className="flex items-center justify-center text-white font-mono font-semibold p-4"
                    style={{
                        background: `linear-gradient(45deg, ${color1}, ${color2})`,
                        width: `${gradientSize[selectedDevice].width}px`,
                        height: `${gradientSize[selectedDevice].height}px`,
                        display: "flex",
                        flexWrap: "wrap",
                        textAlign: "center",
                        wordBreak: "break-word",
                        overflow: "hidden",
                        fontSize: "clamp(12px, 5vw, 24px)",
                    }}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        saveAsImage();
                    }}
                >
                    <span className="w-full flex justify-center items-center">{text}</span>
                </div>
            </div>

        </div>
    );
}
