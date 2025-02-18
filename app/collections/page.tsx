"use client";
import { useState, useEffect } from "react";
import Header from "@/components/helpers/Header";
import NavBar from "@/components/helpers/NavBar";
import PaginationLinks from "@/components/helpers/Pagination";
import QuoteDisplay from "@/components/helpers/QuoteDisplay";
import ComboBox from "@/components/helpers/SearchBar";
import SelectOptions from "@/components/helpers/SelectOptions";

interface Quote {
  quote: string;
  author: string;
  category: string;
}

const categories = [
  { title: "Motivation" },
  { title: "Affirmation" },
  { title: "Fitness" },
  { title: "Relationship" },
  { title: "Positivity" },
];

export default function Home() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const quotesPerPage = 10;

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch("/api/quotes");
        if (!response.ok) throw new Error("Failed to fetch quotes");

        const data: Quote[] = await response.json();
        if (!Array.isArray(data)) throw new Error("API response is not an array");

        setQuotes(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuotes();
  }, []);

  // Extract unique authors from quotes
  const uniqueAuthors = Array.from(new Set(quotes.map((quote) => quote.author)));

  let filteredQuotes = selectedAuthor
    ? quotes.filter((quote) => quote.author === selectedAuthor)
    : quotes;

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
          authors={uniqueAuthors} // Pass authors list here
        />
      </div>

      <div className="mx-20 my-10">
        {loading ? (
          <p className="text-center text-xl text-white font-mono">Loading quotes...</p>
        ) : error ? (
          <p className="text-center text-xl text-red-500">{error}</p>
        ) : currentQuotes.length > 0 ? (
          <div>
            {currentQuotes.map((object, index) => (
              <QuoteDisplay
                key={index}
                quote={object.quote}
                author={object.author}
                category={object.category}
              />
            ))}
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
