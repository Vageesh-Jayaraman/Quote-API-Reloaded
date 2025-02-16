"use client";

interface DeviceProps {
    height: string;
    width: string;
    device: string;
    onClick?: (device: string) => void;
}

export default function Device({ height, width, device, onClick }: DeviceProps) {
    return (
        <button
            className="hover:border rounded-md p-4 w-fit justify-center items-center text-center flex flex-col gap-2 hover:bg-neutral-800"
            onClick={() => onClick?.(device)} 
        >
            <div
                className="border-2 rounded-md bg-black border-[#3CB371]"
                style={{ width, height }}
            ></div>
            <p className="font-semibold text-neutral-300">{device}</p>
        </button>
    );
}
