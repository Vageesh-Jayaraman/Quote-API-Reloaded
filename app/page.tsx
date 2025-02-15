import MainHeader from "@/components/helpers/MainHeader";
import NavigationBar from "@/components/helpers/NavBar";
import QuoteOfTheDay from "@/components/helpers/QOA";
import Features from "@/components/helpers/Features";

export default function Home(){
  return (
    <div>
      
      <NavigationBar></NavigationBar>
      <MainHeader></MainHeader>
      <QuoteOfTheDay></QuoteOfTheDay>
      <Features></Features>

    </div>
    
  );
}