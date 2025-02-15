"use client";
import Header from "@/components/helpers/Header";
import NavBar from "@/components/helpers/NavBar";
import QuoteDisplay from "@/components/helpers/QuoteDisplay";
import ComboBox from "@/components/helpers/SearchBar";
import SelectOptions from "@/components/helpers/SelectOptions";
import data from "@/data.json";
import { useState } from "react";

const categories = [
  { title: "Motivation" },
  { title: "Affirmation" },
  { title: "Fitness" },
  { title: "Relationship" },
  { title: "Positivity" },
];

export default function Home() {
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  let filteredQuotes = selectedAuthor
    ? data.filter((quote) => quote.author === selectedAuthor)
    : data;

  filteredQuotes = selectedCategory
    ? filteredQuotes.filter((quote) => quote.category.toLowerCase() === selectedCategory)
    : filteredQuotes; 

  return (
    <div>
      <NavBar />
      <Header title="Collections" />
      <div className="mx-20 flex flex-row-reverse gap-5">
        <SelectOptions 
          title="Category" 
          options={categories} 
          value={selectedCategory}
          onCategorySelect={setSelectedCategory } 
        />
        <ComboBox 
          value={selectedAuthor} 
          onAuthorSelect={setSelectedAuthor}
        />
      </div>
      <div className="mx-20 my-10">
        
        {filteredQuotes.length > 0  ? filteredQuotes.map((object, index) => (
          <QuoteDisplay
            key={index}
            quote={object.quote}
            author={object.author}
            category={object.category}
          /> 
        )) : <p className="text-center text-xl text-white">Oops! No results found 😔</p>} 
      </div>
    </div>
  );
}
