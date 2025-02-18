"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import Header from "@/components/helpers/Header";
import NavigationBar from "@/components/helpers/NavBar";
import colors from "@/components/colors";

function InputBox({ value, onChange }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
    return <Input type="text" value={value} onChange={onChange} />;
}

const apiEndpoints = [
    "/api/quotes",
    "/api/random",
    "/api/{id}",
    "/api/author/{author}",
    "/api/category/{category}",
    "/api/language/{language}",
    "/api/popularity-range?minPopularity={minPopularity}&maxPopularity={maxPopularity}",
    "/api/date-range?startDate={startDate}&endDate={endDate}",
];

export default function Home() {
    const [inputValue, setInputValue] = useState<string>("");
    const [responseData, setResponseData] = useState<string | null>(null);
    const [routes, setRoutes] = useState<string[]>([]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setRoutes(apiEndpoints.map((endpoint) => window.location.origin + endpoint));
        }
    }, []);

    async function getRoute(route: string) {
        try {
            setResponseData("Loading...");
            const response = await fetch(`${route}`);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setResponseData(JSON.stringify(data, null, 2));
        } catch (error) {
            if (error instanceof Error) {
                setResponseData(`Error: ${error.message}`);
            } else {
                setResponseData("An unknown error occurred.");
            }
        }
    }

    const options = [
        { title: "All Quotes"},
        { title: "Random" },
        { title: "ID" },
        { title: "Author" },
        { title: "Category" },
        { title: "Language" },
        { title: "Popularity Range" },
        { title: "Date Range" },
    ];

    return (
        <div>
            <NavigationBar />
            <Header title={"API Playground"} />
            <div className="flex gap-5 my-10 mx-20">
                <Select
                    onValueChange={(value) => {
                        const index = options.findIndex((opt) => opt.title.toLowerCase() === value);
                        if (index !== -1) {
                            setInputValue(routes[index]);
                            setResponseData(null);
                        }
                    }}
                >
                    <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder={`Select API Route`} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>API Routes</SelectLabel>
                            {options.map((option) => (
                                <SelectItem key={option.title} value={option.title.toLowerCase()}>
                                    {option.title}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <div className="flex font-mono font-bold w-full">
                    <InputBox value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                </div>
                <button
                    className="px-3 font-base rounded-md hover:pointer"
                    style={{ backgroundColor: colors.seaGreen }}
                    onClick={() => getRoute(inputValue)}
                >
                    Submit
                </button>
            </div>
            <div className="border-2 border-[#2E8B57] scroll-smooth overflow-auto rounded-md p-4 mx-20 mt-5 max-h-[32rem]">
                {responseData ? <pre>{responseData}</pre> : <p className="text-center italic">The Response appears here</p>}
            </div>
        </div>
    );
}
