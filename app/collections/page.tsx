import Header from "@/components/helpers/Header";
import QuoteDisplay from "@/components/helpers/QuoteDisplay";
import SelectOptions from "@/components/helpers/SelectOptions";
import data from "@/data.json";

const categories = [
    { title: "Motivation" },
    { title: "Affirmations" },
    { title: "Fitness" },
    { title: "Relationships" },
    { title: "Positivity" },
  ];
  

export default function Home() {
    return (
        <div>
            <Header title="Collections"/>
            <div className="mx-20 flex flex-row-reverse gap-5">
                <SelectOptions title="Category" options={categories} />
                <SelectOptions title="Author" options={categories} />
            </div>
            <div className="mx-20 my-10">
                {data.map((object, index) => (
                    <QuoteDisplay 
                        key={index} 
                        quote={object.quote} 
                        author={object.author} 
                        category={object.category}
                    />
                ))}
            </div>
        </div>
    );
}
