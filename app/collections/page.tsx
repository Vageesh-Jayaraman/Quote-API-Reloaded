"use client";
import Header from "@/components/helpers/Header";
import NavBar from "@/components/helpers/NavBar";
import PaginationLinks from "@/components/helpers/Pagination";
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
  const [currentPage, setCurrentPage] = useState(1);
  const quotesPerPage = 10;

  let filteredQuotes = selectedAuthor
    ? data.filter((quote) => quote.author === selectedAuthor)
    : data;

  filteredQuotes = selectedCategory
    ? filteredQuotes.filter(
        (quote) => quote.category.toLowerCase() === selectedCategory
      )
    : filteredQuotes;

  const lastIndex = currentPage * quotesPerPage;
  const firstIndex = lastIndex - quotesPerPage;
  const currentQuotes = filteredQuotes.slice(firstIndex, lastIndex);

  return (
    <div>
      <NavBar />
      <Header title="Collections" />
      <div className="mx-20 flex flex-row-reverse gap-5">
        <SelectOptions 
          title="Category" 
          options={categories} 
          value={selectedCategory}
          onCategorySelect={setSelectedCategory} 
        />
        <ComboBox 
          value={selectedAuthor} 
          onAuthorSelect={setSelectedAuthor}
        />
      </div>
      <div className="mx-20 my-10">
        {currentQuotes.length > 0 ? (
          <div>
          {currentQuotes.map((object, index) => (
            <QuoteDisplay
              key={index}
              quote={object.quote}
              author={object.author}
              category={object.category}
            />
          ))
          }
          <PaginationLinks 
        totalQuotes={filteredQuotes.length} 
        quotesPerPage={quotesPerPage} 
        setCurrentPage={setCurrentPage} 
        currentPage={currentPage}
      />
          </div>
        ) : (
          <p className="text-center text-xl text-white">Oops! No results found 😔</p>
          
        )} 

      </div>
      
    </div>
  );
}
